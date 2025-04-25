import os
import json
import io
import shutil
from pathlib import Path
from mutagen.mp3 import MP3
from mutagen.id3 import ID3, APIC, TIT2, TALB, TDRC, TPE1
from PIL import Image

def extract_and_process_mp3s(images_dir, renamed_songs_dir, source_dir, json_path):
    images_dir = Path(images_dir)
    renamed_songs_dir = Path(renamed_songs_dir)
    source_dir = Path(source_dir)
    json_path = Path(json_path)

    print(f"[INFO] Creating directories if they don't exist...")
    images_dir.mkdir(parents=True, exist_ok=True)
    renamed_songs_dir.mkdir(parents=True, exist_ok=True)

    # Load existing JSON data or initialize new list
    if json_path.exists():
        print(f"[INFO] Loading existing JSON from {json_path}")
        with open(json_path, "r") as f:
            try:
                all_info = json.load(f)
                print(f"[INFO] Loaded {len(all_info)} existing entries.")
            except json.JSONDecodeError:
                print(f"[WARNING] JSON file exists but is invalid. Initializing empty list.")
                all_info = []
    else:
        print(f"[INFO] JSON file does not exist. Initializing new list.")
        all_info = []

    index = len(all_info) + 1
    found_files = 0
    processed_files = 0

    print(f"[INFO] Scanning for MP3 files in {source_dir}...\n")

    for root, _, files in os.walk(source_dir):
        for file in files:
            if file.lower().endswith(".mp3"):
                found_files += 1
                full_path = Path(root) / file
                print(f"[FOUND] MP3 file: {full_path}")

                try:
                    audio = MP3(full_path, ID3=ID3)

                    title = audio.tags.get("TIT2", TIT2(encoding=3, text="Unknown Title")).text[0]
                    album = audio.tags.get("TALB", TALB(encoding=3, text="Unknown Album")).text[0]
                    year = audio.tags.get("TDRC", TDRC(encoding=3, text="Unknown Year")).text[0]
                    artist = audio.tags.get("TPE1", TPE1(encoding=3, text="Unknown Artist")).text[0]

                    print(f"[INFO] Metadata - Title: {title}, Album: {album}, Year: {year}, Artist: {artist}")

                    # Extract cover image
                    image_saved = False
                    for tag in audio.tags.values():
                        if isinstance(tag, APIC):
                            image = Image.open(io.BytesIO(tag.data))
                            image_path = images_dir / f"{index}.png"
                            image.save(image_path)
                            print(f"[OK] Cover image saved: {image_path}")
                            image_saved = True
                            break

                    if not image_saved:
                        print(f"[WARNING] No cover image found in {file}. Skipping.")
                        continue

                    # Move/rename MP3
                    new_song_path = renamed_songs_dir / f"{index}.mp3"
                    shutil.copy2(full_path, new_song_path)
                    print(f"[OK] Song copied to: {new_song_path}")

                    # Create JSON entry with correct relative paths
                    json_entry = {
                        "backgroundImage": f"./assets/images/{index}.png",
                        "posterUrl": f"./assets/images/{index}.png",
                        "title": title,
                        "album": album,
                        "year": str(year),
                        "artist": artist,
                        "musicPath": f"./assets/music/{index}.mp3",
                    }

                    all_info.append(json_entry)
                    processed_files += 1
                    index += 1

                except Exception as e:
                    print(f"[ERROR] Failed to process {full_path}: {e}")

    # Save updated JSON
    print(f"\n[INFO] Writing {len(all_info)} total entries to JSON file: {json_path}")
    with open(json_path, "w") as f:
        json.dump(all_info, f, indent=2)

    print(f"\n✅ Done. Found: {found_files}, Processed: {processed_files}, JSON updated.\n")

# Example call:
extract_and_process_mp3s("./assets/images", "./assets/music", "./original_songs", "./all_info.json")