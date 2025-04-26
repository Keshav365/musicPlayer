'use strict';



/**
 * all music information
 */

const musicData = [
  {
    "backgroundImage": "./assets/images/1.png",
    "posterUrl": "./assets/images/1.png",
    "title": "100 words",
    "album": "cold/mess",
    "year": "2020",
    "artist": "Prateek Kuhad",
    "musicPath": "./assets/music/1.mp3"
  },
  {
    "backgroundImage": "./assets/images/2.png",
    "posterUrl": "./assets/images/2.png",
    "title": "24K Magic",
    "album": "24K Magic",
    "year": "2016",
    "artist": "Bruno Mars",
    "musicPath": "./assets/music/2.mp3"
  },
  {
    "backgroundImage": "./assets/images/3.png",
    "posterUrl": "./assets/images/3.png",
    "title": "4AM in Karachi",
    "album": "Worth The Wait",
    "year": "2022",
    "artist": "Talha Anjum/Umair",
    "musicPath": "./assets/music/3.mp3"
  },
  {
    "backgroundImage": "./assets/images/4.png",
    "posterUrl": "./assets/images/4.png",
    "title": "80 Degrees",
    "album": "Bacthafu*up",
    "year": "2021",
    "artist": "Karan Aujla/Tru-Skool/Amaal Nuux",
    "musicPath": "./assets/music/4.mp3"
  },
  {
    "backgroundImage": "./assets/images/5.png",
    "posterUrl": "./assets/images/5.png",
    "title": "A Lonely Night",
    "album": "Starboy",
    "year": "2016",
    "artist": "The Weeknd",
    "musicPath": "./assets/music/5.mp3"
  },
  {
    "backgroundImage": "./assets/images/6.png",
    "posterUrl": "./assets/images/6.png",
    "title": "A Man Without Love",
    "album": "A Man Without Love",
    "year": "1968",
    "artist": "Engelbert Humperdinck",
    "musicPath": "./assets/music/6.mp3"
  },
  {
    "backgroundImage": "./assets/images/7.png",
    "posterUrl": "./assets/images/7.png",
    "title": "A-O-K",
    "album": "A-O-K",
    "year": "2021",
    "artist": "Tai Verdes",
    "musicPath": "./assets/music/7.mp3"
  },
  {
    "backgroundImage": "./assets/images/8.png",
    "posterUrl": "./assets/images/8.png",
    "title": "A.D.H.D",
    "album": "Section.80",
    "year": "2011",
    "artist": "Kendrick Lamar",
    "musicPath": "./assets/music/8.mp3"
  },
  {
    "backgroundImage": "./assets/images/9.png",
    "posterUrl": "./assets/images/9.png",
    "title": "Aaj Kal Zindagi",
    "album": "Wake Up Sid (Original Motion Picture Soundtrack)",
    "year": "2009",
    "artist": "Shankar-Ehsaan-Loy/Shankar Mahadevan",
    "musicPath": "./assets/music/9.mp3"
  },
  {
    "backgroundImage": "./assets/images/10.png",
    "posterUrl": "./assets/images/10.png",
    "title": "Aankhein",
    "album": "Aankhein",
    "year": "2021",
    "artist": "Vilen",
    "musicPath": "./assets/music/10.mp3"
  },
  {
    "backgroundImage": "./assets/images/11.png",
    "posterUrl": "./assets/images/11.png",
    "title": "Aankhon Se Batana",
    "album": "Aankhon Se Batana",
    "year": "2022",
    "artist": "Dikshant",
    "musicPath": "./assets/music/11.mp3"
  },
  {
    "backgroundImage": "./assets/images/12.png",
    "posterUrl": "./assets/images/12.png",
    "title": "Aaoge Jab Tum",
    "album": "Jab We Met",
    "year": "2007",
    "artist": "Rashid Khan/Sandesh Shandilya/Faaiz Anwar",
    "musicPath": "./assets/music/12.mp3"
  },
  {
    "backgroundImage": "./assets/images/13.png",
    "posterUrl": "./assets/images/13.png",
    "title": "Aayat",
    "album": "Bajirao Mastani (Original Motion Picture Soundtrack)",
    "year": "2015",
    "artist": "Arijit Singh/Mujtaba Aziz Naza/Altamash Faridi/Farhan Sabri/A.M. Turaz/Nasir Faraaz",
    "musicPath": "./assets/music/13.mp3"
  },
  {
    "backgroundImage": "./assets/images/14.png",
    "posterUrl": "./assets/images/14.png",
    "title": "Adagietto",
    "album": "This Is (Not) Beethoven",
    "year": "2020",
    "artist": "Ludwig van Beethoven/Arash Safaian/Sebastian Knauer",
    "musicPath": "./assets/music/14.mp3"
  },
  {
    "backgroundImage": "./assets/images/15.png",
    "posterUrl": "./assets/images/15.png",
    "title": "Admirin' You (feat. Preston Pablo)",
    "album": "Admirin' You (feat. Preston Pablo)",
    "year": "2023",
    "artist": "Karan Aujla/Ikky/Preston Pablo",
    "musicPath": "./assets/music/15.mp3"
  },
  {
    "backgroundImage": "./assets/images/16.png",
    "posterUrl": "./assets/images/16.png",
    "title": "Adore You",
    "album": "Fine Line",
    "year": "2019",
    "artist": "Harry Styles",
    "musicPath": "./assets/music/16.mp3"
  },
  {
    "backgroundImage": "./assets/images/17.png",
    "posterUrl": "./assets/images/17.png",
    "title": "After Hours",
    "album": "After Hours",
    "year": "2020",
    "artist": "The Weeknd",
    "musicPath": "./assets/music/17.mp3"
  },
  {
    "backgroundImage": "./assets/images/18.png",
    "posterUrl": "./assets/images/18.png",
    "title": "After the Afterparty (feat. Lil Yachty) - Alan Walker Remix",
    "album": "After the Afterparty (feat. Lil Yachty) [Alan Walker Remix]",
    "year": "2017",
    "artist": "Charli xcx/Lil Yachty/Alan Walker",
    "musicPath": "./assets/music/18.mp3"
  },
  {
    "backgroundImage": "./assets/images/19.png",
    "posterUrl": "./assets/images/19.png",
    "title": "Afterhours",
    "album": "Afterhours",
    "year": "2022",
    "artist": "Bir/Dhanju/thiarajxtt",
    "musicPath": "./assets/music/19.mp3"
  },
  {
    "backgroundImage": "./assets/images/20.png",
    "posterUrl": "./assets/images/20.png",
    "title": "agoraphobic",
    "album": "agoraphobic",
    "year": "2021",
    "artist": "CORPSE",
    "musicPath": "./assets/music/20.mp3"
  },
  {
    "backgroundImage": "./assets/images/21.png",
    "posterUrl": "./assets/images/21.png",
    "title": "airplane thoughts",
    "album": "rapunzel",
    "year": "2022",
    "artist": "Dhruv",
    "musicPath": "./assets/music/21.mp3"
  },
  {
    "backgroundImage": "./assets/images/22.png",
    "posterUrl": "./assets/images/22.png",
    "title": "Aisay Kaisay",
    "album": "Aisay Kaisay",
    "year": "2020",
    "artist": "Hasan Raheem/Abdullah Kasumbi",
    "musicPath": "./assets/music/22.mp3"
  },
  {
    "backgroundImage": "./assets/images/23.png",
    "posterUrl": "./assets/images/23.png",
    "title": "Ajj Din Chadheya",
    "album": "Love Aaj Kal (Original Motion Picture Soundtrack)",
    "year": "2009",
    "artist": "Rahat Fateh Ali Khan/Pritam",
    "musicPath": "./assets/music/23.mp3"
  },
  {
    "backgroundImage": "./assets/images/24.png",
    "posterUrl": "./assets/images/24.png",
    "title": "Akhian Nimanian (From \"Annhi Dea Mazaak Ae\")",
    "album": "Akhian Nimanian (From \"Annhi Dea Mazaak Ae\")",
    "year": "2023",
    "artist": "Amrinder Gill/Ammy Virk/Pari Pandher",
    "musicPath": "./assets/music/24.mp3"
  },
  {
    "backgroundImage": "./assets/images/25.png",
    "posterUrl": "./assets/images/25.png",
    "title": "Akhiyaan",
    "album": "Akhiyaan",
    "year": "2022",
    "artist": "Mitraz",
    "musicPath": "./assets/music/25.mp3"
  },
  {
    "backgroundImage": "./assets/images/26.png",
    "posterUrl": "./assets/images/26.png",
    "title": "Alag Aasmaan",
    "album": "Alag Aasmaan",
    "year": "2020",
    "artist": "Anuv Jain",
    "musicPath": "./assets/music/26.mp3"
  },
  {
    "backgroundImage": "./assets/images/27.png",
    "posterUrl": "./assets/images/27.png",
    "title": "Alien Blues",
    "album": "Gawk",
    "year": "2015",
    "artist": "Vundabar",
    "musicPath": "./assets/music/27.mp3"
  },
  {
    "backgroundImage": "./assets/images/28.png",
    "posterUrl": "./assets/images/28.png",
    "title": "All Alone",
    "album": "All Alone",
    "year": "2019",
    "artist": "Freddie Dredd",
    "musicPath": "./assets/music/28.mp3"
  },
  {
    "backgroundImage": "./assets/images/29.png",
    "posterUrl": "./assets/images/29.png",
    "title": "All Eyez On Me (ft. Big Syke)",
    "album": "All Eyez On Me",
    "year": "1996",
    "artist": "2Pac/Big Syke",
    "musicPath": "./assets/music/29.mp3"
  },
  {
    "backgroundImage": "./assets/images/30.png",
    "posterUrl": "./assets/images/30.png",
    "title": "All For Us - from the HBO Original Series Euphoria",
    "album": "All For Us (from the HBO Original Series Euphoria)",
    "year": "2019",
    "artist": "Labrinth/Zendaya",
    "musicPath": "./assets/music/30.mp3"
  },
  {
    "backgroundImage": "./assets/images/31.png",
    "posterUrl": "./assets/images/31.png",
    "title": "All I Want",
    "album": "In A Perfect World (Expanded Edition)",
    "year": "2013",
    "artist": "Kodaline",
    "musicPath": "./assets/music/31.mp3"
  },
  {
    "backgroundImage": "./assets/images/32.png",
    "posterUrl": "./assets/images/32.png",
    "title": "All Night",
    "album": "Night & Day (Night Edition)",
    "year": "2017",
    "artist": "The Vamps/Matoma",
    "musicPath": "./assets/music/32.mp3"
  },
  {
    "backgroundImage": "./assets/images/33.png",
    "posterUrl": "./assets/images/33.png",
    "title": "all the kids are depressed",
    "album": "glisten",
    "year": "2018",
    "artist": "Jeremy Zucker",
    "musicPath": "./assets/music/33.mp3"
  },
  {
    "backgroundImage": "./assets/images/34.png",
    "posterUrl": "./assets/images/34.png",
    "title": "All The Stars (with SZA)",
    "album": "Black Panther The Album Music From And Inspired By",
    "year": "2018",
    "artist": "Kendrick Lamar/SZA",
    "musicPath": "./assets/music/34.mp3"
  },
  {
    "backgroundImage": "./assets/images/35.png",
    "posterUrl": "./assets/images/35.png",
    "title": "All The Things She Said",
    "album": "200 KM/H In The Wrong Lane (10th Anniversary Edition)",
    "year": "2002",
    "artist": "t.A.T.u.",
    "musicPath": "./assets/music/35.mp3"
  },
  {
    "backgroundImage": "./assets/images/36.png",
    "posterUrl": "./assets/images/36.png",
    "title": "always, i'll care",
    "album": "love is not dying",
    "year": "2020",
    "artist": "Jeremy Zucker",
    "musicPath": "./assets/music/36.mp3"
  },
  {
    "backgroundImage": "./assets/images/37.png",
    "posterUrl": "./assets/images/37.png",
    "title": "Am I High Rn (feat. blackbear)",
    "album": "A Letter To My Younger Self",
    "year": "2020",
    "artist": "Quinn XCII/blackbear",
    "musicPath": "./assets/music/37.mp3"
  },
  {
    "backgroundImage": "./assets/images/38.png",
    "posterUrl": "./assets/images/38.png",
    "title": "Amour plastique",
    "album": "Amour plastique",
    "year": "2018",
    "artist": "Videoclub/Ad\u00e8le Castillon/Mattyeux",
    "musicPath": "./assets/music/38.mp3"
  },
  {
    "backgroundImage": "./assets/images/39.png",
    "posterUrl": "./assets/images/39.png",
    "title": "Another One Bites The Dust - Remastered 2011",
    "album": "The Game (2011 Remaster)",
    "year": "1980",
    "artist": "Queen",
    "musicPath": "./assets/music/39.mp3"
  },
  {
    "backgroundImage": "./assets/images/40.png",
    "posterUrl": "./assets/images/40.png",
    "title": "Antariksh",
    "album": "Antariksh",
    "year": "2023",
    "artist": "Anuv Jain",
    "musicPath": "./assets/music/40.mp3"
  },
  {
    "backgroundImage": "./assets/images/41.png",
    "posterUrl": "./assets/images/41.png",
    "title": "Any song",
    "album": "Any song",
    "year": "2020",
    "artist": "ZICO",
    "musicPath": "./assets/music/41.mp3"
  },
  {
    "backgroundImage": "./assets/images/42.png",
    "posterUrl": "./assets/images/42.png",
    "title": "Ari Ari",
    "album": "Ari Ari",
    "year": "2018",
    "artist": "Bloodywood",
    "musicPath": "./assets/music/42.mp3"
  },
  {
    "backgroundImage": "./assets/images/43.png",
    "posterUrl": "./assets/images/43.png",
    "title": "Asal G",
    "album": "Lunch Break",
    "year": "2023",
    "artist": "Seedhe Maut/Faris Shafi/Talal Qureshi",
    "musicPath": "./assets/music/43.mp3"
  },
  {
    "backgroundImage": "./assets/images/44.png",
    "posterUrl": "./assets/images/44.png",
    "title": "Asal Mein",
    "album": "Asal Mein",
    "year": "2020",
    "artist": "Darshan Raval",
    "musicPath": "./assets/music/44.mp3"
  },
  {
    "backgroundImage": "./assets/images/45.png",
    "posterUrl": "./assets/images/45.png",
    "title": "at least i'm pretty",
    "album": "at least i'm pretty",
    "year": "2021",
    "artist": "Harriette",
    "musicPath": "./assets/music/45.mp3"
  },
  {
    "backgroundImage": "./assets/images/46.png",
    "posterUrl": "./assets/images/46.png",
    "title": "At My Worst",
    "album": "PINK PLANET",
    "year": "2021",
    "artist": "Pink Sweat$",
    "musicPath": "./assets/music/46.mp3"
  },
  {
    "backgroundImage": "./assets/images/47.png",
    "posterUrl": "./assets/images/47.png",
    "title": "Awaaz (From \"Qismat\")",
    "album": "Awaaz (From \"Qismat\") - Single",
    "year": "2018",
    "artist": "Kamal Khan",
    "musicPath": "./assets/music/47.mp3"
  },
  {
    "backgroundImage": "./assets/images/48.png",
    "posterUrl": "./assets/images/48.png",
    "title": "Aye Khuda",
    "album": "Murder 2",
    "year": "2011",
    "artist": "Kshitij Tarey/Saim Bhat/Mithoon",
    "musicPath": "./assets/music/48.mp3"
  },
  {
    "backgroundImage": "./assets/images/49.png",
    "posterUrl": "./assets/images/49.png",
    "title": "Baarishein",
    "album": "Baarishein",
    "year": "2018",
    "artist": "Anuv Jain",
    "musicPath": "./assets/music/49.mp3"
  },
  {
    "backgroundImage": "./assets/images/50.png",
    "posterUrl": "./assets/images/50.png",
    "title": "Back To Black",
    "album": "Back To Black (Deluxe Edition)",
    "year": "2006",
    "artist": "Amy Winehouse",
    "musicPath": "./assets/music/50.mp3"
  },
  {
    "backgroundImage": "./assets/images/51.png",
    "posterUrl": "./assets/images/51.png",
    "title": "Back To You - From 13 Reasons Why \u2013 Season 2 Soundtrack",
    "album": "Back To You (From 13 Reasons Why \u2013 Season 2 Soundtrack)",
    "year": "2018",
    "artist": "Selena Gomez",
    "musicPath": "./assets/music/51.mp3"
  },
  {
    "backgroundImage": "./assets/images/52.png",
    "posterUrl": "./assets/images/52.png",
    "title": "Bad Habit",
    "album": "Bad Habit",
    "year": "2022",
    "artist": "Steve Lacy",
    "musicPath": "./assets/music/52.mp3"
  },
  {
    "backgroundImage": "./assets/images/53.png",
    "posterUrl": "./assets/images/53.png",
    "title": "Baddal",
    "album": "Baddal",
    "year": "2016",
    "artist": "Jasmine Sandlas/Intense",
    "musicPath": "./assets/music/53.mp3"
  },
  {
    "backgroundImage": "./assets/images/54.png",
    "posterUrl": "./assets/images/54.png",
    "title": "Bakhuda Tumhi Ho",
    "album": "Kismat Konnection (Original Motion Picture Soundtrack)",
    "year": "2008",
    "artist": "Atif Aslam/Alka Yagnik/Pritam",
    "musicPath": "./assets/music/54.mp3"
  },
  {
    "backgroundImage": "./assets/images/55.png",
    "posterUrl": "./assets/images/55.png",
    "title": "Bangarang (feat. Sirah)",
    "album": "Bangarang EP",
    "year": "2011",
    "artist": "Skrillex/Sirah",
    "musicPath": "./assets/music/55.mp3"
  },
  {
    "backgroundImage": "./assets/images/56.png",
    "posterUrl": "./assets/images/56.png",
    "title": "Bas Tu",
    "album": "Bas Tu",
    "year": "2015",
    "artist": "Roshan Prince/Millind Gaba",
    "musicPath": "./assets/music/56.mp3"
  },
  {
    "backgroundImage": "./assets/images/57.png",
    "posterUrl": "./assets/images/57.png",
    "title": "Beautiful Boy (Darling Boy) - Remastered 2010",
    "album": "Double Fantasy",
    "year": "1980",
    "artist": "John Lennon",
    "musicPath": "./assets/music/57.mp3"
  },
  {
    "backgroundImage": "./assets/images/58.png",
    "posterUrl": "./assets/images/58.png",
    "title": "Beautiful",
    "album": "Relapse: Refill",
    "year": "2009",
    "artist": "Eminem",
    "musicPath": "./assets/music/58.mp3"
  },
  {
    "backgroundImage": "./assets/images/59.png",
    "posterUrl": "./assets/images/59.png",
    "title": "Been a While",
    "album": "Time Will Tell",
    "year": "2023",
    "artist": "KR$NA/Talha Anjum/Umair",
    "musicPath": "./assets/music/59.mp3"
  },
  {
    "backgroundImage": "./assets/images/60.png",
    "posterUrl": "./assets/images/60.png",
    "title": "Beethoven's 5 Secrets",
    "album": "Beethoven's 5 Secrets",
    "year": "2012",
    "artist": "Ludwig van Beethoven/Ryan Tedder/Steven Sharp Nelson/Al van der Beek/Kayson Brown/The Piano Guys/John Nelson/Lyceum Philharmonic at American Heritage School",
    "musicPath": "./assets/music/60.mp3"
  },
  {
    "backgroundImage": "./assets/images/61.png",
    "posterUrl": "./assets/images/61.png",
    "title": "Beggin'",
    "album": "Chosen",
    "year": "2017",
    "artist": "M\u00e5neskin",
    "musicPath": "./assets/music/61.mp3"
  },
  {
    "backgroundImage": "./assets/images/62.png",
    "posterUrl": "./assets/images/62.png",
    "title": "Bekaar",
    "album": "Bekaar",
    "year": "2021",
    "artist": "Vilen",
    "musicPath": "./assets/music/62.mp3"
  },
  {
    "backgroundImage": "./assets/images/63.png",
    "posterUrl": "./assets/images/63.png",
    "title": "BETTER OFF DEAD",
    "album": "Tell Me About Tomorrow",
    "year": "2021",
    "artist": "jxdn",
    "musicPath": "./assets/music/63.mp3"
  },
  {
    "backgroundImage": "./assets/images/64.png",
    "posterUrl": "./assets/images/64.png",
    "title": "Better",
    "album": "Better",
    "year": "2018",
    "artist": "Khalid",
    "musicPath": "./assets/music/64.mp3"
  },
  {
    "backgroundImage": "./assets/images/65.png",
    "posterUrl": "./assets/images/65.png",
    "title": "Bewafa",
    "album": "Unforgettable",
    "year": "2009",
    "artist": "Imran Khan",
    "musicPath": "./assets/music/65.mp3"
  },
  {
    "backgroundImage": "./assets/images/66.png",
    "posterUrl": "./assets/images/66.png",
    "title": "BIBA",
    "album": "OFIVE1",
    "year": "2020",
    "artist": "Farasat Anees/Slick Trick/Toshi",
    "musicPath": "./assets/music/66.mp3"
  },
  {
    "backgroundImage": "./assets/images/67.png",
    "posterUrl": "./assets/images/67.png",
    "title": "BIG DAWG THING (feat. JJ47, Talha Anjum, Shamoon Ismail & Talhah Yunus)",
    "album": "BIG DAWG THING",
    "year": "2024",
    "artist": "Umair/JJ47/Talha Anjum/Shamoon Ismail/Talhah Yunus",
    "musicPath": "./assets/music/67.mp3"
  },
  {
    "backgroundImage": "./assets/images/68.png",
    "posterUrl": "./assets/images/68.png",
    "title": "Bird",
    "album": "Bird",
    "year": "2020",
    "artist": "Yun Head",
    "musicPath": "./assets/music/68.mp3"
  },
  {
    "backgroundImage": "./assets/images/69.png",
    "posterUrl": "./assets/images/69.png",
    "title": "Bitch Lasagna",
    "album": "Bitch Lasagna",
    "year": "2018",
    "artist": "pewdiepie/Party in Backyard",
    "musicPath": "./assets/music/69.mp3"
  },
  {
    "backgroundImage": "./assets/images/70.png",
    "posterUrl": "./assets/images/70.png",
    "title": "Black Matte",
    "album": "Black Matte",
    "year": "2019",
    "artist": "Jaura Phagwara/Enzo",
    "musicPath": "./assets/music/70.mp3"
  },
  {
    "backgroundImage": "./assets/images/71.png",
    "posterUrl": "./assets/images/71.png",
    "title": "Black Suit",
    "album": "Best Of Preet Harpal",
    "year": "2017",
    "artist": "Preet Harpal/Fateh",
    "musicPath": "./assets/music/71.mp3"
  },
  {
    "backgroundImage": "./assets/images/72.png",
    "posterUrl": "./assets/images/72.png",
    "title": "bloody valentine",
    "album": "bloody valentine",
    "year": "2020",
    "artist": "mgk",
    "musicPath": "./assets/music/72.mp3"
  },
  {
    "backgroundImage": "./assets/images/73.png",
    "posterUrl": "./assets/images/73.png",
    "title": "Blue & Grey",
    "album": "BE",
    "year": "2020",
    "artist": "BTS",
    "musicPath": "./assets/music/73.mp3"
  },
  {
    "backgroundImage": "./assets/images/74.png",
    "posterUrl": "./assets/images/74.png",
    "title": "Bohemian Rhapsody - Remastered 2011",
    "album": "A Night At The Opera (2011 Remaster)",
    "year": "1975",
    "artist": "Queen",
    "musicPath": "./assets/music/74.mp3"
  },
  {
    "backgroundImage": "./assets/images/75.png",
    "posterUrl": "./assets/images/75.png",
    "title": "Bones",
    "album": "Mercury - Acts 1 & 2",
    "year": "2022",
    "artist": "Imagine Dragons",
    "musicPath": "./assets/music/75.mp3"
  },
  {
    "backgroundImage": "./assets/images/76.png",
    "posterUrl": "./assets/images/76.png",
    "title": "Boulevard of Broken Dreams",
    "album": "Boulevard of Broken Dreams",
    "year": "2019",
    "artist": "Codfish",
    "musicPath": "./assets/music/76.mp3"
  },
  {
    "backgroundImage": "./assets/images/77.png",
    "posterUrl": "./assets/images/77.png",
    "title": "Bound 2",
    "album": "Yeezus",
    "year": "2013",
    "artist": "Kanye West",
    "musicPath": "./assets/music/77.mp3"
  },
  {
    "backgroundImage": "./assets/images/78.png",
    "posterUrl": "./assets/images/78.png",
    "title": "Break Stuff",
    "album": "Significant Other",
    "year": "1999",
    "artist": "Limp Bizkit",
    "musicPath": "./assets/music/78.mp3"
  },
  {
    "backgroundImage": "./assets/images/79.png",
    "posterUrl": "./assets/images/79.png",
    "title": "Breathe (In the Air)",
    "album": "The Dark Side of the Moon",
    "year": "1973",
    "artist": "Pink Floyd",
    "musicPath": "./assets/music/79.mp3"
  },
  {
    "backgroundImage": "./assets/images/80.png",
    "posterUrl": "./assets/images/80.png",
    "title": "Bulla Ki Jana",
    "album": "Rabbi",
    "year": "2004",
    "artist": "Rabbi Shergill",
    "musicPath": "./assets/music/80.mp3"
  },
  {
    "backgroundImage": "./assets/images/81.png",
    "posterUrl": "./assets/images/81.png",
    "title": "Bulleya",
    "album": "Ae Dil Hai Mushkil (Original Motion Picture Soundtrack) [Deluxe Edition]",
    "year": "2016",
    "artist": "Pritam/Amit Mishra/Shilpa Rao",
    "musicPath": "./assets/music/81.mp3"
  },
  {
    "backgroundImage": "./assets/images/82.png",
    "posterUrl": "./assets/images/82.png",
    "title": "Business",
    "album": "The Eminem Show",
    "year": "2002",
    "artist": "Eminem",
    "musicPath": "./assets/music/82.mp3"
  },
  {
    "backgroundImage": "./assets/images/83.png",
    "posterUrl": "./assets/images/83.png",
    "title": "Californication",
    "album": "Californication (Deluxe Edition)",
    "year": "1999",
    "artist": "Red Hot Chili Peppers",
    "musicPath": "./assets/music/83.mp3"
  },
  {
    "backgroundImage": "./assets/images/84.png",
    "posterUrl": "./assets/images/84.png",
    "title": "Call Aundi",
    "album": "Zorawar",
    "year": "2016",
    "artist": "Yo Yo Honey Singh",
    "musicPath": "./assets/music/84.mp3"
  },
  {
    "backgroundImage": "./assets/images/85.png",
    "posterUrl": "./assets/images/85.png",
    "title": "Call Out My Name",
    "album": "My Dear Melancholy,",
    "year": "2018",
    "artist": "The Weeknd",
    "musicPath": "./assets/music/85.mp3"
  },
  {
    "backgroundImage": "./assets/images/86.png",
    "posterUrl": "./assets/images/86.png",
    "title": "Can't Feel My Face",
    "album": "Can\u2019t Feel My Face",
    "year": "2015",
    "artist": "The Weeknd",
    "musicPath": "./assets/music/86.mp3"
  },
  {
    "backgroundImage": "./assets/images/87.png",
    "posterUrl": "./assets/images/87.png",
    "title": "Can't Hold Us (feat. Ray Dalton)",
    "album": "The Heist",
    "year": "2012",
    "artist": "Macklemore/Ryan Lewis/Macklemore & Ryan Lewis/Ray Dalton",
    "musicPath": "./assets/music/87.mp3"
  },
  {
    "backgroundImage": "./assets/images/88.png",
    "posterUrl": "./assets/images/88.png",
    "title": "Can't Tell Me Nothing",
    "album": "Graduation",
    "year": "2007",
    "artist": "Kanye West",
    "musicPath": "./assets/music/88.mp3"
  },
  {
    "backgroundImage": "./assets/images/89.png",
    "posterUrl": "./assets/images/89.png",
    "title": "Can\u2019t Take My Eyes Off You - BBC Live Version",
    "album": "Wonder (Holiday Deluxe)",
    "year": "2020",
    "artist": "Shawn Mendes",
    "musicPath": "./assets/music/89.mp3"
  },
  {
    "backgroundImage": "./assets/images/90.png",
    "posterUrl": "./assets/images/90.png",
    "title": "Caterpillar (feat. Eminem & King Green)",
    "album": "Book of Ryan (Bonus Track Edition)",
    "year": "2018",
    "artist": "Royce Da 5'9\"/Eminem/King Green",
    "musicPath": "./assets/music/90.mp3"
  },
  {
    "backgroundImage": "./assets/images/91.png",
    "posterUrl": "./assets/images/91.png",
    "title": "Chain Hang Low",
    "album": "Jibbs feat. Jibbs",
    "year": "2006",
    "artist": "Jibbs",
    "musicPath": "./assets/music/91.mp3"
  },
  {
    "backgroundImage": "./assets/images/92.png",
    "posterUrl": "./assets/images/92.png",
    "title": "Chakkwein Suit",
    "album": "Chakkwein Suit",
    "year": "2015",
    "artist": "Kulwinder Billa/Tigerstyle",
    "musicPath": "./assets/music/92.mp3"
  },
  {
    "backgroundImage": "./assets/images/93.png",
    "posterUrl": "./assets/images/93.png",
    "title": "Chalo Chalein",
    "album": "Dev",
    "year": "2021",
    "artist": "Ritviz/Seedhe Maut",
    "musicPath": "./assets/music/93.mp3"
  },
  {
    "backgroundImage": "./assets/images/94.png",
    "posterUrl": "./assets/images/94.png",
    "title": "Chan Kithan",
    "album": "Chan Kithan",
    "year": "2019",
    "artist": "Ali Sethi",
    "musicPath": "./assets/music/94.mp3"
  },
  {
    "backgroundImage": "./assets/images/95.png",
    "posterUrl": "./assets/images/95.png",
    "title": "Chand Sifarish",
    "album": "Fanaa",
    "year": "2006",
    "artist": "Jatin-Lalit/Shaan/Kailash Kher/Prasoon Joshi",
    "musicPath": "./assets/music/95.mp3"
  },
  {
    "backgroundImage": "./assets/images/96.png",
    "posterUrl": "./assets/images/96.png",
    "title": "Change (In the House of Flies)",
    "album": "White Pony",
    "year": "2000",
    "artist": "Deftones",
    "musicPath": "./assets/music/96.mp3"
  },
  {
    "backgroundImage": "./assets/images/97.png",
    "posterUrl": "./assets/images/97.png",
    "title": "Chapter Six",
    "album": "Section.80",
    "year": "2011",
    "artist": "Kendrick Lamar",
    "musicPath": "./assets/music/97.mp3"
  },
  {
    "backgroundImage": "./assets/images/98.png",
    "posterUrl": "./assets/images/98.png",
    "title": "cheers (with Wiz Khalifa)",
    "album": "cheers (with Wiz Khalifa)",
    "year": "2020",
    "artist": "blackbear/Wiz Khalifa",
    "musicPath": "./assets/music/98.mp3"
  },
  {
    "backgroundImage": "./assets/images/99.png",
    "posterUrl": "./assets/images/99.png",
    "title": "Chika Dance",
    "album": "Chika Dance",
    "year": "2019",
    "artist": "AnimeHub",
    "musicPath": "./assets/music/99.mp3"
  },
  {
    "backgroundImage": "./assets/images/100.png",
    "posterUrl": "./assets/images/100.png",
    "title": "Chlorine",
    "album": "Trench",
    "year": "2018",
    "artist": "Twenty One Pilots",
    "musicPath": "./assets/music/100.mp3"
  },
  {
    "backgroundImage": "./assets/images/101.png",
    "posterUrl": "./assets/images/101.png",
    "title": "Choo Lo",
    "album": "Aalas Ka Pedh",
    "year": "2015",
    "artist": "The Local Train",
    "musicPath": "./assets/music/101.mp3"
  },
  {
    "backgroundImage": "./assets/images/102.png",
    "posterUrl": "./assets/images/102.png",
    "title": "Christmas Kids",
    "album": "I Can't Handle Change",
    "year": "2010",
    "artist": "Roar",
    "musicPath": "./assets/music/102.mp3"
  },
  {
    "backgroundImage": "./assets/images/103.png",
    "posterUrl": "./assets/images/103.png",
    "title": "Circles",
    "album": "Hollywood's Bleeding",
    "year": "2019",
    "artist": "Post Malone",
    "musicPath": "./assets/music/103.mp3"
  },
  {
    "backgroundImage": "./assets/images/104.png",
    "posterUrl": "./assets/images/104.png",
    "title": "Clarity",
    "album": "Drizzle & Shower",
    "year": "2021",
    "artist": "Relaxcation",
    "musicPath": "./assets/music/104.mp3"
  },
  {
    "backgroundImage": "./assets/images/105.png",
    "posterUrl": "./assets/images/105.png",
    "title": "Cleanin' Out My Closet",
    "album": "The Eminem Show",
    "year": "2002",
    "artist": "Eminem",
    "musicPath": "./assets/music/105.mp3"
  },
  {
    "backgroundImage": "./assets/images/106.png",
    "posterUrl": "./assets/images/106.png",
    "title": "Cloud 9",
    "album": "Honeymoon",
    "year": "2020",
    "artist": "Beach Bunny",
    "musicPath": "./assets/music/106.mp3"
  },
  {
    "backgroundImage": "./assets/images/107.png",
    "posterUrl": "./assets/images/107.png",
    "title": "Co2 - Acoustic",
    "album": "Co2 (Acoustic)",
    "year": "2023",
    "artist": "Prateek Kuhad",
    "musicPath": "./assets/music/107.mp3"
  },
  {
    "backgroundImage": "./assets/images/108.png",
    "posterUrl": "./assets/images/108.png",
    "title": "Co2",
    "album": "The Way That Lovers Do",
    "year": "2022",
    "artist": "Prateek Kuhad",
    "musicPath": "./assets/music/108.mp3"
  },
  {
    "backgroundImage": "./assets/images/109.png",
    "posterUrl": "./assets/images/109.png",
    "title": "Coffee",
    "album": "Coffee",
    "year": "2017",
    "artist": "beabadoobee",
    "musicPath": "./assets/music/109.mp3"
  },
  {
    "backgroundImage": "./assets/images/110.png",
    "posterUrl": "./assets/images/110.png",
    "title": "Cold (feat. Future)",
    "album": "Red Pill Blues (Deluxe)",
    "year": "2018",
    "artist": "Maroon 5/Future",
    "musicPath": "./assets/music/110.mp3"
  },
  {
    "backgroundImage": "./assets/images/111.png",
    "posterUrl": "./assets/images/111.png",
    "title": "Come Get Her",
    "album": "SremmLife",
    "year": "2015",
    "artist": "Rae Sremmurd",
    "musicPath": "./assets/music/111.mp3"
  },
  {
    "backgroundImage": "./assets/images/112.png",
    "posterUrl": "./assets/images/112.png",
    "title": "Come Right Here",
    "album": "Come Right Here",
    "year": "2018",
    "artist": "Kochetkovv",
    "musicPath": "./assets/music/112.mp3"
  },
  {
    "backgroundImage": "./assets/images/113.png",
    "posterUrl": "./assets/images/113.png",
    "title": "Count Me Out",
    "album": "Mr. Morale & The Big Steppers",
    "year": "2022",
    "artist": "Kendrick Lamar",
    "musicPath": "./assets/music/113.mp3"
  },
  {
    "backgroundImage": "./assets/images/114.png",
    "posterUrl": "./assets/images/114.png",
    "title": "Count What You Have Now",
    "album": "J-Funk City : Vantage's Edits Collection",
    "year": "2019",
    "artist": "Vantage",
    "musicPath": "./assets/music/114.mp3"
  },
  {
    "backgroundImage": "./assets/images/115.png",
    "posterUrl": "./assets/images/115.png",
    "title": "Counting Stars",
    "album": "Native",
    "year": "2013",
    "artist": "OneRepublic",
    "musicPath": "./assets/music/115.mp3"
  },
  {
    "backgroundImage": "./assets/images/116.png",
    "posterUrl": "./assets/images/116.png",
    "title": "Crazy",
    "album": "St. Elsewhere",
    "year": "2006",
    "artist": "Gnarls Barkley",
    "musicPath": "./assets/music/116.mp3"
  },
  {
    "backgroundImage": "./assets/images/117.png",
    "posterUrl": "./assets/images/117.png",
    "title": "Creepin' (with The Weeknd & 21 Savage)",
    "album": "HEROES & VILLAINS",
    "year": "2022",
    "artist": "Metro Boomin/The Weeknd/21 Savage",
    "musicPath": "./assets/music/117.mp3"
  },
  {
    "backgroundImage": "./assets/images/118.png",
    "posterUrl": "./assets/images/118.png",
    "title": "Cupid",
    "album": "The Beginning: Cupid",
    "year": "2023",
    "artist": "FIFTY FIFTY",
    "musicPath": "./assets/music/118.mp3"
  },
  {
    "backgroundImage": "./assets/images/119.png",
    "posterUrl": "./assets/images/119.png",
    "title": "Daisy",
    "album": "Daisy",
    "year": "2020",
    "artist": "Ashnikko",
    "musicPath": "./assets/music/119.mp3"
  },
  {
    "backgroundImage": "./assets/images/120.png",
    "posterUrl": "./assets/images/120.png",
    "title": "Dancing in My Room",
    "album": "Dancing in My Room",
    "year": "2020",
    "artist": "347aidan",
    "musicPath": "./assets/music/120.mp3"
  },
  {
    "backgroundImage": "./assets/images/121.png",
    "posterUrl": "./assets/images/121.png",
    "title": "Dancing With A Stranger (with Normani)",
    "album": "Dancing With A Stranger (with Normani)",
    "year": "2019",
    "artist": "Sam Smith/Normani",
    "musicPath": "./assets/music/121.mp3"
  },
  {
    "backgroundImage": "./assets/images/122.png",
    "posterUrl": "./assets/images/122.png",
    "title": "Dark Horse",
    "album": "PRISM",
    "year": "2013",
    "artist": "Katy Perry/Juicy J",
    "musicPath": "./assets/music/122.mp3"
  },
  {
    "backgroundImage": "./assets/images/123.png",
    "posterUrl": "./assets/images/123.png",
    "title": "Daryaa",
    "album": "Manmarziyaan (Original Motion Picture Soundtrack)",
    "year": "2018",
    "artist": "Amit Trivedi/Shellee/Ammy Virk/Shahid Mallya",
    "musicPath": "./assets/music/123.mp3"
  },
  {
    "backgroundImage": "./assets/images/124.png",
    "posterUrl": "./assets/images/124.png",
    "title": "Death Bed",
    "album": "Death Bed",
    "year": "2020",
    "artist": "Lofi Fruits Music/Fets/Formal Chicken",
    "musicPath": "./assets/music/124.mp3"
  },
  {
    "backgroundImage": "./assets/images/125.png",
    "posterUrl": "./assets/images/125.png",
    "title": "Deeper Than It Seems",
    "album": "Deeper Than It Seems",
    "year": "2022",
    "artist": "Jace June",
    "musicPath": "./assets/music/125.mp3"
  },
  {
    "backgroundImage": "./assets/images/126.png",
    "posterUrl": "./assets/images/126.png",
    "title": "Dekha Ek Khwab - II",
    "album": "Silsila",
    "year": "1981",
    "artist": "Lata Mangeshkar/Kishore Kumar",
    "musicPath": "./assets/music/126.mp3"
  },
  {
    "backgroundImage": "./assets/images/127.png",
    "posterUrl": "./assets/images/127.png",
    "title": "Devil`s Trills, Sonata in G Minor",
    "album": "Tartini, Prokofiev & Jan\u00e1\u010dek: Sonatas",
    "year": "1969",
    "artist": "Giuseppe Tartini/David Oistrakh/Frieda Bauer/\u0414\u0436\u0443\u0437\u0435\u043f\u043f\u0435 \u0422\u0430\u0440\u0442\u0438\u043d\u0438",
    "musicPath": "./assets/music/127.mp3"
  },
  {
    "backgroundImage": "./assets/images/128.png",
    "posterUrl": "./assets/images/128.png",
    "title": "Dhat Teri Ki",
    "album": "Gori Tere Pyaar Mein (Original Motion Picture Soundtrack)",
    "year": "2013",
    "artist": "Vishal-Shekhar/Sanam Puri/Aditi Singh Sharma",
    "musicPath": "./assets/music/128.mp3"
  },
  {
    "backgroundImage": "./assets/images/129.png",
    "posterUrl": "./assets/images/129.png",
    "title": "Dhol Jageero Da",
    "album": "Dhol Jageero Da",
    "year": "2001",
    "artist": "Panjabi MC/Master Saleem",
    "musicPath": "./assets/music/129.mp3"
  },
  {
    "backgroundImage": "./assets/images/130.png",
    "posterUrl": "./assets/images/130.png",
    "title": "Dhundhala",
    "album": "Dhundhala",
    "year": "2022",
    "artist": "Yashraj/Dropped Out/Talwiinder",
    "musicPath": "./assets/music/130.mp3"
  },
  {
    "backgroundImage": "./assets/images/131.png",
    "posterUrl": "./assets/images/131.png",
    "title": "Die Hard",
    "album": "Mr. Morale & The Big Steppers",
    "year": "2022",
    "artist": "Kendrick Lamar/Blxst/Amanda Reifer",
    "musicPath": "./assets/music/131.mp3"
  },
  {
    "backgroundImage": "./assets/images/132.png",
    "posterUrl": "./assets/images/132.png",
    "title": "Different League (feat. Nafe Smallz and Clavish)",
    "album": "Crop Circle 2",
    "year": "2023",
    "artist": "Nines/Clavish/Nafe Smallz",
    "musicPath": "./assets/music/132.mp3"
  },
  {
    "backgroundImage": "./assets/images/133.png",
    "posterUrl": "./assets/images/133.png",
    "title": "Dil Nu",
    "album": "Two Hearts Never Break The Same",
    "year": "2022",
    "artist": "AP Dhillon/Shinda Kahlon",
    "musicPath": "./assets/music/133.mp3"
  },
  {
    "backgroundImage": "./assets/images/134.png",
    "posterUrl": "./assets/images/134.png",
    "title": "Dil Tu Jaan Tu",
    "album": "Dil Tu Jaan Tu",
    "year": "2024",
    "artist": "Gurnazar/Chet Singh",
    "musicPath": "./assets/music/134.mp3"
  },
  {
    "backgroundImage": "./assets/images/135.png",
    "posterUrl": "./assets/images/135.png",
    "title": "Dilan Nu",
    "album": "Dilan Nu",
    "year": "2022",
    "artist": "Amrinder Gill",
    "musicPath": "./assets/music/135.mp3"
  },
  {
    "backgroundImage": "./assets/images/136.png",
    "posterUrl": "./assets/images/136.png",
    "title": "Dill Tutda - Studio",
    "album": "Jassi Gill - My Favourites (Studio)",
    "year": "2018",
    "artist": "Jassie Gill",
    "musicPath": "./assets/music/136.mp3"
  },
  {
    "backgroundImage": "./assets/images/137.png",
    "posterUrl": "./assets/images/137.png",
    "title": "Disaster",
    "album": "Disaster",
    "year": "2021",
    "artist": "KSLV Noh",
    "musicPath": "./assets/music/137.mp3"
  },
  {
    "backgroundImage": "./assets/images/138.png",
    "posterUrl": "./assets/images/138.png",
    "title": "Dive",
    "album": "\u00f7 (Deluxe)",
    "year": "2017",
    "artist": "Ed Sheeran",
    "musicPath": "./assets/music/138.mp3"
  },
  {
    "backgroundImage": "./assets/images/139.png",
    "posterUrl": "./assets/images/139.png",
    "title": "DNA.",
    "album": "DAMN.",
    "year": "2017",
    "artist": "Kendrick Lamar",
    "musicPath": "./assets/music/139.mp3"
  },
  {
    "backgroundImage": "./assets/images/140.png",
    "posterUrl": "./assets/images/140.png",
    "title": "Do I Wanna Know?",
    "album": "AM",
    "year": "2013",
    "artist": "Arctic Monkeys",
    "musicPath": "./assets/music/140.mp3"
  },
  {
    "backgroundImage": "./assets/images/141.png",
    "posterUrl": "./assets/images/141.png",
    "title": "Don't Be Cruel",
    "album": "I Can Help",
    "year": "1974",
    "artist": "Billy Swan",
    "musicPath": "./assets/music/141.mp3"
  },
  {
    "backgroundImage": "./assets/images/142.png",
    "posterUrl": "./assets/images/142.png",
    "title": "Don't Tell Me",
    "album": "Don't Tell Me",
    "year": "2019",
    "artist": "Dilpreet Dhillon/Karan Aujla/Gurlez Akhtar",
    "musicPath": "./assets/music/142.mp3"
  },
  {
    "backgroundImage": "./assets/images/143.png",
    "posterUrl": "./assets/images/143.png",
    "title": "Don't Test",
    "album": "Don't Test",
    "year": "2020",
    "artist": "Gurinder Gill/Gminxr",
    "musicPath": "./assets/music/143.mp3"
  },
  {
    "backgroundImage": "./assets/images/144.png",
    "posterUrl": "./assets/images/144.png",
    "title": "Doomsday Pt. 2 (with Eminem)",
    "album": "All Is Yellow",
    "year": "2024",
    "artist": "Lyrical Lemonade/Eminem",
    "musicPath": "./assets/music/144.mp3"
  },
  {
    "backgroundImage": "./assets/images/145.png",
    "posterUrl": "./assets/images/145.png",
    "title": "Downers At Dusk",
    "album": "Open Letter",
    "year": "2023",
    "artist": "Talha Anjum/Umair",
    "musicPath": "./assets/music/145.mp3"
  },
  {
    "backgroundImage": "./assets/images/146.png",
    "posterUrl": "./assets/images/146.png",
    "title": "Downtown (feat. Melle Mel, Grandmaster Caz, Kool Moe Dee & Eric Nally)",
    "album": "This Unruly Mess I've Made",
    "year": "2016",
    "artist": "Macklemore & Ryan Lewis/Macklemore/Ryan Lewis/Grandmaster Melle Mel/Grandmaster Caz/Kool Moe Dee/Eric Nally",
    "musicPath": "./assets/music/146.mp3"
  },
  {
    "backgroundImage": "./assets/images/147.png",
    "posterUrl": "./assets/images/147.png",
    "title": "Dream lantern",
    "album": "Your Name.",
    "year": "2016",
    "artist": "RADWIMPS",
    "musicPath": "./assets/music/147.mp3"
  },
  {
    "backgroundImage": "./assets/images/148.png",
    "posterUrl": "./assets/images/148.png",
    "title": "Dream On",
    "album": "Aerosmith",
    "year": "1973",
    "artist": "Aerosmith",
    "musicPath": "./assets/music/148.mp3"
  },
  {
    "backgroundImage": "./assets/images/149.png",
    "posterUrl": "./assets/images/149.png",
    "title": "Drip Too Hard (Lil Baby & Gunna)",
    "album": "Drip Harder",
    "year": "2018",
    "artist": "Lil Baby/Gunna",
    "musicPath": "./assets/music/149.mp3"
  },
  {
    "backgroundImage": "./assets/images/150.png",
    "posterUrl": "./assets/images/150.png",
    "title": "drivers license",
    "album": "drivers license",
    "year": "2021",
    "artist": "Olivia Rodrigo",
    "musicPath": "./assets/music/150.mp3"
  },
  {
    "backgroundImage": "./assets/images/151.png",
    "posterUrl": "./assets/images/151.png",
    "title": "Drown (Audiotree Live Version)",
    "album": "Prateek Kuhad on Audiotree Live",
    "year": "2018",
    "artist": "Prateek Kuhad",
    "musicPath": "./assets/music/151.mp3"
  },
  {
    "backgroundImage": "./assets/images/152.png",
    "posterUrl": "./assets/images/152.png",
    "title": "Drugs & The Internet",
    "album": "~how i'm feeling~",
    "year": "2020",
    "artist": "Lauv",
    "musicPath": "./assets/music/152.mp3"
  },
  {
    "backgroundImage": "./assets/images/153.png",
    "posterUrl": "./assets/images/153.png",
    "title": "Drugs (feat. Two Feet)",
    "album": "Drugs (feat. Two Feet)",
    "year": "2020",
    "artist": "UPSAHL/Two Feet",
    "musicPath": "./assets/music/153.mp3"
  },
  {
    "backgroundImage": "./assets/images/154.png",
    "posterUrl": "./assets/images/154.png",
    "title": "Dumb",
    "album": "In Utero",
    "year": "1993",
    "artist": "Nirvana",
    "musicPath": "./assets/music/154.mp3"
  },
  {
    "backgroundImage": "./assets/images/155.png",
    "posterUrl": "./assets/images/155.png",
    "title": "Dus Ja Melne",
    "album": "Play It Loud",
    "year": "2009",
    "artist": "Lehmber Hussainpuri",
    "musicPath": "./assets/music/155.mp3"
  },
  {
    "backgroundImage": "./assets/images/156.png",
    "posterUrl": "./assets/images/156.png",
    "title": "Dusk Till Dawn (feat. Sia) - Radio Edit",
    "album": "Icarus Falls",
    "year": "2018",
    "artist": "ZAYN/Sia",
    "musicPath": "./assets/music/156.mp3"
  },
  {
    "backgroundImage": "./assets/images/157.png",
    "posterUrl": "./assets/images/157.png",
    "title": "Dynamite",
    "album": "BE",
    "year": "2020",
    "artist": "BTS",
    "musicPath": "./assets/music/157.mp3"
  },
  {
    "backgroundImage": "./assets/images/158.png",
    "posterUrl": "./assets/images/158.png",
    "title": "Easier \u2013 Remix (with Charlie Puth)",
    "album": "Easier \u2013 Remix (with Charlie Puth)",
    "year": "2019",
    "artist": "5 Seconds of Summer/Charlie Puth",
    "musicPath": "./assets/music/158.mp3"
  },
  {
    "backgroundImage": "./assets/images/159.png",
    "posterUrl": "./assets/images/159.png",
    "title": "Eclipse",
    "album": "Eclipse",
    "year": "2020",
    "artist": "Saket Sarin",
    "musicPath": "./assets/music/159.mp3"
  },
  {
    "backgroundImage": "./assets/images/160.png",
    "posterUrl": "./assets/images/160.png",
    "title": "Eenie Meenie",
    "album": "Eenie Meenie",
    "year": "2010",
    "artist": "Sean Kingston/Justin Bieber",
    "musicPath": "./assets/music/160.mp3"
  },
  {
    "backgroundImage": "./assets/images/161.png",
    "posterUrl": "./assets/images/161.png",
    "title": "Ehsan Tera Hoga Mujh Par",
    "album": "Super Hit Jodi - Shammi Kapoor And Mohammed Rafi",
    "year": "2023",
    "artist": "Mohammed Rafi",
    "musicPath": "./assets/music/161.mp3"
  },
  {
    "backgroundImage": "./assets/images/162.png",
    "posterUrl": "./assets/images/162.png",
    "title": "Ek Raat",
    "album": "Ek Raat",
    "year": "2018",
    "artist": "Vilen",
    "musicPath": "./assets/music/162.mp3"
  },
  {
    "backgroundImage": "./assets/images/163.png",
    "posterUrl": "./assets/images/163.png",
    "title": "Ektarfa",
    "album": "Ektarfa",
    "year": "2022",
    "artist": "King",
    "musicPath": "./assets/music/163.mp3"
  },
  {
    "backgroundImage": "./assets/images/164.png",
    "posterUrl": "./assets/images/164.png",
    "title": "End of Beginning",
    "album": "DECIDE",
    "year": "2022",
    "artist": "Djo",
    "musicPath": "./assets/music/164.mp3"
  },
  {
    "backgroundImage": "./assets/images/165.png",
    "posterUrl": "./assets/images/165.png",
    "title": "Enemy (with JID) - from the series Arcane League of Legends",
    "album": "Enemy (with JID) [from the series Arcane League of Legends]",
    "year": "2021",
    "artist": "Imagine Dragons/JID/Arcane/League of Legends",
    "musicPath": "./assets/music/165.mp3"
  },
  {
    "backgroundImage": "./assets/images/166.png",
    "posterUrl": "./assets/images/166.png",
    "title": "Eternally",
    "album": "The Dream Chapter: ETERNITY",
    "year": "2020",
    "artist": "TOMORROW X TOGETHER",
    "musicPath": "./assets/music/166.mp3"
  },
  {
    "backgroundImage": "./assets/images/167.png",
    "posterUrl": "./assets/images/167.png",
    "title": "Evergreen",
    "album": "RMCM",
    "year": "2017",
    "artist": "Richy Mitch & The Coal Miners",
    "musicPath": "./assets/music/167.mp3"
  },
  {
    "backgroundImage": "./assets/images/168.png",
    "posterUrl": "./assets/images/168.png",
    "title": "Every Breath You Take",
    "album": "Synchronicity (Remastered 2003)",
    "year": "1983",
    "artist": "The Police",
    "musicPath": "./assets/music/168.mp3"
  },
  {
    "backgroundImage": "./assets/images/169.png",
    "posterUrl": "./assets/images/169.png",
    "title": "Everybody Loves Somebody",
    "album": "Everybody Loves Somebody",
    "year": "1964",
    "artist": "Dean Martin",
    "musicPath": "./assets/music/169.mp3"
  },
  {
    "backgroundImage": "./assets/images/170.png",
    "posterUrl": "./assets/images/170.png",
    "title": "Everybody Wants To Rule The World",
    "album": "Songs From The Big Chair (Super Deluxe Edition)",
    "year": "1985",
    "artist": "Tears For Fears",
    "musicPath": "./assets/music/170.mp3"
  },
  {
    "backgroundImage": "./assets/images/171.png",
    "posterUrl": "./assets/images/171.png",
    "title": "Everything at Once",
    "album": "Two (Expanded Edition)",
    "year": "2011",
    "artist": "Lenka",
    "musicPath": "./assets/music/171.mp3"
  },
  {
    "backgroundImage": "./assets/images/172.png",
    "posterUrl": "./assets/images/172.png",
    "title": "Everything in You (feat. Half Shy)",
    "album": "Adventure Time: Fionna and Cake - Season 1 (Soundtrack from the Animated Series)",
    "year": "2023",
    "artist": "Adventure Time/Half Shy",
    "musicPath": "./assets/music/172.mp3"
  },
  {
    "backgroundImage": "./assets/images/173.png",
    "posterUrl": "./assets/images/173.png",
    "title": "Excuses",
    "album": "Excuses",
    "year": "2020",
    "artist": "AP Dhillon/Gurinder Gill/Intense",
    "musicPath": "./assets/music/173.mp3"
  },
  {
    "backgroundImage": "./assets/images/174.png",
    "posterUrl": "./assets/images/174.png",
    "title": "Faasle",
    "album": "Coke Studio Season 10: Episode 2",
    "year": "2017",
    "artist": "Kaavish/Quratulain Balouch",
    "musicPath": "./assets/music/174.mp3"
  },
  {
    "backgroundImage": "./assets/images/175.png",
    "posterUrl": "./assets/images/175.png",
    "title": "Fade Into You",
    "album": "So Tonight That I Might See",
    "year": "1993",
    "artist": "Mazzy Star",
    "musicPath": "./assets/music/175.mp3"
  },
  {
    "backgroundImage": "./assets/images/176.png",
    "posterUrl": "./assets/images/176.png",
    "title": "Fair Trade (with Travis Scott)",
    "album": "Certified Lover Boy",
    "year": "2021",
    "artist": "Drake/Travis Scott",
    "musicPath": "./assets/music/176.mp3"
  },
  {
    "backgroundImage": "./assets/images/177.png",
    "posterUrl": "./assets/images/177.png",
    "title": "Faith",
    "album": "After Hours",
    "year": "2020",
    "artist": "The Weeknd",
    "musicPath": "./assets/music/177.mp3"
  },
  {
    "backgroundImage": "./assets/images/178.png",
    "posterUrl": "./assets/images/178.png",
    "title": "Falls (Reprise)",
    "album": "A Moment Apart (Deluxe Edition)",
    "year": "2018",
    "artist": "ODESZA/Sasha Alex Sloan",
    "musicPath": "./assets/music/178.mp3"
  },
  {
    "backgroundImage": "./assets/images/179.png",
    "posterUrl": "./assets/images/179.png",
    "title": "False Alarm",
    "album": "Starboy",
    "year": "2016",
    "artist": "The Weeknd",
    "musicPath": "./assets/music/179.mp3"
  },
  {
    "backgroundImage": "./assets/images/180.png",
    "posterUrl": "./assets/images/180.png",
    "title": "Famous",
    "album": "The Life Of Pablo",
    "year": "2016",
    "artist": "Kanye West",
    "musicPath": "./assets/music/180.mp3"
  },
  {
    "backgroundImage": "./assets/images/181.png",
    "posterUrl": "./assets/images/181.png",
    "title": "Father Stretch My Hands Pt. 1",
    "album": "The Life Of Pablo",
    "year": "2016",
    "artist": "Kanye West",
    "musicPath": "./assets/music/181.mp3"
  },
  {
    "backgroundImage": "./assets/images/182.png",
    "posterUrl": "./assets/images/182.png",
    "title": "Feel It (From \u201cInvincible\u201d)",
    "album": "Feel It (From \u201cInvincible\u201d)",
    "year": "2024",
    "artist": "d4vd",
    "musicPath": "./assets/music/182.mp3"
  },
  {
    "backgroundImage": "./assets/images/183.png",
    "posterUrl": "./assets/images/183.png",
    "title": "Feel It Still",
    "album": "Woodstock",
    "year": "2017",
    "artist": "Portugal. The Man",
    "musicPath": "./assets/music/183.mp3"
  },
  {
    "backgroundImage": "./assets/images/184.png",
    "posterUrl": "./assets/images/184.png",
    "title": "Feeling Good",
    "album": "Feeling Good",
    "year": "2015",
    "artist": "Avicii",
    "musicPath": "./assets/music/184.mp3"
  },
  {
    "backgroundImage": "./assets/images/185.png",
    "posterUrl": "./assets/images/185.png",
    "title": "Flames (with ZAYN)",
    "album": "Flames (The EP)",
    "year": "2020",
    "artist": "R3HAB/ZAYN/Jungleboi",
    "musicPath": "./assets/music/185.mp3"
  },
  {
    "backgroundImage": "./assets/images/186.png",
    "posterUrl": "./assets/images/186.png",
    "title": "Fly Me To The Moon (In Other Words)",
    "album": "The Best Of Bobby Womack - The Soul Years",
    "year": "2008",
    "artist": "Bobby Womack",
    "musicPath": "./assets/music/186.mp3"
  },
  {
    "backgroundImage": "./assets/images/187.png",
    "posterUrl": "./assets/images/187.png",
    "title": "for your time (Audiotree Live Version)",
    "album": "Prateek Kuhad on Audiotree Live",
    "year": "2018",
    "artist": "Prateek Kuhad",
    "musicPath": "./assets/music/187.mp3"
  },
  {
    "backgroundImage": "./assets/images/188.png",
    "posterUrl": "./assets/images/188.png",
    "title": "Forbidden Fruit (feat. Kendrick Lamar)",
    "album": "Born Sinner (Deluxe Version)",
    "year": "2013",
    "artist": "J. Cole/Kendrick Lamar",
    "musicPath": "./assets/music/188.mp3"
  },
  {
    "backgroundImage": "./assets/images/189.png",
    "posterUrl": "./assets/images/189.png",
    "title": "Forever",
    "album": "Forever",
    "year": "2019",
    "artist": "ilyTOMMY",
    "musicPath": "./assets/music/189.mp3"
  },
  {
    "backgroundImage": "./assets/images/190.png",
    "posterUrl": "./assets/images/190.png",
    "title": "Fortunate Son",
    "album": "Willy And The Poor Boys (Expanded Edition)",
    "year": "1969",
    "artist": "Creedence Clearwater Revival",
    "musicPath": "./assets/music/190.mp3"
  },
  {
    "backgroundImage": "./assets/images/191.png",
    "posterUrl": "./assets/images/191.png",
    "title": "Freaks",
    "album": "Freaks",
    "year": "2021",
    "artist": "Surf Curse",
    "musicPath": "./assets/music/191.mp3"
  },
  {
    "backgroundImage": "./assets/images/192.png",
    "posterUrl": "./assets/images/192.png",
    "title": "Friends",
    "album": "MAP OF THE SOUL : 7",
    "year": "2020",
    "artist": "BTS",
    "musicPath": "./assets/music/192.mp3"
  },
  {
    "backgroundImage": "./assets/images/193.png",
    "posterUrl": "./assets/images/193.png",
    "title": "Fukashigi no Carte - Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai",
    "album": "Fukashigi no Carte (Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai)",
    "year": "2018",
    "artist": "Shayne Orok",
    "musicPath": "./assets/music/193.mp3"
  },
  {
    "backgroundImage": "./assets/images/194.png",
    "posterUrl": "./assets/images/194.png",
    "title": "fukumean",
    "album": "a Gift & a Curse",
    "year": "2023",
    "artist": "Gunna",
    "musicPath": "./assets/music/194.mp3"
  },
  {
    "backgroundImage": "./assets/images/195.png",
    "posterUrl": "./assets/images/195.png",
    "title": "Funk Song",
    "album": "Funk Song",
    "year": "2020",
    "artist": "Kidjaywest/Talwiinder/Ikath",
    "musicPath": "./assets/music/195.mp3"
  },
  {
    "backgroundImage": "./assets/images/196.png",
    "posterUrl": "./assets/images/196.png",
    "title": "F**kin' Problems (feat. Drake, 2 Chainz & Kendrick Lamar)",
    "album": "LONG.LIVE.A$AP (Deluxe Version)",
    "year": "2013",
    "artist": "A$AP Rocky/Drake/2 Chainz/Kendrick Lamar",
    "musicPath": "./assets/music/196.mp3"
  },
  {
    "backgroundImage": "./assets/images/197.png",
    "posterUrl": "./assets/images/197.png",
    "title": "Gaata Rahe Mera Dil",
    "album": "Guide",
    "year": "1965",
    "artist": "Lata Mangeshkar/Kishore Kumar/S. D. Burman",
    "musicPath": "./assets/music/197.mp3"
  },
  {
    "backgroundImage": "./assets/images/198.png",
    "posterUrl": "./assets/images/198.png",
    "title": "Get Lucky (Radio Edit) [feat. Pharrell Williams and Nile Rodgers]",
    "album": "Get Lucky (Radio Edit) [feat. Pharrell Williams and Nile Rodgers]",
    "year": "2013",
    "artist": "Daft Punk/Pharrell Williams/Nile Rodgers",
    "musicPath": "./assets/music/198.mp3"
  },
  {
    "backgroundImage": "./assets/images/199.png",
    "posterUrl": "./assets/images/199.png",
    "title": "Ghalib Hona Hai",
    "album": "Sukoon",
    "year": "2022",
    "artist": "Armaan Malik",
    "musicPath": "./assets/music/199.mp3"
  },
  {
    "backgroundImage": "./assets/images/200.png",
    "posterUrl": "./assets/images/200.png",
    "title": "Girl",
    "album": "Jukebox The Ghost",
    "year": "2015",
    "artist": "Jukebox The Ghost",
    "musicPath": "./assets/music/200.mp3"
  },
  {
    "backgroundImage": "./assets/images/201.png",
    "posterUrl": "./assets/images/201.png",
    "title": "Girls @ (feat. Chance the Rapper)",
    "album": "iiiDrops",
    "year": "2017",
    "artist": "Joey Purp/Chance the Rapper",
    "musicPath": "./assets/music/201.mp3"
  },
  {
    "backgroundImage": "./assets/images/202.png",
    "posterUrl": "./assets/images/202.png",
    "title": "Give Me Love",
    "album": "+",
    "year": "2011",
    "artist": "Ed Sheeran",
    "musicPath": "./assets/music/202.mp3"
  },
  {
    "backgroundImage": "./assets/images/203.png",
    "posterUrl": "./assets/images/203.png",
    "title": "Glimpse of Us",
    "album": "Glimpse of Us",
    "year": "2022",
    "artist": "Joji",
    "musicPath": "./assets/music/203.mp3"
  },
  {
    "backgroundImage": "./assets/images/204.png",
    "posterUrl": "./assets/images/204.png",
    "title": "Gnat",
    "album": "Music To Be Murdered By - Side B (Deluxe Edition)",
    "year": "2020",
    "artist": "Eminem",
    "musicPath": "./assets/music/204.mp3"
  },
  {
    "backgroundImage": "./assets/images/205.png",
    "posterUrl": "./assets/images/205.png",
    "title": "Go Fuck Yourself",
    "album": "First Steps",
    "year": "2016",
    "artist": "Two Feet",
    "musicPath": "./assets/music/205.mp3"
  },
  {
    "backgroundImage": "./assets/images/206.png",
    "posterUrl": "./assets/images/206.png",
    "title": "Godspeed",
    "album": "Blonde",
    "year": "2016",
    "artist": "Frank Ocean",
    "musicPath": "./assets/music/206.mp3"
  },
  {
    "backgroundImage": "./assets/images/207.png",
    "posterUrl": "./assets/images/207.png",
    "title": "Going Bad (feat. Drake)",
    "album": "Championships",
    "year": "2018",
    "artist": "Meek Mill/Drake",
    "musicPath": "./assets/music/207.mp3"
  },
  {
    "backgroundImage": "./assets/images/208.png",
    "posterUrl": "./assets/images/208.png",
    "title": "golden hour - Fujii Kaze Remix",
    "album": "golden hour (Fujii Kaze Remix)",
    "year": "2023",
    "artist": "JVKE/Fujii Kaze",
    "musicPath": "./assets/music/208.mp3"
  },
  {
    "backgroundImage": "./assets/images/209.png",
    "posterUrl": "./assets/images/209.png",
    "title": "Gone",
    "album": "R",
    "year": "2021",
    "artist": "ROS\u00c9",
    "musicPath": "./assets/music/209.mp3"
  },
  {
    "backgroundImage": "./assets/images/210.png",
    "posterUrl": "./assets/images/210.png",
    "title": "Good Life",
    "album": "Graduation",
    "year": "2007",
    "artist": "Kanye West/T-Pain",
    "musicPath": "./assets/music/210.mp3"
  },
  {
    "backgroundImage": "./assets/images/211.png",
    "posterUrl": "./assets/images/211.png",
    "title": "goosebumps",
    "album": "Birds In The Trap Sing McKnight",
    "year": "2016",
    "artist": "Travis Scott",
    "musicPath": "./assets/music/211.mp3"
  },
  {
    "backgroundImage": "./assets/images/212.png",
    "posterUrl": "./assets/images/212.png",
    "title": "Gospel (with Eminem)",
    "album": "Gospel (with Eminem)",
    "year": "2022",
    "artist": "Dr. Dre/Eminem",
    "musicPath": "./assets/music/212.mp3"
  },
  {
    "backgroundImage": "./assets/images/213.png",
    "posterUrl": "./assets/images/213.png",
    "title": "Gul",
    "album": "Gul",
    "year": "2021",
    "artist": "Anuv Jain",
    "musicPath": "./assets/music/213.mp3"
  },
  {
    "backgroundImage": "./assets/images/214.png",
    "posterUrl": "./assets/images/214.png",
    "title": "Gulabi",
    "album": "Shuddh Desi Romance",
    "year": "2013",
    "artist": "Sachin-Jigar/Jigar Saraiya/Priya Saraiya/Jaideep Sahni",
    "musicPath": "./assets/music/214.mp3"
  },
  {
    "backgroundImage": "./assets/images/215.png",
    "posterUrl": "./assets/images/215.png",
    "title": "Hai Apna Dil To Aawara - Happy",
    "album": "Solva Saal",
    "year": "1958",
    "artist": "Hemant Kumar/S. D. Burman",
    "musicPath": "./assets/music/215.mp3"
  },
  {
    "backgroundImage": "./assets/images/216.png",
    "posterUrl": "./assets/images/216.png",
    "title": "Hai Dil Ye Mera (From \"Hate Story 2\")",
    "album": "Arijit Singh Broken Strings",
    "year": "2019",
    "artist": "Arijit Singh",
    "musicPath": "./assets/music/216.mp3"
  },
  {
    "backgroundImage": "./assets/images/217.png",
    "posterUrl": "./assets/images/217.png",
    "title": "Hai Mera Dil",
    "album": "Alfaaz",
    "year": "2011",
    "artist": "Alfaaz",
    "musicPath": "./assets/music/217.mp3"
  },
  {
    "backgroundImage": "./assets/images/218.png",
    "posterUrl": "./assets/images/218.png",
    "title": "Hale Dil",
    "album": "Murder 2",
    "year": "2011",
    "artist": "Harshit Saxena",
    "musicPath": "./assets/music/218.mp3"
  },
  {
    "backgroundImage": "./assets/images/219.png",
    "posterUrl": "./assets/images/219.png",
    "title": "Happiest Year",
    "album": "Happiest Year",
    "year": "2019",
    "artist": "Jaymes Young",
    "musicPath": "./assets/music/219.mp3"
  },
  {
    "backgroundImage": "./assets/images/220.png",
    "posterUrl": "./assets/images/220.png",
    "title": "Happy Xmas (War Is Over) - Remastered 2010",
    "album": "Signature Box",
    "year": "2010",
    "artist": "John Lennon/Yoko Ono",
    "musicPath": "./assets/music/220.mp3"
  },
  {
    "backgroundImage": "./assets/images/221.png",
    "posterUrl": "./assets/images/221.png",
    "title": "Hate The Way (feat. blackbear)",
    "album": "Hate The Way (feat. blackbear)",
    "year": "2020",
    "artist": "G-Eazy/blackbear",
    "musicPath": "./assets/music/221.mp3"
  },
  {
    "backgroundImage": "./assets/images/222.png",
    "posterUrl": "./assets/images/222.png",
    "title": "Heart-Shaped Box",
    "album": "In Utero (Deluxe Edition)",
    "year": "1993",
    "artist": "Nirvana",
    "musicPath": "./assets/music/222.mp3"
  },
  {
    "backgroundImage": "./assets/images/223.png",
    "posterUrl": "./assets/images/223.png",
    "title": "Heather",
    "album": "Kid Krow",
    "year": "2020",
    "artist": "Conan Gray",
    "musicPath": "./assets/music/223.mp3"
  },
  {
    "backgroundImage": "./assets/images/224.png",
    "posterUrl": "./assets/images/224.png",
    "title": "help herself (with BENEE)",
    "album": "help herself (with BENEE)",
    "year": "2021",
    "artist": "bbno$/Diamond Pistols/BENEE",
    "musicPath": "./assets/music/224.mp3"
  },
  {
    "backgroundImage": "./assets/images/225.png",
    "posterUrl": "./assets/images/225.png",
    "title": "Her, Pt. 2",
    "album": "Her, Pt. 2",
    "year": "2021",
    "artist": "HeadHunter",
    "musicPath": "./assets/music/225.mp3"
  },
  {
    "backgroundImage": "./assets/images/226.png",
    "posterUrl": "./assets/images/226.png",
    "title": "Here With Me",
    "album": "Here With Me",
    "year": "2019",
    "artist": "Marshmello/CHVRCHES",
    "musicPath": "./assets/music/226.mp3"
  },
  {
    "backgroundImage": "./assets/images/227.png",
    "posterUrl": "./assets/images/227.png",
    "title": "Hey Lover!",
    "album": "Cyclones and Hey Lover",
    "year": "2019",
    "artist": "Wabie",
    "musicPath": "./assets/music/227.mp3"
  },
  {
    "backgroundImage": "./assets/images/228.png",
    "posterUrl": "./assets/images/228.png",
    "title": "High Tops",
    "album": "High Tops",
    "year": "2017",
    "artist": "Del Water Gap",
    "musicPath": "./assets/music/228.mp3"
  },
  {
    "backgroundImage": "./assets/images/229.png",
    "posterUrl": "./assets/images/229.png",
    "title": "HIGHEST IN THE ROOM",
    "album": "HIGHEST IN THE ROOM",
    "year": "2019",
    "artist": "Travis Scott",
    "musicPath": "./assets/music/229.mp3"
  },
  {
    "backgroundImage": "./assets/images/230.png",
    "posterUrl": "./assets/images/230.png",
    "title": "History",
    "album": "Made In The A.M. (Deluxe Edition)",
    "year": "2015",
    "artist": "One Direction",
    "musicPath": "./assets/music/230.mp3"
  },
  {
    "backgroundImage": "./assets/images/231.png",
    "posterUrl": "./assets/images/231.png",
    "title": "Hit the Road Jack",
    "album": "True Genius",
    "year": "2021",
    "artist": "Ray Charles",
    "musicPath": "./assets/music/231.mp3"
  },
  {
    "backgroundImage": "./assets/images/232.png",
    "posterUrl": "./assets/images/232.png",
    "title": "Ho Hey",
    "album": "The Lumineers (Deluxe Edition)",
    "year": "2012",
    "artist": "The Lumineers",
    "musicPath": "./assets/music/232.mp3"
  },
  {
    "backgroundImage": "./assets/images/233.png",
    "posterUrl": "./assets/images/233.png",
    "title": "Homage",
    "album": "Skiptracing",
    "year": "2016",
    "artist": "Mild High Club",
    "musicPath": "./assets/music/233.mp3"
  },
  {
    "backgroundImage": "./assets/images/234.png",
    "posterUrl": "./assets/images/234.png",
    "title": "Home",
    "album": "Home",
    "year": "2019",
    "artist": "Cavetown",
    "musicPath": "./assets/music/234.mp3"
  },
  {
    "backgroundImage": "./assets/images/235.png",
    "posterUrl": "./assets/images/235.png",
    "title": "Homicide (feat. Eminem)",
    "album": "Confessions of a Dangerous Mind",
    "year": "2019",
    "artist": "Logic/Eminem",
    "musicPath": "./assets/music/235.mp3"
  },
  {
    "backgroundImage": "./assets/images/236.png",
    "posterUrl": "./assets/images/236.png",
    "title": "Hona Tha Pyar",
    "album": "Bol (Original Motion Picture Soundtrack)",
    "year": "2011",
    "artist": "Atif Aslam/Hadiqa Kiani",
    "musicPath": "./assets/music/236.mp3"
  },
  {
    "backgroundImage": "./assets/images/237.png",
    "posterUrl": "./assets/images/237.png",
    "title": "Honeypie",
    "album": "For Abby",
    "year": "2020",
    "artist": "JAWNY",
    "musicPath": "./assets/music/237.mp3"
  },
  {
    "backgroundImage": "./assets/images/238.png",
    "posterUrl": "./assets/images/238.png",
    "title": "Hooked",
    "album": "8 Letters",
    "year": "2018",
    "artist": "Why Don't We",
    "musicPath": "./assets/music/238.mp3"
  },
  {
    "backgroundImage": "./assets/images/239.png",
    "posterUrl": "./assets/images/239.png",
    "title": "Hope",
    "album": "?",
    "year": "2018",
    "artist": "XXXTENTACION",
    "musicPath": "./assets/music/239.mp3"
  },
  {
    "backgroundImage": "./assets/images/240.png",
    "posterUrl": "./assets/images/240.png",
    "title": "Hopelessly",
    "album": "Hopelessly",
    "year": "2023",
    "artist": "Prateek Kuhad",
    "musicPath": "./assets/music/240.mp3"
  },
  {
    "backgroundImage": "./assets/images/241.png",
    "posterUrl": "./assets/images/241.png",
    "title": "Hornstullsstrand",
    "album": "Vindar p\u00e5 Mars",
    "year": "2019",
    "artist": "Hov1/Veronica Maggio",
    "musicPath": "./assets/music/241.mp3"
  },
  {
    "backgroundImage": "./assets/images/242.png",
    "posterUrl": "./assets/images/242.png",
    "title": "Hulara",
    "album": "Hulara",
    "year": "2014",
    "artist": "J Star",
    "musicPath": "./assets/music/242.mp3"
  },
  {
    "backgroundImage": "./assets/images/243.png",
    "posterUrl": "./assets/images/243.png",
    "title": "Hum",
    "album": "Hum",
    "year": "2021",
    "artist": "Rap Demon",
    "musicPath": "./assets/music/243.mp3"
  },
  {
    "backgroundImage": "./assets/images/244.png",
    "posterUrl": "./assets/images/244.png",
    "title": "Human",
    "album": "Human (Deluxe)",
    "year": "2017",
    "artist": "Rag'n'Bone Man",
    "musicPath": "./assets/music/244.mp3"
  },
  {
    "backgroundImage": "./assets/images/245.png",
    "posterUrl": "./assets/images/245.png",
    "title": "HUMBLE.",
    "album": "DAMN.",
    "year": "2017",
    "artist": "Kendrick Lamar",
    "musicPath": "./assets/music/245.mp3"
  },
  {
    "backgroundImage": "./assets/images/246.png",
    "posterUrl": "./assets/images/246.png",
    "title": "Hurricane",
    "album": "Donda",
    "year": "2021",
    "artist": "Kanye West",
    "musicPath": "./assets/music/246.mp3"
  },
  {
    "backgroundImage": "./assets/images/247.png",
    "posterUrl": "./assets/images/247.png",
    "title": "Hurt You",
    "album": "My Dear Melancholy,",
    "year": "2018",
    "artist": "The Weeknd/Gesaffelstein",
    "musicPath": "./assets/music/247.mp3"
  },
  {
    "backgroundImage": "./assets/images/248.png",
    "posterUrl": "./assets/images/248.png",
    "title": "Hustlers & Hardcore",
    "album": "Behind the Doors of the 13th Floor",
    "year": "1999",
    "artist": "Domingo/Eminem",
    "musicPath": "./assets/music/248.mp3"
  },
  {
    "backgroundImage": "./assets/images/249.png",
    "posterUrl": "./assets/images/249.png",
    "title": "Hypnotize - 2014 Remaster",
    "album": "Life After Death (2014 Remastered Edition)",
    "year": "1997",
    "artist": "The Notorious B.I.G.",
    "musicPath": "./assets/music/249.mp3"
  },
  {
    "backgroundImage": "./assets/images/250.png",
    "posterUrl": "./assets/images/250.png",
    "title": "I Am In Love",
    "album": "Once Upon A Time In Mumbaai",
    "year": "2010",
    "artist": "Pritam/KK/Dominique/Neelesh Misra",
    "musicPath": "./assets/music/250.mp3"
  },
  {
    "backgroundImage": "./assets/images/251.png",
    "posterUrl": "./assets/images/251.png",
    "title": "I Don\u2019t Wanna Live Forever (Fifty Shades Darker)",
    "album": "reputation Stadium Tour Surprise Song Playlist",
    "year": "2017",
    "artist": "ZAYN/Taylor Swift",
    "musicPath": "./assets/music/251.mp3"
  },
  {
    "backgroundImage": "./assets/images/252.png",
    "posterUrl": "./assets/images/252.png",
    "title": "I Fall Apart",
    "album": "Stoney (Deluxe)",
    "year": "2016",
    "artist": "Post Malone",
    "musicPath": "./assets/music/252.mp3"
  },
  {
    "backgroundImage": "./assets/images/253.png",
    "posterUrl": "./assets/images/253.png",
    "title": "I Got a Glock in My Rari - 679 Sped Up",
    "album": "I Got a Glock in My Rari (679 Sped Up)",
    "year": "2024",
    "artist": "DJ Samentro",
    "musicPath": "./assets/music/253.mp3"
  },
  {
    "backgroundImage": "./assets/images/254.png",
    "posterUrl": "./assets/images/254.png",
    "title": "I Love It (& Lil Pump)",
    "album": "I Love It",
    "year": "2018",
    "artist": "Kanye West/Lil Pump",
    "musicPath": "./assets/music/254.mp3"
  },
  {
    "backgroundImage": "./assets/images/255.png",
    "posterUrl": "./assets/images/255.png",
    "title": "I Love It (feat. Charli XCX)",
    "album": "I Love It (feat. Charli XCX)",
    "year": "2012",
    "artist": "Icona Pop/Charli xcx",
    "musicPath": "./assets/music/255.mp3"
  },
  {
    "backgroundImage": "./assets/images/256.png",
    "posterUrl": "./assets/images/256.png",
    "title": "I Love Rock 'N Roll",
    "album": "I Love Rock 'N' Roll (Expanded Edition)",
    "year": "1981",
    "artist": "Joan Jett & the Blackhearts",
    "musicPath": "./assets/music/256.mp3"
  },
  {
    "backgroundImage": "./assets/images/257.png",
    "posterUrl": "./assets/images/257.png",
    "title": "I Love You So - Acoustic",
    "album": "I Love You So (Acoustic)",
    "year": "2021",
    "artist": "The Walters",
    "musicPath": "./assets/music/257.mp3"
  },
  {
    "backgroundImage": "./assets/images/258.png",
    "posterUrl": "./assets/images/258.png",
    "title": "I Love You So",
    "album": "I Love You So",
    "year": "2014",
    "artist": "The Walters",
    "musicPath": "./assets/music/258.mp3"
  },
  {
    "backgroundImage": "./assets/images/259.png",
    "posterUrl": "./assets/images/259.png",
    "title": "I Need A Dollar",
    "album": "Good Things",
    "year": "2010",
    "artist": "Aloe Blacc",
    "musicPath": "./assets/music/259.mp3"
  },
  {
    "backgroundImage": "./assets/images/260.png",
    "posterUrl": "./assets/images/260.png",
    "title": "I Think I'm OKAY (with YUNGBLUD & Travis Barker)",
    "album": "Hotel Diablo",
    "year": "2019",
    "artist": "mgk/YUNGBLUD/Travis Barker",
    "musicPath": "./assets/music/260.mp3"
  },
  {
    "backgroundImage": "./assets/images/261.png",
    "posterUrl": "./assets/images/261.png",
    "title": "I Wanna Be Yours",
    "album": "AM",
    "year": "2013",
    "artist": "Arctic Monkeys",
    "musicPath": "./assets/music/261.mp3"
  },
  {
    "backgroundImage": "./assets/images/262.png",
    "posterUrl": "./assets/images/262.png",
    "title": "I Was Never There",
    "album": "My Dear Melancholy,",
    "year": "2018",
    "artist": "The Weeknd/Gesaffelstein",
    "musicPath": "./assets/music/262.mp3"
  },
  {
    "backgroundImage": "./assets/images/263.png",
    "posterUrl": "./assets/images/263.png",
    "title": "I Will (feat. KXNG Crooked, Royce Da 5'9\" & Joell Ortiz)",
    "album": "Music To Be Murdered By - Side B (Deluxe Edition)",
    "year": "2020",
    "artist": "Eminem/KXNG Crooked/Royce Da 5'9\"/Joell Ortiz",
    "musicPath": "./assets/music/263.mp3"
  },
  {
    "backgroundImage": "./assets/images/264.png",
    "posterUrl": "./assets/images/264.png",
    "title": "I Wish (Sped Up) - Hello? I Wish I Was a Little Bit Taller I Wish I Wish I Was a Baller",
    "album": "I Wish (Sped Up) - Hello? I Wish I Was a Little Bit Taller I Wish I Wish I Was a Baller",
    "year": "2022",
    "artist": "MADAX",
    "musicPath": "./assets/music/264.mp3"
  },
  {
    "backgroundImage": "./assets/images/265.png",
    "posterUrl": "./assets/images/265.png",
    "title": "I'm Back",
    "album": "The Marshall Mathers LP",
    "year": "2000",
    "artist": "Eminem",
    "musicPath": "./assets/music/265.mp3"
  },
  {
    "backgroundImage": "./assets/images/266.png",
    "posterUrl": "./assets/images/266.png",
    "title": "I'm in Love With an E-Girl",
    "album": "I'm in Love With an E-Girl",
    "year": "2020",
    "artist": "Wilbur Soot",
    "musicPath": "./assets/music/266.mp3"
  },
  {
    "backgroundImage": "./assets/images/267.png",
    "posterUrl": "./assets/images/267.png",
    "title": "I'm Tired - From \"Euphoria\" An Original HBO Series",
    "album": "Yeh I Fuckin' Did It / I'm Tired (From \"Euphoria\" An Original HBO Series)",
    "year": "2022",
    "artist": "Labrinth",
    "musicPath": "./assets/music/267.mp3"
  },
  {
    "backgroundImage": "./assets/images/268.png",
    "posterUrl": "./assets/images/268.png",
    "title": "I've Never Felt So Alone - $ummer$ Remix",
    "album": "I've Never Felt So Alone ($ummer$ Remix)",
    "year": "2022",
    "artist": "$ummer$",
    "musicPath": "./assets/music/268.mp3"
  },
  {
    "backgroundImage": "./assets/images/269.png",
    "posterUrl": "./assets/images/269.png",
    "title": "idfc",
    "album": "deadroses",
    "year": "2015",
    "artist": "blackbear",
    "musicPath": "./assets/music/269.mp3"
  },
  {
    "backgroundImage": "./assets/images/270.png",
    "posterUrl": "./assets/images/270.png",
    "title": "Ijazat",
    "album": "Judah",
    "year": "2014",
    "artist": "Falak Shabbir",
    "musicPath": "./assets/music/270.mp3"
  },
  {
    "backgroundImage": "./assets/images/271.png",
    "posterUrl": "./assets/images/271.png",
    "title": "Ikko - Mikke-Title Track",
    "album": "Ikko - Mikke",
    "year": "2021",
    "artist": "Satinder Sartaaj",
    "musicPath": "./assets/music/271.mp3"
  },
  {
    "backgroundImage": "./assets/images/272.png",
    "posterUrl": "./assets/images/272.png",
    "title": "Ikko - Mikke",
    "album": "Ikko - Mikke",
    "year": "2020",
    "artist": "Satinder Sartaaj",
    "musicPath": "./assets/music/272.mp3"
  },
  {
    "backgroundImage": "./assets/images/273.png",
    "posterUrl": "./assets/images/273.png",
    "title": "In Dino",
    "album": "Life In A Metro (Original Motion Picture Soundtrack)",
    "year": "2007",
    "artist": "Pritam/Soham",
    "musicPath": "./assets/music/273.mp3"
  },
  {
    "backgroundImage": "./assets/images/274.png",
    "posterUrl": "./assets/images/274.png",
    "title": "In This Shirt",
    "album": "Mirror Mirror",
    "year": "2010",
    "artist": "The Irrepressibles",
    "musicPath": "./assets/music/274.mp3"
  },
  {
    "backgroundImage": "./assets/images/275.png",
    "posterUrl": "./assets/images/275.png",
    "title": "Interlude: I'm Not Angry Anymore",
    "album": "Paramore",
    "year": "2013",
    "artist": "Paramore",
    "musicPath": "./assets/music/275.mp3"
  },
  {
    "backgroundImage": "./assets/images/276.png",
    "posterUrl": "./assets/images/276.png",
    "title": "Into the Night",
    "album": "In Tokens & Charms",
    "year": "2015",
    "artist": "Prateek Kuhad",
    "musicPath": "./assets/music/276.mp3"
  },
  {
    "backgroundImage": "./assets/images/277.png",
    "posterUrl": "./assets/images/277.png",
    "title": "Intolewd",
    "album": "Krystal",
    "year": "2020",
    "artist": "Matt Maltese",
    "musicPath": "./assets/music/277.mp3"
  },
  {
    "backgroundImage": "./assets/images/278.png",
    "posterUrl": "./assets/images/278.png",
    "title": "Iraaday",
    "album": "Iraaday",
    "year": "2022",
    "artist": "Rovalio/Abdul Hannan",
    "musicPath": "./assets/music/278.mp3"
  },
  {
    "backgroundImage": "./assets/images/279.png",
    "posterUrl": "./assets/images/279.png",
    "title": "Iris",
    "album": "Dizzy up the Girl",
    "year": "1998",
    "artist": "The Goo Goo Dolls",
    "musicPath": "./assets/music/279.mp3"
  },
  {
    "backgroundImage": "./assets/images/280.png",
    "posterUrl": "./assets/images/280.png",
    "title": "Is This Love ('09) (feat. 50 Cent)",
    "album": "Curtain Call 2",
    "year": "2022",
    "artist": "Eminem/50 Cent",
    "musicPath": "./assets/music/280.mp3"
  },
  {
    "backgroundImage": "./assets/images/281.png",
    "posterUrl": "./assets/images/281.png",
    "title": "Ishq Bulaava",
    "album": "Hasee Toh Phasee (Original Motion Picture Soundtrack)",
    "year": "2014",
    "artist": "Vishal-Shekhar/Sanam Puri/Shipra Goyal",
    "musicPath": "./assets/music/281.mp3"
  },
  {
    "backgroundImage": "./assets/images/282.png",
    "posterUrl": "./assets/images/282.png",
    "title": "Ishq Di Baajiyaan",
    "album": "Soorma (Original Motion Picture Soundtrack)",
    "year": "2018",
    "artist": "Shankar-Ehsaan-Loy/Diljit Dosanjh",
    "musicPath": "./assets/music/282.mp3"
  },
  {
    "backgroundImage": "./assets/images/283.png",
    "posterUrl": "./assets/images/283.png",
    "title": "iSpy (feat. Lil Yachty) - No Intro",
    "album": "iSpy (feat. Lil Yachty) [No Intro]",
    "year": "2017",
    "artist": "KYLE/Lil Yachty",
    "musicPath": "./assets/music/283.mp3"
  },
  {
    "backgroundImage": "./assets/images/284.png",
    "posterUrl": "./assets/images/284.png",
    "title": "It Ain't Me (with Selena Gomez)",
    "album": "It Ain't Me (with Selena Gomez)",
    "year": "2017",
    "artist": "Kygo/Selena Gomez",
    "musicPath": "./assets/music/284.mp3"
  },
  {
    "backgroundImage": "./assets/images/285.png",
    "posterUrl": "./assets/images/285.png",
    "title": "It's Been a Long, Long Time",
    "album": "You Want HARRY JAMES & HIS ORCHESTRA Well, Here It Is!",
    "year": "1913",
    "artist": "Harry James/Kitty Kallan",
    "musicPath": "./assets/music/285.mp3"
  },
  {
    "backgroundImage": "./assets/images/286.png",
    "posterUrl": "./assets/images/286.png",
    "title": "Jaane Kyun (From \"Dostana\")",
    "album": "Musical Bond: Vishal Shekhar & Anvita Dutt",
    "year": "2015",
    "artist": "Vishal-Shekhar/Vishal Dadlani",
    "musicPath": "./assets/music/286.mp3"
  },
  {
    "backgroundImage": "./assets/images/287.png",
    "posterUrl": "./assets/images/287.png",
    "title": "Jaani & B Praak Live",
    "album": "Jaani & B Praak Live",
    "year": "2018",
    "artist": "Jaani/B Praak",
    "musicPath": "./assets/music/287.mp3"
  },
  {
    "backgroundImage": "./assets/images/288.png",
    "posterUrl": "./assets/images/288.png",
    "title": "Jaqeen",
    "album": "Jaqeen",
    "year": "2021",
    "artist": "Talwiinder/Rish",
    "musicPath": "./assets/music/288.mp3"
  },
  {
    "backgroundImage": "./assets/images/289.png",
    "posterUrl": "./assets/images/289.png",
    "title": "Je Jatt Remix",
    "album": "Play It Loud",
    "year": "2009",
    "artist": "Lehmber Hussainpuri",
    "musicPath": "./assets/music/289.mp3"
  },
  {
    "backgroundImage": "./assets/images/290.png",
    "posterUrl": "./assets/images/290.png",
    "title": "Jo Bhi Main",
    "album": "Rockstar",
    "year": "2011",
    "artist": "Mohit Chauhan",
    "musicPath": "./assets/music/290.mp3"
  },
  {
    "backgroundImage": "./assets/images/291.png",
    "posterUrl": "./assets/images/291.png",
    "title": "Jo Tu Na Mila",
    "album": "Jo Tu Na Mila",
    "year": "2018",
    "artist": "Asim Azhar/Kunaal Vermaa",
    "musicPath": "./assets/music/291.mp3"
  },
  {
    "backgroundImage": "./assets/images/292.png",
    "posterUrl": "./assets/images/292.png",
    "title": "Jo Tum Mere Ho",
    "album": "Jo Tum Mere Ho",
    "year": "2024",
    "artist": "Anuv Jain",
    "musicPath": "./assets/music/292.mp3"
  },
  {
    "backgroundImage": "./assets/images/293.png",
    "posterUrl": "./assets/images/293.png",
    "title": "Johnny B. Goode",
    "album": "Berry Is On Top",
    "year": "1959",
    "artist": "Chuck Berry",
    "musicPath": "./assets/music/293.mp3"
  },
  {
    "backgroundImage": "./assets/images/294.png",
    "posterUrl": "./assets/images/294.png",
    "title": "Judai",
    "album": "Jannat (Original Motion Picture Soundtrack)",
    "year": "2008",
    "artist": "Pritam/Kamran Ahmed",
    "musicPath": "./assets/music/294.mp3"
  },
  {
    "backgroundImage": "./assets/images/295.png",
    "posterUrl": "./assets/images/295.png",
    "title": "Just for Me",
    "album": "Just for me",
    "year": "2021",
    "artist": "PinkPantheress",
    "musicPath": "./assets/music/295.mp3"
  },
  {
    "backgroundImage": "./assets/images/296.png",
    "posterUrl": "./assets/images/296.png",
    "title": "Just Lose It",
    "album": "Encore (Deluxe Version)",
    "year": "2004",
    "artist": "Eminem",
    "musicPath": "./assets/music/296.mp3"
  },
  {
    "backgroundImage": "./assets/images/297.png",
    "posterUrl": "./assets/images/297.png",
    "title": "K.",
    "album": "Cigarettes After Sex",
    "year": "2017",
    "artist": "Cigarettes After Sex",
    "musicPath": "./assets/music/297.mp3"
  },
  {
    "backgroundImage": "./assets/images/298.png",
    "posterUrl": "./assets/images/298.png",
    "title": "Kaare Hathiyar",
    "album": "Kaare Hathiyar",
    "year": "2022",
    "artist": "Vilen/Maya",
    "musicPath": "./assets/music/298.mp3"
  },
  {
    "backgroundImage": "./assets/images/299.png",
    "posterUrl": "./assets/images/299.png",
    "title": "Kachha Ghada",
    "album": "Kachha Ghada",
    "year": "2022",
    "artist": "Rahgir",
    "musicPath": "./assets/music/299.mp3"
  },
  {
    "backgroundImage": "./assets/images/300.png",
    "posterUrl": "./assets/images/300.png",
    "title": "Kadi Te Has Bol",
    "album": "Velo Sound Station EP 1",
    "year": "2020",
    "artist": "Atif Aslam/Velo Sound Station",
    "musicPath": "./assets/music/300.mp3"
  },
  {
    "backgroundImage": "./assets/images/301.png",
    "posterUrl": "./assets/images/301.png",
    "title": "Kaise Ab Kahein - From \"Gutar Gu\"",
    "album": "Kaise Ab Kahein (From \"Gutar Gu\")",
    "year": "2023",
    "artist": "Gaurav Chatterji/Aasa Singh/Hansika Pareek/Hrishi Giridhar/Pratik Gangavane",
    "musicPath": "./assets/music/301.mp3"
  },
  {
    "backgroundImage": "./assets/images/302.png",
    "posterUrl": "./assets/images/302.png",
    "title": "Kaisey Jiyun",
    "album": "Aalas Ka Pedh",
    "year": "2015",
    "artist": "The Local Train",
    "musicPath": "./assets/music/302.mp3"
  },
  {
    "backgroundImage": "./assets/images/303.png",
    "posterUrl": "./assets/images/303.png",
    "title": "Kamado Tanjirou no Uta (From \"Demon Slayer\") - Piano Version",
    "album": "Kamado Tanjirou no Uta (From \"Demon Slayer\") [Piano Version]",
    "year": "2022",
    "artist": "Kuuvalo",
    "musicPath": "./assets/music/303.mp3"
  },
  {
    "backgroundImage": "./assets/images/304.png",
    "posterUrl": "./assets/images/304.png",
    "title": "Karma Police",
    "album": "OK Computer",
    "year": "1997",
    "artist": "Radiohead",
    "musicPath": "./assets/music/304.mp3"
  },
  {
    "backgroundImage": "./assets/images/305.png",
    "posterUrl": "./assets/images/305.png",
    "title": "Kasoor",
    "album": "Kasoor",
    "year": "2020",
    "artist": "Prateek Kuhad",
    "musicPath": "./assets/music/305.mp3"
  },
  {
    "backgroundImage": "./assets/images/306.png",
    "posterUrl": "./assets/images/306.png",
    "title": "Kawakiwoameku",
    "album": "Kawakiwoameku",
    "year": "2020",
    "artist": "GO!! Light Up!",
    "musicPath": "./assets/music/306.mp3"
  },
  {
    "backgroundImage": "./assets/images/307.png",
    "posterUrl": "./assets/images/307.png",
    "title": "Kayleigh - 2017 Remaster",
    "album": "Misplaced Childhood (2017 Remaster)",
    "year": "1985",
    "artist": "Marillion",
    "musicPath": "./assets/music/307.mp3"
  },
  {
    "backgroundImage": "./assets/images/308.png",
    "posterUrl": "./assets/images/308.png",
    "title": "Key - Skit",
    "album": "Music To Be Murdered By - Side B (Deluxe Edition)",
    "year": "2020",
    "artist": "Eminem",
    "musicPath": "./assets/music/308.mp3"
  },
  {
    "backgroundImage": "./assets/images/309.png",
    "posterUrl": "./assets/images/309.png",
    "title": "Khair Mangda",
    "album": "A Flying Jatt (Original Motion Picture Soundtrack)",
    "year": "2016",
    "artist": "Atif Aslam",
    "musicPath": "./assets/music/309.mp3"
  },
  {
    "backgroundImage": "./assets/images/310.png",
    "posterUrl": "./assets/images/310.png",
    "title": "Khamoshi",
    "album": "Dev",
    "year": "2021",
    "artist": "Ritviz/Karan Kanchan",
    "musicPath": "./assets/music/310.mp3"
  },
  {
    "backgroundImage": "./assets/images/311.png",
    "posterUrl": "./assets/images/311.png",
    "title": "Kho Gaye",
    "album": "Mismatched: Season 2 (Soundtrack from the Netflix Series)",
    "year": "2022",
    "artist": "Taaruk Raina/Mismatched - Cast",
    "musicPath": "./assets/music/311.mp3"
  },
  {
    "backgroundImage": "./assets/images/312.png",
    "posterUrl": "./assets/images/312.png",
    "title": "Khula Aasman",
    "album": "Khula Aasman",
    "year": "2020",
    "artist": "Punit Singh",
    "musicPath": "./assets/music/312.mp3"
  },
  {
    "backgroundImage": "./assets/images/313.png",
    "posterUrl": "./assets/images/313.png",
    "title": "Killer Queen - Remastered 2011",
    "album": "Sheer Heart Attack (Deluxe Edition 2011 Remaster)",
    "year": "1974",
    "artist": "Queen",
    "musicPath": "./assets/music/313.mp3"
  },
  {
    "backgroundImage": "./assets/images/314.png",
    "posterUrl": "./assets/images/314.png",
    "title": "Killin' On Demand",
    "album": "Killin' On Demand",
    "year": "2018",
    "artist": "Freddie Dredd",
    "musicPath": "./assets/music/314.mp3"
  },
  {
    "backgroundImage": "./assets/images/315.png",
    "posterUrl": "./assets/images/315.png",
    "title": "Kinna Chir",
    "album": "Kinna Chir",
    "year": "2021",
    "artist": "Kaushik Rai",
    "musicPath": "./assets/music/315.mp3"
  },
  {
    "backgroundImage": "./assets/images/316.png",
    "posterUrl": "./assets/images/316.png",
    "title": "Kinna Sona",
    "album": "Bhaag Johnny",
    "year": "2015",
    "artist": "Sunil Kamath/Mithoon/Amitabh Varma",
    "musicPath": "./assets/music/316.mp3"
  },
  {
    "backgroundImage": "./assets/images/317.png",
    "posterUrl": "./assets/images/317.png",
    "title": "Kiss and Make Up",
    "album": "Dua Lipa (Complete Edition)",
    "year": "2015",
    "artist": "Dua Lipa/BLACKPINK",
    "musicPath": "./assets/music/317.mp3"
  },
  {
    "backgroundImage": "./assets/images/318.png",
    "posterUrl": "./assets/images/318.png",
    "title": "Kiss Me More (feat. SZA)",
    "album": "Kiss Me More (feat. SZA)",
    "year": "2021",
    "artist": "Doja Cat/SZA",
    "musicPath": "./assets/music/318.mp3"
  },
  {
    "backgroundImage": "./assets/images/319.png",
    "posterUrl": "./assets/images/319.png",
    "title": "Kiss Me",
    "album": "+",
    "year": "2011",
    "artist": "Ed Sheeran",
    "musicPath": "./assets/music/319.mp3"
  },
  {
    "backgroundImage": "./assets/images/320.png",
    "posterUrl": "./assets/images/320.png",
    "title": "Ko Ko Bop",
    "album": "THE WAR - The 4th Album",
    "year": "2017",
    "artist": "EXO",
    "musicPath": "./assets/music/320.mp3"
  },
  {
    "backgroundImage": "./assets/images/321.png",
    "posterUrl": "./assets/images/321.png",
    "title": "Kokoronashi",
    "album": "Contrast",
    "year": "2015",
    "artist": "majiko",
    "musicPath": "./assets/music/321.mp3"
  },
  {
    "backgroundImage": "./assets/images/322.png",
    "posterUrl": "./assets/images/322.png",
    "title": "Kora Kagaz Tha Yeh Man Mera",
    "album": "Aradhana",
    "year": "1969",
    "artist": "Lata Mangeshkar/Kishore Kumar/S. D. Burman",
    "musicPath": "./assets/music/322.mp3"
  },
  {
    "backgroundImage": "./assets/images/323.png",
    "posterUrl": "./assets/images/323.png",
    "title": "Kya Hua Tera Vada",
    "album": "Aur Is Dil Mein Sentimental Hits",
    "year": "2022",
    "artist": "Mohammed Rafi/Sushma Shrestha",
    "musicPath": "./assets/music/323.mp3"
  },
  {
    "backgroundImage": "./assets/images/324.png",
    "posterUrl": "./assets/images/324.png",
    "title": "Kya Hua Tera Wada",
    "album": "Kya Hua Tera Wada",
    "year": "2023",
    "artist": "Sanam",
    "musicPath": "./assets/music/324.mp3"
  },
  {
    "backgroundImage": "./assets/images/325.png",
    "posterUrl": "./assets/images/325.png",
    "title": "Kya Mujhe Pyar Hai (From \"Woh Lamhe\")",
    "album": "Evergreen Hits Of K.K.",
    "year": "2022",
    "artist": "KK",
    "musicPath": "./assets/music/325.mp3"
  },
  {
    "backgroundImage": "./assets/images/326.png",
    "posterUrl": "./assets/images/326.png",
    "title": "Kyun Dhunde",
    "album": "Kyun Dhunde",
    "year": "2022",
    "artist": "Vilen",
    "musicPath": "./assets/music/326.mp3"
  },
  {
    "backgroundImage": "./assets/images/327.png",
    "posterUrl": "./assets/images/327.png",
    "title": "L O V E",
    "album": "Call Me Irresponsible (Deluxe)",
    "year": "2007",
    "artist": "Michael Bubl\u00e9",
    "musicPath": "./assets/music/327.mp3"
  },
  {
    "backgroundImage": "./assets/images/328.png",
    "posterUrl": "./assets/images/328.png",
    "title": "La vie en rose",
    "album": "Recto verso (Edition Collector)",
    "year": "2013",
    "artist": "Zaz",
    "musicPath": "./assets/music/328.mp3"
  },
  {
    "backgroundImage": "./assets/images/329.png",
    "posterUrl": "./assets/images/329.png",
    "title": "Labon Ko",
    "album": "Bhool Bhulaiyaa",
    "year": "2007",
    "artist": "Pritam/KK",
    "musicPath": "./assets/music/329.mp3"
  },
  {
    "backgroundImage": "./assets/images/330.png",
    "posterUrl": "./assets/images/330.png",
    "title": "Ladyfingers",
    "album": "Whipped Cream & Other Delights",
    "year": "1965",
    "artist": "Herb Alpert & The Tijuana Brass",
    "musicPath": "./assets/music/330.mp3"
  },
  {
    "backgroundImage": "./assets/images/331.png",
    "posterUrl": "./assets/images/331.png",
    "title": "Lak 28 Kudi Da",
    "album": "The Lion Of Punjab",
    "year": "2011",
    "artist": "Diljit Dosanjh/Yo Yo Honey Singh",
    "musicPath": "./assets/music/331.mp3"
  },
  {
    "backgroundImage": "./assets/images/332.png",
    "posterUrl": "./assets/images/332.png",
    "title": "Lambiya Judaiyan",
    "album": "Lambiya Judaiyan",
    "year": "2018",
    "artist": "Bilal Saeed",
    "musicPath": "./assets/music/332.mp3"
  },
  {
    "backgroundImage": "./assets/images/333.png",
    "posterUrl": "./assets/images/333.png",
    "title": "Laugh Now Cry Later (feat. Lil Durk)",
    "album": "Laugh Now Cry Later (feat. Lil Durk)",
    "year": "2020",
    "artist": "Drake/Lil Durk",
    "musicPath": "./assets/music/333.mp3"
  },
  {
    "backgroundImage": "./assets/images/334.png",
    "posterUrl": "./assets/images/334.png",
    "title": "Leaving Heaven (feat. Skylar Grey)",
    "album": "Music To Be Murdered By",
    "year": "2020",
    "artist": "Eminem/Skylar Grey",
    "musicPath": "./assets/music/334.mp3"
  },
  {
    "backgroundImage": "./assets/images/335.png",
    "posterUrl": "./assets/images/335.png",
    "title": "Leekan (From \"Ashke\" Soundtrack)",
    "album": "Leekan (From \"Ashke\" Soundtrack)",
    "year": "2018",
    "artist": "Amrinder Gill/Jatinder Shah",
    "musicPath": "./assets/music/335.mp3"
  },
  {
    "backgroundImage": "./assets/images/336.png",
    "posterUrl": "./assets/images/336.png",
    "title": "Legacy",
    "album": "The Marshall Mathers LP2",
    "year": "2013",
    "artist": "Eminem",
    "musicPath": "./assets/music/336.mp3"
  },
  {
    "backgroundImage": "./assets/images/337.png",
    "posterUrl": "./assets/images/337.png",
    "title": "Lemon Tree",
    "album": "Dish of the Day",
    "year": "1995",
    "artist": "Fools Garden",
    "musicPath": "./assets/music/337.mp3"
  },
  {
    "backgroundImage": "./assets/images/338.png",
    "posterUrl": "./assets/images/338.png",
    "title": "Lemonade",
    "album": "Drive Thru",
    "year": "2022",
    "artist": "Diljit Dosanjh",
    "musicPath": "./assets/music/338.mp3"
  },
  {
    "backgroundImage": "./assets/images/339.png",
    "posterUrl": "./assets/images/339.png",
    "title": "Let There Be Light Again",
    "album": "Let There Be Light Again",
    "year": "2021",
    "artist": "\u843d\u65e5\u98db\u8eca Sunset Rollercoaster",
    "musicPath": "./assets/music/339.mp3"
  },
  {
    "backgroundImage": "./assets/images/340.png",
    "posterUrl": "./assets/images/340.png",
    "title": "Libra",
    "album": "Libra (acoustic)",
    "year": "2020",
    "artist": "Pity Party (Girls Club)",
    "musicPath": "./assets/music/340.mp3"
  },
  {
    "backgroundImage": "./assets/images/341.png",
    "posterUrl": "./assets/images/341.png",
    "title": "Life Goes On",
    "album": "BE",
    "year": "2020",
    "artist": "BTS",
    "musicPath": "./assets/music/341.mp3"
  },
  {
    "backgroundImage": "./assets/images/342.png",
    "posterUrl": "./assets/images/342.png",
    "title": "Like That",
    "album": "WE DON'T TRUST YOU",
    "year": "2024",
    "artist": "Future/Metro Boomin/Kendrick Lamar",
    "musicPath": "./assets/music/342.mp3"
  },
  {
    "backgroundImage": "./assets/images/343.png",
    "posterUrl": "./assets/images/343.png",
    "title": "Likhe Jo Khat Tujhe",
    "album": "Rafi Saab - Bouncers",
    "year": "2023",
    "artist": "Mohammed Rafi",
    "musicPath": "./assets/music/343.mp3"
  },
  {
    "backgroundImage": "./assets/images/344.png",
    "posterUrl": "./assets/images/344.png",
    "title": "Line Without a Hook",
    "album": "Montgomery Ricky",
    "year": "2016",
    "artist": "Ricky Montgomery",
    "musicPath": "./assets/music/344.mp3"
  },
  {
    "backgroundImage": "./assets/images/345.png",
    "posterUrl": "./assets/images/345.png",
    "title": "lit(var)",
    "album": "A Shape of Light \"A Silent Voice the Movie\" Original Soundtrack",
    "year": "2016",
    "artist": "Kensuke Ushio",
    "musicPath": "./assets/music/345.mp3"
  },
  {
    "backgroundImage": "./assets/images/346.png",
    "posterUrl": "./assets/images/346.png",
    "title": "Lithium",
    "album": "Nevermind (Remastered)",
    "year": "1991",
    "artist": "Nirvana",
    "musicPath": "./assets/music/346.mp3"
  },
  {
    "backgroundImage": "./assets/images/347.png",
    "posterUrl": "./assets/images/347.png",
    "title": "Little Swing",
    "album": "Little Swing",
    "year": "2016",
    "artist": "AronChupa/Little Sis Nora",
    "musicPath": "./assets/music/347.mp3"
  },
  {
    "backgroundImage": "./assets/images/348.png",
    "posterUrl": "./assets/images/348.png",
    "title": "Little Things",
    "album": "Take Me Home (Expanded Edition)",
    "year": "2012",
    "artist": "One Direction",
    "musicPath": "./assets/music/348.mp3"
  },
  {
    "backgroundImage": "./assets/images/349.png",
    "posterUrl": "./assets/images/349.png",
    "title": "Live or Die",
    "album": "Live or Die",
    "year": "2018",
    "artist": "Noah Cyrus/Lil Xan",
    "musicPath": "./assets/music/349.mp3"
  },
  {
    "backgroundImage": "./assets/images/350.png",
    "posterUrl": "./assets/images/350.png",
    "title": "Loafers",
    "album": "Faded",
    "year": "2021",
    "artist": "BoyWithUke",
    "musicPath": "./assets/music/350.mp3"
  },
  {
    "backgroundImage": "./assets/images/351.png",
    "posterUrl": "./assets/images/351.png",
    "title": "Look At Me!",
    "album": "Look At Me!",
    "year": "2017",
    "artist": "XXXTENTACION",
    "musicPath": "./assets/music/351.mp3"
  },
  {
    "backgroundImage": "./assets/images/352.png",
    "posterUrl": "./assets/images/352.png",
    "title": "Look On Down From The Bridge",
    "album": "Among My Swan",
    "year": "1996",
    "artist": "Mazzy Star",
    "musicPath": "./assets/music/352.mp3"
  },
  {
    "backgroundImage": "./assets/images/353.png",
    "posterUrl": "./assets/images/353.png",
    "title": "Los Angelas(La)",
    "album": "The Next Level",
    "year": "2009",
    "artist": "Diljit Dosanjh",
    "musicPath": "./assets/music/353.mp3"
  },
  {
    "backgroundImage": "./assets/images/354.png",
    "posterUrl": "./assets/images/354.png",
    "title": "Lose Yourself",
    "album": "Curtain Call: The Hits (Deluxe Edition)",
    "year": "2005",
    "artist": "Eminem",
    "musicPath": "./assets/music/354.mp3"
  },
  {
    "backgroundImage": "./assets/images/355.png",
    "posterUrl": "./assets/images/355.png",
    "title": "Loser",
    "album": "It Was Fun While It Lasted",
    "year": "2022",
    "artist": "Sueco",
    "musicPath": "./assets/music/355.mp3"
  },
  {
    "backgroundImage": "./assets/images/356.png",
    "posterUrl": "./assets/images/356.png",
    "title": "Lost In Japan",
    "album": "Shawn Mendes",
    "year": "2018",
    "artist": "Shawn Mendes",
    "musicPath": "./assets/music/356.mp3"
  },
  {
    "backgroundImage": "./assets/images/357.png",
    "posterUrl": "./assets/images/357.png",
    "title": "Lost in the Fire (feat. The Weeknd)",
    "album": "Hyperion",
    "year": "2019",
    "artist": "Gesaffelstein/The Weeknd",
    "musicPath": "./assets/music/357.mp3"
  },
  {
    "backgroundImage": "./assets/images/358.png",
    "posterUrl": "./assets/images/358.png",
    "title": "Love Story Remix (I Love You) [TikTok Dance]",
    "album": "Love Story Remix (I Love You) [TikTok Dance]",
    "year": "2020",
    "artist": "DJ Gotta",
    "musicPath": "./assets/music/358.mp3"
  },
  {
    "backgroundImage": "./assets/images/359.png",
    "posterUrl": "./assets/images/359.png",
    "title": "LOVE. FEAT. ZACARI.",
    "album": "DAMN.",
    "year": "2017",
    "artist": "Kendrick Lamar/Zacari",
    "musicPath": "./assets/music/359.mp3"
  },
  {
    "backgroundImage": "./assets/images/360.png",
    "posterUrl": "./assets/images/360.png",
    "title": "LoveSick",
    "album": "Faded",
    "year": "2021",
    "artist": "BoyWithUke",
    "musicPath": "./assets/music/360.mp3"
  },
  {
    "backgroundImage": "./assets/images/361.png",
    "posterUrl": "./assets/images/361.png",
    "title": "Low Life (feat. The Weeknd)",
    "album": "EVOL",
    "year": "2016",
    "artist": "Future/The Weeknd",
    "musicPath": "./assets/music/361.mp3"
  },
  {
    "backgroundImage": "./assets/images/362.png",
    "posterUrl": "./assets/images/362.png",
    "title": "Lucky Girl",
    "album": "Morningside",
    "year": "2017",
    "artist": "Fazerdaze",
    "musicPath": "./assets/music/362.mp3"
  },
  {
    "backgroundImage": "./assets/images/363.png",
    "posterUrl": "./assets/images/363.png",
    "title": "Lucky You (feat. Joyner Lucas)",
    "album": "Kamikaze",
    "year": "2018",
    "artist": "Eminem/Joyner Lucas",
    "musicPath": "./assets/music/363.mp3"
  },
  {
    "backgroundImage": "./assets/images/364.png",
    "posterUrl": "./assets/images/364.png",
    "title": "Ma Belle",
    "album": "Ma Belle",
    "year": "2021",
    "artist": "AP Dhillon/Amari",
    "musicPath": "./assets/music/364.mp3"
  },
  {
    "backgroundImage": "./assets/images/365.png",
    "posterUrl": "./assets/images/365.png",
    "title": "Maahi",
    "album": "RAAZ - The Mystery Continues (Original Motion Picture Soundtrack)",
    "year": "2008",
    "artist": "Shaarib Toshi/Toshi Sabri",
    "musicPath": "./assets/music/365.mp3"
  },
  {
    "backgroundImage": "./assets/images/366.png",
    "posterUrl": "./assets/images/366.png",
    "title": "Main Hogaya Sharabbi",
    "album": "Steel Bangle",
    "year": "2005",
    "artist": "Panjabi MC/Ashok Gill",
    "musicPath": "./assets/music/366.mp3"
  },
  {
    "backgroundImage": "./assets/images/367.png",
    "posterUrl": "./assets/images/367.png",
    "title": "Main Kya Karoon",
    "album": "Barfi! (Original Motion Picture Soundtrack)",
    "year": "2012",
    "artist": "Pritam/Nikhil Paul George",
    "musicPath": "./assets/music/367.mp3"
  },
  {
    "backgroundImage": "./assets/images/368.png",
    "posterUrl": "./assets/images/368.png",
    "title": "Main Naiyo Jaana",
    "album": "Tu Mera 22 Mein Tera 22",
    "year": "2012",
    "artist": "Amrinder Gill",
    "musicPath": "./assets/music/368.mp3"
  },
  {
    "backgroundImage": "./assets/images/369.png",
    "posterUrl": "./assets/images/369.png",
    "title": "Main Rahoon Ya Na Rahoon",
    "album": "Main Rahoon Ya Na Rahoon",
    "year": "2015",
    "artist": "Amaal Mallik/Armaan Malik/Rashmi Virag",
    "musicPath": "./assets/music/369.mp3"
  },
  {
    "backgroundImage": "./assets/images/370.png",
    "posterUrl": "./assets/images/370.png",
    "title": "Main Tan Vi Pyar Kardan",
    "album": "Main Tan Vi Pyar Kardan",
    "year": "2016",
    "artist": "Happy Raikoti/Millind Gaba",
    "musicPath": "./assets/music/370.mp3"
  },
  {
    "backgroundImage": "./assets/images/371.png",
    "posterUrl": "./assets/images/371.png",
    "title": "Main Zindagi Ka Saath Nibhata Chala Gaya",
    "album": "Mohammed Rafi Suron Ka Anar",
    "year": "2021",
    "artist": "Mohammed Rafi",
    "musicPath": "./assets/music/371.mp3"
  },
  {
    "backgroundImage": "./assets/images/372.png",
    "posterUrl": "./assets/images/372.png",
    "title": "Majesty (with Labrinth & feat. Eminem)",
    "album": "Queen",
    "year": "2018",
    "artist": "Nicki Minaj/Labrinth/Eminem",
    "musicPath": "./assets/music/372.mp3"
  },
  {
    "backgroundImage": "./assets/images/373.png",
    "posterUrl": "./assets/images/373.png",
    "title": "Make It Right (feat. Lauv)",
    "album": "Make It Right (feat. Lauv)",
    "year": "2019",
    "artist": "BTS/Lauv",
    "musicPath": "./assets/music/373.mp3"
  },
  {
    "backgroundImage": "./assets/images/374.png",
    "posterUrl": "./assets/images/374.png",
    "title": "Make You Feel Better",
    "album": "Stadium Arcadium",
    "year": "2006",
    "artist": "Red Hot Chili Peppers",
    "musicPath": "./assets/music/374.mp3"
  },
  {
    "backgroundImage": "./assets/images/375.png",
    "posterUrl": "./assets/images/375.png",
    "title": "Malang Sajna",
    "album": "Malang Sajna",
    "year": "2022",
    "artist": "Sachet Tandon/Parampara Tandon/Kumaar/Sachet-Parampara",
    "musicPath": "./assets/music/375.mp3"
  },
  {
    "backgroundImage": "./assets/images/376.png",
    "posterUrl": "./assets/images/376.png",
    "title": "Manchala",
    "album": "Hasee Toh Phasee (Original Motion Picture Soundtrack)",
    "year": "2014",
    "artist": "Vishal-Shekhar/Shafqat Amanat Ali/Nupur Pant",
    "musicPath": "./assets/music/376.mp3"
  },
  {
    "backgroundImage": "./assets/images/377.png",
    "posterUrl": "./assets/images/377.png",
    "title": "Marie Douceur, Marie Col\u00e8re",
    "album": "John Wick: Chapter 4 (Original Motion Picture Soundtrack)",
    "year": "2023",
    "artist": "Manon Hollander",
    "musicPath": "./assets/music/377.mp3"
  },
  {
    "backgroundImage": "./assets/images/378.png",
    "posterUrl": "./assets/images/378.png",
    "title": "Mary On A Cross",
    "album": "[MESSAGE FROM THE CLERGY]",
    "year": "2022",
    "artist": "Ghost",
    "musicPath": "./assets/music/378.mp3"
  },
  {
    "backgroundImage": "./assets/images/379.png",
    "posterUrl": "./assets/images/379.png",
    "title": "Mat Aazma Re",
    "album": "Murder 3 (Original Motion Picture Soundtrack)",
    "year": "2013",
    "artist": "Pritam/KK",
    "musicPath": "./assets/music/379.mp3"
  },
  {
    "backgroundImage": "./assets/images/380.png",
    "posterUrl": "./assets/images/380.png",
    "title": "Maula",
    "album": "Maula",
    "year": "2020",
    "artist": "Anuv Jain",
    "musicPath": "./assets/music/380.mp3"
  },
  {
    "backgroundImage": "./assets/images/381.png",
    "posterUrl": "./assets/images/381.png",
    "title": "Mayonaise - 2011 Remaster",
    "album": "Siamese Dream (2011 - Remaster)",
    "year": "1993",
    "artist": "The Smashing Pumpkins",
    "musicPath": "./assets/music/381.mp3"
  },
  {
    "backgroundImage": "./assets/images/382.png",
    "posterUrl": "./assets/images/382.png",
    "title": "me & ur ghost",
    "album": "everything means nothing",
    "year": "2020",
    "artist": "blackbear",
    "musicPath": "./assets/music/382.mp3"
  },
  {
    "backgroundImage": "./assets/images/383.png",
    "posterUrl": "./assets/images/383.png",
    "title": "Me & You",
    "album": "Therapy",
    "year": "2023",
    "artist": "Jokhay/Talha Anjum/Talhah Yunus",
    "musicPath": "./assets/music/383.mp3"
  },
  {
    "backgroundImage": "./assets/images/384.png",
    "posterUrl": "./assets/images/384.png",
    "title": "Me Gustas Tu",
    "album": "Pr\u00f3xima Estaci\u00f3n: Esperanza",
    "year": "2001",
    "artist": "Manu Chao",
    "musicPath": "./assets/music/384.mp3"
  },
  {
    "backgroundImage": "./assets/images/385.png",
    "posterUrl": "./assets/images/385.png",
    "title": "Mera Dil Bhi Kitna Pagal Hai",
    "album": "Saajan (Original Motion Picture Soundtrack)",
    "year": "1993",
    "artist": "Kumar Sanu/Alka Yagnik",
    "musicPath": "./assets/music/385.mp3"
  },
  {
    "backgroundImage": "./assets/images/386.png",
    "posterUrl": "./assets/images/386.png",
    "title": "Mera Yaar",
    "album": "Bhaag Milkha Bhaag (Original Motion Picture Soundtrack)",
    "year": "2013",
    "artist": "Shankar-Ehsaan-Loy/Javed Bashir",
    "musicPath": "./assets/music/386.mp3"
  },
  {
    "backgroundImage": "./assets/images/387.png",
    "posterUrl": "./assets/images/387.png",
    "title": "Mere Bina",
    "album": "KARAM",
    "year": "2023",
    "artist": "KSHMR/The PropheC/Talha Anjum",
    "musicPath": "./assets/music/387.mp3"
  },
  {
    "backgroundImage": "./assets/images/388.png",
    "posterUrl": "./assets/images/388.png",
    "title": "Mere Gaon Aaoge",
    "album": "Mere Gaon Aaoge",
    "year": "2019",
    "artist": "Rahgir",
    "musicPath": "./assets/music/388.mp3"
  },
  {
    "backgroundImage": "./assets/images/389.png",
    "posterUrl": "./assets/images/389.png",
    "title": "Meri Kahani",
    "album": "Meri Kahani",
    "year": "2007",
    "artist": "Atif Aslam",
    "musicPath": "./assets/music/389.mp3"
  },
  {
    "backgroundImage": "./assets/images/390.png",
    "posterUrl": "./assets/images/390.png",
    "title": "Mi amor - Slowed + Reverb",
    "album": "Mi amor (Slowed + Reverb)",
    "year": "2023",
    "artist": "Snehit Bansal/Sharn",
    "musicPath": "./assets/music/390.mp3"
  },
  {
    "backgroundImage": "./assets/images/391.png",
    "posterUrl": "./assets/images/391.png",
    "title": "MIDDLE CHILD",
    "album": "MIDDLE CHILD",
    "year": "2019",
    "artist": "J. Cole",
    "musicPath": "./assets/music/391.mp3"
  },
  {
    "backgroundImage": "./assets/images/392.png",
    "posterUrl": "./assets/images/392.png",
    "title": "Might Not",
    "album": "Music To Smoke To",
    "year": "2019",
    "artist": "Belly/The Weeknd",
    "musicPath": "./assets/music/392.mp3"
  },
  {
    "backgroundImage": "./assets/images/393.png",
    "posterUrl": "./assets/images/393.png",
    "title": "missin something",
    "album": "orange blood",
    "year": "2023",
    "artist": "Zach Templar",
    "musicPath": "./assets/music/393.mp3"
  },
  {
    "backgroundImage": "./assets/images/394.png",
    "posterUrl": "./assets/images/394.png",
    "title": "Mitwa",
    "album": "Kabhi Alvida Naa Kehna (Original Motion Picture Soundtrack)",
    "year": "2006",
    "artist": "Shankar-Ehsaan-Loy/Shankar Mahadevan/Caralisa Monteiro/Shafqat Amanat Ali",
    "musicPath": "./assets/music/394.mp3"
  },
  {
    "backgroundImage": "./assets/images/395.png",
    "posterUrl": "./assets/images/395.png",
    "title": "Mockingbird",
    "album": "Encore (Deluxe Version)",
    "year": "2004",
    "artist": "Eminem",
    "musicPath": "./assets/music/395.mp3"
  },
  {
    "backgroundImage": "./assets/images/396.png",
    "posterUrl": "./assets/images/396.png",
    "title": "Modern Loneliness - Ritviz Remix",
    "album": "~how i'm feeling~ (the extras)",
    "year": "2019",
    "artist": "Lauv/Ritviz",
    "musicPath": "./assets/music/396.mp3"
  },
  {
    "backgroundImage": "./assets/images/397.png",
    "posterUrl": "./assets/images/397.png",
    "title": "Money Trees",
    "album": "good kid, m.A.A.d city",
    "year": "2012",
    "artist": "Kendrick Lamar/Jay Rock",
    "musicPath": "./assets/music/397.mp3"
  },
  {
    "backgroundImage": "./assets/images/398.png",
    "posterUrl": "./assets/images/398.png",
    "title": "Monta Re",
    "album": "Lootera",
    "year": "2013",
    "artist": "Swanand Kirkire/Amitabh Bhattacharya/Amit Trivedi",
    "musicPath": "./assets/music/398.mp3"
  },
  {
    "backgroundImage": "./assets/images/399.png",
    "posterUrl": "./assets/images/399.png",
    "title": "Mount Everest",
    "album": "Imagination & the Misfit Kid",
    "year": "2019",
    "artist": "Labrinth",
    "musicPath": "./assets/music/399.mp3"
  },
  {
    "backgroundImage": "./assets/images/400.png",
    "posterUrl": "./assets/images/400.png",
    "title": "Mr. Brightside",
    "album": "Hot Fuss",
    "year": "2004",
    "artist": "The Killers",
    "musicPath": "./assets/music/400.mp3"
  },
  {
    "backgroundImage": "./assets/images/401.png",
    "posterUrl": "./assets/images/401.png",
    "title": "Mulaqat",
    "album": "Mulaqat",
    "year": "2023",
    "artist": "Prateek Kuhad",
    "musicPath": "./assets/music/401.mp3"
  },
  {
    "backgroundImage": "./assets/images/402.png",
    "posterUrl": "./assets/images/402.png",
    "title": "Munda Iphone Warga",
    "album": "Munda Iphone Warga",
    "year": "2013",
    "artist": "A Kay Feat Bling Singh",
    "musicPath": "./assets/music/402.mp3"
  },
  {
    "backgroundImage": "./assets/images/403.png",
    "posterUrl": "./assets/images/403.png",
    "title": "MurderCaust",
    "album": "Sigil South Side",
    "year": "2019",
    "artist": "Lord Lorenz",
    "musicPath": "./assets/music/403.mp3"
  },
  {
    "backgroundImage": "./assets/images/404.png",
    "posterUrl": "./assets/images/404.png",
    "title": "Muskurahat",
    "album": "Muskurahat",
    "year": "2022",
    "artist": "Mitraz",
    "musicPath": "./assets/music/404.mp3"
  },
  {
    "backgroundImage": "./assets/images/405.png",
    "posterUrl": "./assets/images/405.png",
    "title": "Must Be The Ganja",
    "album": "Relapse: Refill",
    "year": "2009",
    "artist": "Eminem",
    "musicPath": "./assets/music/405.mp3"
  },
  {
    "backgroundImage": "./assets/images/406.png",
    "posterUrl": "./assets/images/406.png",
    "title": "Muzzle",
    "album": "Open Mouth, Open Heart",
    "year": "2021",
    "artist": "Destroy Boys",
    "musicPath": "./assets/music/406.mp3"
  },
  {
    "backgroundImage": "./assets/images/407.png",
    "posterUrl": "./assets/images/407.png",
    "title": "My Band",
    "album": "D-12 World",
    "year": "2004",
    "artist": "D12",
    "musicPath": "./assets/music/407.mp3"
  },
  {
    "backgroundImage": "./assets/images/408.png",
    "posterUrl": "./assets/images/408.png",
    "title": "My Body Is a Cage",
    "album": "Neon Bible",
    "year": "2007",
    "artist": "Arcade Fire",
    "musicPath": "./assets/music/408.mp3"
  },
  {
    "backgroundImage": "./assets/images/409.png",
    "posterUrl": "./assets/images/409.png",
    "title": "My Dil Goes Mmmm",
    "album": "Salaam Namaste",
    "year": "2005",
    "artist": "Vishal-Shekhar/Shaan/Gayatri Iyer/Jaideep Sahni",
    "musicPath": "./assets/music/409.mp3"
  },
  {
    "backgroundImage": "./assets/images/410.png",
    "posterUrl": "./assets/images/410.png",
    "title": "MY EYES",
    "album": "UTOPIA",
    "year": "2023",
    "artist": "Travis Scott",
    "musicPath": "./assets/music/410.mp3"
  },
  {
    "backgroundImage": "./assets/images/411.png",
    "posterUrl": "./assets/images/411.png",
    "title": "my future",
    "album": "Happier Than Ever",
    "year": "2021",
    "artist": "Billie Eilish",
    "musicPath": "./assets/music/411.mp3"
  },
  {
    "backgroundImage": "./assets/images/412.png",
    "posterUrl": "./assets/images/412.png",
    "title": "My Name",
    "album": "Down to Earth",
    "year": "2019",
    "artist": "Deep Jandu/Karan Aujla/Gangis Khan",
    "musicPath": "./assets/music/412.mp3"
  },
  {
    "backgroundImage": "./assets/images/413.png",
    "posterUrl": "./assets/images/413.png",
    "title": "My Sharona",
    "album": "Get The Knack",
    "year": "1979",
    "artist": "The Knack",
    "musicPath": "./assets/music/413.mp3"
  },
  {
    "backgroundImage": "./assets/images/414.png",
    "posterUrl": "./assets/images/414.png",
    "title": "N95",
    "album": "Mr. Morale & The Big Steppers",
    "year": "2022",
    "artist": "Kendrick Lamar",
    "musicPath": "./assets/music/414.mp3"
  },
  {
    "backgroundImage": "./assets/images/415.png",
    "posterUrl": "./assets/images/415.png",
    "title": "Na Na Na Na",
    "album": "Na Na Na Na",
    "year": "2015",
    "artist": "J Star",
    "musicPath": "./assets/music/415.mp3"
  },
  {
    "backgroundImage": "./assets/images/416.png",
    "posterUrl": "./assets/images/416.png",
    "title": "Na Tum Hamen Jano - Hemant Kumar",
    "album": "Baat Ek Raat Ki",
    "year": "1962",
    "artist": "Hemant Kumar/S. D. Burman",
    "musicPath": "./assets/music/416.mp3"
  },
  {
    "backgroundImage": "./assets/images/417.png",
    "posterUrl": "./assets/images/417.png",
    "title": "Naina",
    "album": "Khoobsurat",
    "year": "2014",
    "artist": "Sona Mohapatra/Armaan Malik",
    "musicPath": "./assets/music/417.mp3"
  },
  {
    "backgroundImage": "./assets/images/418.png",
    "posterUrl": "./assets/images/418.png",
    "title": "NAKHRE",
    "album": "NAKHRE",
    "year": "2023",
    "artist": "MC Amrit/ReVo LEKHAK/Eyepatch",
    "musicPath": "./assets/music/418.mp3"
  },
  {
    "backgroundImage": "./assets/images/419.png",
    "posterUrl": "./assets/images/419.png",
    "title": "Nate Growing Up",
    "album": "Euphoria (Original Score from the HBO Series)",
    "year": "2019",
    "artist": "Labrinth",
    "musicPath": "./assets/music/419.mp3"
  },
  {
    "backgroundImage": "./assets/images/420.png",
    "posterUrl": "./assets/images/420.png",
    "title": "Never Felt So Alone",
    "album": "Never Felt So Alone",
    "year": "2023",
    "artist": "Labrinth",
    "musicPath": "./assets/music/420.mp3"
  },
  {
    "backgroundImage": "./assets/images/421.png",
    "posterUrl": "./assets/images/421.png",
    "title": "New Slaves",
    "album": "Yeezus",
    "year": "2013",
    "artist": "Kanye West",
    "musicPath": "./assets/music/421.mp3"
  },
  {
    "backgroundImage": "./assets/images/422.png",
    "posterUrl": "./assets/images/422.png",
    "title": "Niyat-e-Shauq",
    "album": "Niyat-e-Shauq",
    "year": "2022",
    "artist": "Zeeshan Ali",
    "musicPath": "./assets/music/422.mp3"
  },
  {
    "backgroundImage": "./assets/images/423.png",
    "posterUrl": "./assets/images/423.png",
    "title": "No Roots",
    "album": "Mint",
    "year": "2019",
    "artist": "Alice Merton",
    "musicPath": "./assets/music/423.mp3"
  },
  {
    "backgroundImage": "./assets/images/424.png",
    "posterUrl": "./assets/images/424.png",
    "title": "No Surprises",
    "album": "OK Computer",
    "year": "1997",
    "artist": "Radiohead",
    "musicPath": "./assets/music/424.mp3"
  },
  {
    "backgroundImage": "./assets/images/425.png",
    "posterUrl": "./assets/images/425.png",
    "title": "Nobody Knows",
    "album": "Just In Case",
    "year": "2018",
    "artist": "Russ",
    "musicPath": "./assets/music/425.mp3"
  },
  {
    "backgroundImage": "./assets/images/426.png",
    "posterUrl": "./assets/images/426.png",
    "title": "Nonstop",
    "album": "Scorpion",
    "year": "2018",
    "artist": "Drake",
    "musicPath": "./assets/music/426.mp3"
  },
  {
    "backgroundImage": "./assets/images/427.png",
    "posterUrl": "./assets/images/427.png",
    "title": "Not Into You",
    "album": "Not Into You",
    "year": "2021",
    "artist": "Brooksie",
    "musicPath": "./assets/music/427.mp3"
  },
  {
    "backgroundImage": "./assets/images/428.png",
    "posterUrl": "./assets/images/428.png",
    "title": "Notice Me",
    "album": "Notice Me",
    "year": "2020",
    "artist": "Zius Lit",
    "musicPath": "./assets/music/428.mp3"
  },
  {
    "backgroundImage": "./assets/images/429.png",
    "posterUrl": "./assets/images/429.png",
    "title": "Numb",
    "album": "Meteora",
    "year": "2003",
    "artist": "Linkin Park",
    "musicPath": "./assets/music/429.mp3"
  },
  {
    "backgroundImage": "./assets/images/430.png",
    "posterUrl": "./assets/images/430.png",
    "title": "O Children",
    "album": "Abattoir Blues / The Lyre of Orpheus",
    "year": "2004",
    "artist": "Nick Cave & The Bad Seeds",
    "musicPath": "./assets/music/430.mp3"
  },
  {
    "backgroundImage": "./assets/images/431.png",
    "posterUrl": "./assets/images/431.png",
    "title": "ocean eyes",
    "album": "dont smile at me",
    "year": "2017",
    "artist": "Billie Eilish",
    "musicPath": "./assets/music/431.mp3"
  },
  {
    "backgroundImage": "./assets/images/432.png",
    "posterUrl": "./assets/images/432.png",
    "title": "Ocean Tide",
    "album": "When We Feel Young",
    "year": "2021",
    "artist": "When Chai Met Toast",
    "musicPath": "./assets/music/432.mp3"
  },
  {
    "backgroundImage": "./assets/images/433.png",
    "posterUrl": "./assets/images/433.png",
    "title": "Off",
    "album": "Off",
    "year": "2020",
    "artist": "Vilen",
    "musicPath": "./assets/music/433.mp3"
  },
  {
    "backgroundImage": "./assets/images/434.png",
    "posterUrl": "./assets/images/434.png",
    "title": "Often",
    "album": "Beauty Behind The Madness",
    "year": "2015",
    "artist": "The Weeknd",
    "musicPath": "./assets/music/434.mp3"
  },
  {
    "backgroundImage": "./assets/images/435.png",
    "posterUrl": "./assets/images/435.png",
    "title": "Oh Me - Live",
    "album": "MTV Unplugged In New York",
    "year": "1994",
    "artist": "Nirvana",
    "musicPath": "./assets/music/435.mp3"
  },
  {
    "backgroundImage": "./assets/images/436.png",
    "posterUrl": "./assets/images/436.png",
    "title": "OI OI OI Bakugou",
    "album": "OI OI OI Bakugou",
    "year": "2020",
    "artist": "La Memerano",
    "musicPath": "./assets/music/436.mp3"
  },
  {
    "backgroundImage": "./assets/images/437.png",
    "posterUrl": "./assets/images/437.png",
    "title": "One Dance",
    "album": "Views",
    "year": "2016",
    "artist": "Drake/Wizkid/Kyla",
    "musicPath": "./assets/music/437.mp3"
  },
  {
    "backgroundImage": "./assets/images/438.png",
    "posterUrl": "./assets/images/438.png",
    "title": "One Kiss (with Dua Lipa)",
    "album": "One Kiss (with Dua Lipa)",
    "year": "2018",
    "artist": "Calvin Harris/Dua Lipa",
    "musicPath": "./assets/music/438.mp3"
  },
  {
    "backgroundImage": "./assets/images/439.png",
    "posterUrl": "./assets/images/439.png",
    "title": "One Right Now (with The Weeknd)",
    "album": "One Right Now",
    "year": "2021",
    "artist": "Post Malone/The Weeknd",
    "musicPath": "./assets/music/439.mp3"
  },
  {
    "backgroundImage": "./assets/images/440.png",
    "posterUrl": "./assets/images/440.png",
    "title": "One Shot 2 Shot",
    "album": "Encore (Deluxe Version)",
    "year": "2004",
    "artist": "Eminem/D12",
    "musicPath": "./assets/music/440.mp3"
  },
  {
    "backgroundImage": "./assets/images/441.png",
    "posterUrl": "./assets/images/441.png",
    "title": "One Test",
    "album": "#EvilstreertslivE#",
    "year": "2024",
    "artist": "Onehunna",
    "musicPath": "./assets/music/441.mp3"
  },
  {
    "backgroundImage": "./assets/images/442.png",
    "posterUrl": "./assets/images/442.png",
    "title": "One",
    "album": "...And Justice For All",
    "year": "1988",
    "artist": "Metallica",
    "musicPath": "./assets/music/442.mp3"
  },
  {
    "backgroundImage": "./assets/images/443.png",
    "posterUrl": "./assets/images/443.png",
    "title": "Ophelia",
    "album": "Cleopatra",
    "year": "2016",
    "artist": "The Lumineers",
    "musicPath": "./assets/music/443.mp3"
  },
  {
    "backgroundImage": "./assets/images/444.png",
    "posterUrl": "./assets/images/444.png",
    "title": "Oreo",
    "album": "Oreo",
    "year": "2020",
    "artist": "Shotgun Willy/Yung Craka",
    "musicPath": "./assets/music/444.mp3"
  },
  {
    "backgroundImage": "./assets/images/445.png",
    "posterUrl": "./assets/images/445.png",
    "title": "Pahadon Mein",
    "album": "Shaan",
    "year": "2020",
    "artist": "Salman Elahi",
    "musicPath": "./assets/music/445.mp3"
  },
  {
    "backgroundImage": "./assets/images/446.png",
    "posterUrl": "./assets/images/446.png",
    "title": "Paint It, Black",
    "album": "Aftermath",
    "year": "1966",
    "artist": "The Rolling Stones",
    "musicPath": "./assets/music/446.mp3"
  },
  {
    "backgroundImage": "./assets/images/447.png",
    "posterUrl": "./assets/images/447.png",
    "title": "Pal Bhar Ke Liye - From \"Johny Mera Naam\"",
    "album": "Genius Of Kishore Kumar \u2013 Fun Songs",
    "year": "2013",
    "artist": "Kishore Kumar/Usha Khanna",
    "musicPath": "./assets/music/447.mp3"
  },
  {
    "backgroundImage": "./assets/images/448.png",
    "posterUrl": "./assets/images/448.png",
    "title": "Pani Da Rang - Male Vocals",
    "album": "Vicky Donor (Original Motion Picture Soundtrack)",
    "year": "2012",
    "artist": "Ayushmann Khurrana/Rochak Kohli",
    "musicPath": "./assets/music/448.mp3"
  },
  {
    "backgroundImage": "./assets/images/449.png",
    "posterUrl": "./assets/images/449.png",
    "title": "Pashmina",
    "album": "Fitoor (Original Motion Picture Soundtrack)",
    "year": "2018",
    "artist": "Amit Trivedi",
    "musicPath": "./assets/music/449.mp3"
  },
  {
    "backgroundImage": "./assets/images/450.png",
    "posterUrl": "./assets/images/450.png",
    "title": "Passionfruit",
    "album": "More Life",
    "year": "2017",
    "artist": "Drake",
    "musicPath": "./assets/music/450.mp3"
  },
  {
    "backgroundImage": "./assets/images/451.png",
    "posterUrl": "./assets/images/451.png",
    "title": "Patt Lai Geya",
    "album": "Patt Lai Geya",
    "year": "2020",
    "artist": "Jasmine Sandlas",
    "musicPath": "./assets/music/451.mp3"
  },
  {
    "backgroundImage": "./assets/images/452.png",
    "posterUrl": "./assets/images/452.png",
    "title": "Payphone",
    "album": "Overexposed Track By Track",
    "year": "2012",
    "artist": "Maroon 5/Wiz Khalifa",
    "musicPath": "./assets/music/452.mp3"
  },
  {
    "backgroundImage": "./assets/images/453.png",
    "posterUrl": "./assets/images/453.png",
    "title": "Pee Loon (From \"Once Upon A Time In Mumbaai\")",
    "album": "Brilliant Melodist Pritam",
    "year": "2022",
    "artist": "Pritam/Mohit Chauhan",
    "musicPath": "./assets/music/453.mp3"
  },
  {
    "backgroundImage": "./assets/images/454.png",
    "posterUrl": "./assets/images/454.png",
    "title": "Pehli Nazar Mein",
    "album": "Race (Original Motion Picture Soundtrack)",
    "year": "2008",
    "artist": "Atif Aslam/Pritam",
    "musicPath": "./assets/music/454.mp3"
  },
  {
    "backgroundImage": "./assets/images/455.png",
    "posterUrl": "./assets/images/455.png",
    "title": "Pendu (feat. Young Fateh)",
    "album": "Judaa 2",
    "year": "2014",
    "artist": "Dr Zeus/Amrinder Gill/Young Fateh",
    "musicPath": "./assets/music/455.mp3"
  },
  {
    "backgroundImage": "./assets/images/456.png",
    "posterUrl": "./assets/images/456.png",
    "title": "Pennyroyal Tea - Solo Acoustic",
    "album": "With The Lights Out - Box Set",
    "year": "2004",
    "artist": "Nirvana",
    "musicPath": "./assets/music/456.mp3"
  },
  {
    "backgroundImage": "./assets/images/457.png",
    "posterUrl": "./assets/images/457.png",
    "title": "Perfect",
    "album": "Made In The A.M. (Deluxe Edition)",
    "year": "2015",
    "artist": "One Direction",
    "musicPath": "./assets/music/457.mp3"
  },
  {
    "backgroundImage": "./assets/images/458.png",
    "posterUrl": "./assets/images/458.png",
    "title": "Phir Le Aya Dil - Reprise",
    "album": "Barfi! (Original Motion Picture Soundtrack)",
    "year": "2012",
    "artist": "Pritam/Arijit Singh",
    "musicPath": "./assets/music/458.mp3"
  },
  {
    "backgroundImage": "./assets/images/459.png",
    "posterUrl": "./assets/images/459.png",
    "title": "Phir Le Aya Dil",
    "album": "Barfi! (Original Motion Picture Soundtrack)",
    "year": "2012",
    "artist": "Pritam/Rekha Bhardwaj",
    "musicPath": "./assets/music/459.mp3"
  },
  {
    "backgroundImage": "./assets/images/460.png",
    "posterUrl": "./assets/images/460.png",
    "title": "Phir Mohabbat (From \"Murder 2\")",
    "album": "Ultimate Love Songs - Arijit Singh",
    "year": "2020",
    "artist": "Mohammed Irfan/Arijit Singh/Saim Bhat",
    "musicPath": "./assets/music/460.mp3"
  },
  {
    "backgroundImage": "./assets/images/461.png",
    "posterUrl": "./assets/images/461.png",
    "title": "Phir Mohabbat",
    "album": "Murder 2",
    "year": "2011",
    "artist": "Mohammed Irfan/Arijit Singh/Saim Bhat",
    "musicPath": "./assets/music/461.mp3"
  },
  {
    "backgroundImage": "./assets/images/462.png",
    "posterUrl": "./assets/images/462.png",
    "title": "Phir Se Ud Chala",
    "album": "Rockstar",
    "year": "2011",
    "artist": "Mohit Chauhan",
    "musicPath": "./assets/music/462.mp3"
  },
  {
    "backgroundImage": "./assets/images/463.png",
    "posterUrl": "./assets/images/463.png",
    "title": "Photo ID",
    "album": "I'm Allergic To Dogs!",
    "year": "2020",
    "artist": "Remi Wolf",
    "musicPath": "./assets/music/463.mp3"
  },
  {
    "backgroundImage": "./assets/images/464.png",
    "posterUrl": "./assets/images/464.png",
    "title": "Pink Blue",
    "album": "Pink Blue",
    "year": "2022",
    "artist": "Tsumyoki/Bharg",
    "musicPath": "./assets/music/464.mp3"
  },
  {
    "backgroundImage": "./assets/images/465.png",
    "posterUrl": "./assets/images/465.png",
    "title": "Pink Plastic Kiss",
    "album": "Pink Plastic Kiss",
    "year": "2023",
    "artist": "Abhinsane/Arpit Bala/Sihie/Bhappa",
    "musicPath": "./assets/music/465.mp3"
  },
  {
    "backgroundImage": "./assets/images/466.png",
    "posterUrl": "./assets/images/466.png",
    "title": "Play Date",
    "album": "Cry Baby (Deluxe Edition)",
    "year": "2015",
    "artist": "Melanie Martinez",
    "musicPath": "./assets/music/466.mp3"
  },
  {
    "backgroundImage": "./assets/images/467.png",
    "posterUrl": "./assets/images/467.png",
    "title": "Poker Face",
    "album": "The Fame",
    "year": "2008",
    "artist": "Lady Gaga",
    "musicPath": "./assets/music/467.mp3"
  },
  {
    "backgroundImage": "./assets/images/468.png",
    "posterUrl": "./assets/images/468.png",
    "title": "Popular (with Playboi Carti & Madonna) - From The Idol Vol. 1 (Music from the HBO Original Series)",
    "album": "Popular (Music from the HBO Original Series)",
    "year": "2023",
    "artist": "The Weeknd/Playboi Carti/Madonna",
    "musicPath": "./assets/music/468.mp3"
  },
  {
    "backgroundImage": "./assets/images/469.png",
    "posterUrl": "./assets/images/469.png",
    "title": "Potential Victims",
    "album": "Terrorist Threats",
    "year": "2003",
    "artist": "Westside Connection",
    "musicPath": "./assets/music/469.mp3"
  },
  {
    "backgroundImage": "./assets/images/470.png",
    "posterUrl": "./assets/images/470.png",
    "title": "Pour Me A Drink (Feat. Blake Shelton)",
    "album": "Pour Me A Drink",
    "year": "2024",
    "artist": "Post Malone/Blake Shelton",
    "musicPath": "./assets/music/470.mp3"
  },
  {
    "backgroundImage": "./assets/images/471.png",
    "posterUrl": "./assets/images/471.png",
    "title": "Praise The Lord (Da Shine) (feat. Skepta)",
    "album": "TESTING",
    "year": "2018",
    "artist": "A$AP Rocky/Skepta",
    "musicPath": "./assets/music/471.mp3"
  },
  {
    "backgroundImage": "./assets/images/472.png",
    "posterUrl": "./assets/images/472.png",
    "title": "Pretty Savage",
    "album": "THE ALBUM",
    "year": "2020",
    "artist": "BLACKPINK",
    "musicPath": "./assets/music/472.mp3"
  },
  {
    "backgroundImage": "./assets/images/473.png",
    "posterUrl": "./assets/images/473.png",
    "title": "Pta Mainu",
    "album": "Pta Mainu",
    "year": "2022",
    "artist": "Harvi",
    "musicPath": "./assets/music/473.mp3"
  },
  {
    "backgroundImage": "./assets/images/474.png",
    "posterUrl": "./assets/images/474.png",
    "title": "Pure Imagination",
    "album": "Our Remedy",
    "year": "2018",
    "artist": "Unclenathannn/Shiloh Dynasty",
    "musicPath": "./assets/music/474.mp3"
  },
  {
    "backgroundImage": "./assets/images/475.png",
    "posterUrl": "./assets/images/475.png",
    "title": "Quelqu'un m'a dit",
    "album": "Quelqu'un M'a Dit",
    "year": "2002",
    "artist": "Carla Bruni",
    "musicPath": "./assets/music/475.mp3"
  },
  {
    "backgroundImage": "./assets/images/476.png",
    "posterUrl": "./assets/images/476.png",
    "title": "Raanjhan Aaya",
    "album": "Raanjhan Aaya",
    "year": "2023",
    "artist": "Masaba/Akshay & IP",
    "musicPath": "./assets/music/476.mp3"
  },
  {
    "backgroundImage": "./assets/images/477.png",
    "posterUrl": "./assets/images/477.png",
    "title": "Rain Sounds - 30 Minutes",
    "album": "Rain Sounds - 30 Minutes",
    "year": "2022",
    "artist": "Pearl Sky",
    "musicPath": "./assets/music/477.mp3"
  },
  {
    "backgroundImage": "./assets/images/478.png",
    "posterUrl": "./assets/images/478.png",
    "title": "Rangi Saari",
    "album": "Rangi Saari",
    "year": "2020",
    "artist": "Kavita Seth/Kanishk Seth",
    "musicPath": "./assets/music/478.mp3"
  },
  {
    "backgroundImage": "./assets/images/479.png",
    "posterUrl": "./assets/images/479.png",
    "title": "Rather Do",
    "album": "Childhood Dreams",
    "year": "2019",
    "artist": "Yxngxr1",
    "musicPath": "./assets/music/479.mp3"
  },
  {
    "backgroundImage": "./assets/images/480.png",
    "posterUrl": "./assets/images/480.png",
    "title": "Reality",
    "album": "Less Is More",
    "year": "2016",
    "artist": "Lost Frequencies/Janieck",
    "musicPath": "./assets/music/480.mp3"
  },
  {
    "backgroundImage": "./assets/images/481.png",
    "posterUrl": "./assets/images/481.png",
    "title": "Remember Me?",
    "album": "The Marshall Mathers LP",
    "year": "2000",
    "artist": "Eminem/RBX/Sticky Fingaz",
    "musicPath": "./assets/music/481.mp3"
  },
  {
    "backgroundImage": "./assets/images/482.png",
    "posterUrl": "./assets/images/482.png",
    "title": "Revenge",
    "album": "17",
    "year": "2017",
    "artist": "XXXTENTACION",
    "musicPath": "./assets/music/482.mp3"
  },
  {
    "backgroundImage": "./assets/images/483.png",
    "posterUrl": "./assets/images/483.png",
    "title": "Rhyme Or Reason",
    "album": "The Marshall Mathers LP2",
    "year": "2013",
    "artist": "Eminem",
    "musicPath": "./assets/music/483.mp3"
  },
  {
    "backgroundImage": "./assets/images/484.png",
    "posterUrl": "./assets/images/484.png",
    "title": "Ric Flair Drip (with Metro Boomin)",
    "album": "Without Warning",
    "year": "2017",
    "artist": "Offset/Metro Boomin",
    "musicPath": "./assets/music/484.mp3"
  },
  {
    "backgroundImage": "./assets/images/485.png",
    "posterUrl": "./assets/images/485.png",
    "title": "Riha",
    "album": "Riha",
    "year": "2019",
    "artist": "Anuv Jain",
    "musicPath": "./assets/music/485.mp3"
  },
  {
    "backgroundImage": "./assets/images/486.png",
    "posterUrl": "./assets/images/486.png",
    "title": "Robbery",
    "album": "Death Race For Love (Bonus Track Version)",
    "year": "2019",
    "artist": "Juice WRLD",
    "musicPath": "./assets/music/486.mp3"
  },
  {
    "backgroundImage": "./assets/images/487.png",
    "posterUrl": "./assets/images/487.png",
    "title": "Roi",
    "album": "Euphories",
    "year": "2021",
    "artist": "Videoclub/Ad\u00e8le Castillon/Mattyeux",
    "musicPath": "./assets/music/487.mp3"
  },
  {
    "backgroundImage": "./assets/images/488.png",
    "posterUrl": "./assets/images/488.png",
    "title": "Role Model",
    "album": "The Slim Shady LP",
    "year": "1999",
    "artist": "Eminem",
    "musicPath": "./assets/music/488.mp3"
  },
  {
    "backgroundImage": "./assets/images/489.png",
    "posterUrl": "./assets/images/489.png",
    "title": "Rolling in the Deep",
    "album": "21",
    "year": "2011",
    "artist": "Adele",
    "musicPath": "./assets/music/489.mp3"
  },
  {
    "backgroundImage": "./assets/images/490.png",
    "posterUrl": "./assets/images/490.png",
    "title": "Roobaroo",
    "album": "Rang De Basanti (Original Motion Picture Soundtrack)",
    "year": "2005",
    "artist": "A.R. Rahman/Naresh Iyer",
    "musicPath": "./assets/music/490.mp3"
  },
  {
    "backgroundImage": "./assets/images/491.png",
    "posterUrl": "./assets/images/491.png",
    "title": "Roz Roz",
    "album": "Roz Roz",
    "year": "2021",
    "artist": "The Yellow Diary/Shilpa Rao",
    "musicPath": "./assets/music/491.mp3"
  },
  {
    "backgroundImage": "./assets/images/492.png",
    "posterUrl": "./assets/images/492.png",
    "title": "Rubaru",
    "album": "Saadi Love Story (Original Motion Picture Soundtrack)",
    "year": "2012",
    "artist": "Jaidev Kumar/Amrinder Gill/Kumaar",
    "musicPath": "./assets/music/492.mp3"
  },
  {
    "backgroundImage": "./assets/images/493.png",
    "posterUrl": "./assets/images/493.png",
    "title": "Rude",
    "album": "Don't Kill the Magic",
    "year": "2014",
    "artist": "MAGIC!",
    "musicPath": "./assets/music/493.mp3"
  },
  {
    "backgroundImage": "./assets/images/494.png",
    "posterUrl": "./assets/images/494.png",
    "title": "Rumble",
    "album": "Quest For Fire",
    "year": "2023",
    "artist": "Skrillex/Fred again../Flowdan",
    "musicPath": "./assets/music/494.mp3"
  },
  {
    "backgroundImage": "./assets/images/495.png",
    "posterUrl": "./assets/images/495.png",
    "title": "Runaway Baby",
    "album": "Doo-Wops & Hooligans",
    "year": "2010",
    "artist": "Bruno Mars",
    "musicPath": "./assets/music/495.mp3"
  },
  {
    "backgroundImage": "./assets/images/496.png",
    "posterUrl": "./assets/images/496.png",
    "title": "Runaway",
    "album": "All My Demons Greeting Me As A Friend (Deluxe)",
    "year": "2016",
    "artist": "AURORA",
    "musicPath": "./assets/music/496.mp3"
  },
  {
    "backgroundImage": "./assets/images/497.png",
    "posterUrl": "./assets/images/497.png",
    "title": "Saada Pyaar",
    "album": "Not by Chance",
    "year": "2020",
    "artist": "AP Dhillon/Gurinder Gill/Money Musik",
    "musicPath": "./assets/music/497.mp3"
  },
  {
    "backgroundImage": "./assets/images/498.png",
    "posterUrl": "./assets/images/498.png",
    "title": "Saadi Galli Aaja",
    "album": "Nautanki Saala !",
    "year": "2013",
    "artist": "Rochak Kohli/Ayushmann Khurrana/Neeti Mohan",
    "musicPath": "./assets/music/498.mp3"
  },
  {
    "backgroundImage": "./assets/images/499.png",
    "posterUrl": "./assets/images/499.png",
    "title": "Saajna",
    "album": "I, Me Aur Main",
    "year": "2013",
    "artist": "Falak Shabbir/Kumaar",
    "musicPath": "./assets/music/499.mp3"
  },
  {
    "backgroundImage": "./assets/images/500.png",
    "posterUrl": "./assets/images/500.png",
    "title": "Saansein",
    "album": "Karwaan",
    "year": "2018",
    "artist": "Prateek Kuhad",
    "musicPath": "./assets/music/500.mp3"
  },
  {
    "backgroundImage": "./assets/images/501.png",
    "posterUrl": "./assets/images/501.png",
    "title": "Sacrifice",
    "album": "Dawn FM",
    "year": "2022",
    "artist": "The Weeknd",
    "musicPath": "./assets/music/501.mp3"
  },
  {
    "backgroundImage": "./assets/images/502.png",
    "posterUrl": "./assets/images/502.png",
    "title": "Sadka",
    "album": "I Hate Luv Storys (Original Motion Picture Soundtrack)",
    "year": "2010",
    "artist": "Vishal-Shekhar/Suraj Jagan/Mahalakshmi Iyer",
    "musicPath": "./assets/music/502.mp3"
  },
  {
    "backgroundImage": "./assets/images/503.png",
    "posterUrl": "./assets/images/503.png",
    "title": "sail away",
    "album": "sail away",
    "year": "2022",
    "artist": "lovelytheband",
    "musicPath": "./assets/music/503.mp3"
  },
  {
    "backgroundImage": "./assets/images/504.png",
    "posterUrl": "./assets/images/504.png",
    "title": "Sajdaa",
    "album": "My Name Is Khan (Original Motion Picture Soundtrack)",
    "year": "2010",
    "artist": "Shankar-Ehsaan-Loy/Rahat Fateh Ali Khan/Shankar Mahadevan/Richa Sharma",
    "musicPath": "./assets/music/504.mp3"
  },
  {
    "backgroundImage": "./assets/images/505.png",
    "posterUrl": "./assets/images/505.png",
    "title": "Sajde",
    "album": "Kill Dil",
    "year": "2014",
    "artist": "Shankar-Ehsaan-Loy/Arijit Singh/Nihira Joshi Deshpande/Gulzar",
    "musicPath": "./assets/music/505.mp3"
  },
  {
    "backgroundImage": "./assets/images/506.png",
    "posterUrl": "./assets/images/506.png",
    "title": "Save Your Tears (Remix) (with Ariana Grande) - Bonus Track",
    "album": "After Hours (Deluxe)",
    "year": "2020",
    "artist": "The Weeknd/Ariana Grande",
    "musicPath": "./assets/music/506.mp3"
  },
  {
    "backgroundImage": "./assets/images/507.png",
    "posterUrl": "./assets/images/507.png",
    "title": "SAY MY GRACE (feat. Travis Scott)",
    "album": "SET IT OFF",
    "year": "2023",
    "artist": "Offset/Travis Scott",
    "musicPath": "./assets/music/507.mp3"
  },
  {
    "backgroundImage": "./assets/images/508.png",
    "posterUrl": "./assets/images/508.png",
    "title": "Say So - Japanese Version",
    "album": "Say So (Japanese Version)",
    "year": "2020",
    "artist": "Rainych",
    "musicPath": "./assets/music/508.mp3"
  },
  {
    "backgroundImage": "./assets/images/509.png",
    "posterUrl": "./assets/images/509.png",
    "title": "SCATTERBRAIN",
    "album": "KILL!",
    "year": "2020",
    "artist": "KXLLSWXTCH",
    "musicPath": "./assets/music/509.mp3"
  },
  {
    "backgroundImage": "./assets/images/510.png",
    "posterUrl": "./assets/images/510.png",
    "title": "Secrets",
    "album": "Starboy",
    "year": "2016",
    "artist": "The Weeknd",
    "musicPath": "./assets/music/510.mp3"
  },
  {
    "backgroundImage": "./assets/images/511.png",
    "posterUrl": "./assets/images/511.png",
    "title": "See You Again (feat. Charlie Puth)",
    "album": "See You Again (feat. Charlie Puth)",
    "year": "2015",
    "artist": "Wiz Khalifa/Charlie Puth",
    "musicPath": "./assets/music/511.mp3"
  },
  {
    "backgroundImage": "./assets/images/512.png",
    "posterUrl": "./assets/images/512.png",
    "title": "Self Love (Spider-Man: Across the Spider-Verse) (Metro Boomin & Coi Leray)",
    "album": "METRO BOOMIN PRESENTS SPIDER-MAN: ACROSS THE SPIDER-VERSE (SOUNDTRACK FROM AND INSPIRED BY THE MOTION PICTURE)",
    "year": "2023",
    "artist": "Metro Boomin/Coi Leray",
    "musicPath": "./assets/music/512.mp3"
  },
  {
    "backgroundImage": "./assets/images/513.png",
    "posterUrl": "./assets/images/513.png",
    "title": "Self Love - Spider-Man: Across the Spider-Verse - Instrumental",
    "album": "METRO BOOMIN PRESENTS SPIDER-MAN: ACROSS THE SPIDER-VERSE [SOUNDTRACK FROM AND INSPIRED BY THE MOTION PICTURE (METROVERSE INSTRUMENTAL EDITION)]",
    "year": "2023",
    "artist": "Metro Boomin",
    "musicPath": "./assets/music/513.mp3"
  },
  {
    "backgroundImage": "./assets/images/514.png",
    "posterUrl": "./assets/images/514.png",
    "title": "Serotonin",
    "album": "if i could make it go quiet",
    "year": "2021",
    "artist": "girl in red",
    "musicPath": "./assets/music/514.mp3"
  },
  {
    "backgroundImage": "./assets/images/515.png",
    "posterUrl": "./assets/images/515.png",
    "title": "Sh-Boom",
    "album": "The Best Of The Crew Cuts",
    "year": "1996",
    "artist": "The Crew Cuts",
    "musicPath": "./assets/music/515.mp3"
  },
  {
    "backgroundImage": "./assets/images/516.png",
    "posterUrl": "./assets/images/516.png",
    "title": "Shadow (feat. IRO) - From Songland",
    "album": "Shadow (feat. IRO) [From Songland]",
    "year": "2019",
    "artist": "Macklemore/iRO",
    "musicPath": "./assets/music/516.mp3"
  },
  {
    "backgroundImage": "./assets/images/517.png",
    "posterUrl": "./assets/images/517.png",
    "title": "Shake That - Album Version (Edited)- SUPERCLEAN",
    "album": "Curtain Call: The Hits",
    "year": "2005",
    "artist": "Eminem",
    "musicPath": "./assets/music/517.mp3"
  },
  {
    "backgroundImage": "./assets/images/518.png",
    "posterUrl": "./assets/images/518.png",
    "title": "Sham - Sunset Edition By Nikhil Dsouza",
    "album": "Sham (Sunset Edition By Nikhil Dsouza)",
    "year": "2022",
    "artist": "Nikhil D'Souza/Saba Azad",
    "musicPath": "./assets/music/518.mp3"
  },
  {
    "backgroundImage": "./assets/images/519.png",
    "posterUrl": "./assets/images/519.png",
    "title": "Shivers - Acoustic Version",
    "album": "Shivers (Acoustic Version)",
    "year": "2021",
    "artist": "Ed Sheeran",
    "musicPath": "./assets/music/519.mp3"
  },
  {
    "backgroundImage": "./assets/images/520.png",
    "posterUrl": "./assets/images/520.png",
    "title": "Shootout (Sped Up)",
    "album": "Shootout (Sped Up)",
    "year": "2022",
    "artist": "Izzamuzzic/Julien Marchal",
    "musicPath": "./assets/music/520.mp3"
  },
  {
    "backgroundImage": "./assets/images/521.png",
    "posterUrl": "./assets/images/521.png",
    "title": "Shout Baby",
    "album": "Shout Baby",
    "year": "2020",
    "artist": "Ryokuoushoku Shakai",
    "musicPath": "./assets/music/521.mp3"
  },
  {
    "backgroundImage": "./assets/images/522.png",
    "posterUrl": "./assets/images/522.png",
    "title": "SHUTDOWN",
    "album": "SHUTDOWN",
    "year": "2024",
    "artist": "Seedhe Maut",
    "musicPath": "./assets/music/522.mp3"
  },
  {
    "backgroundImage": "./assets/images/523.png",
    "posterUrl": "./assets/images/523.png",
    "title": "Sick and Tired (ft. Machine Gun Kelly and Travis Barker)",
    "album": "I'm Gone",
    "year": "2020",
    "artist": "iann dior/mgk/Travis Barker",
    "musicPath": "./assets/music/523.mp3"
  },
  {
    "backgroundImage": "./assets/images/524.png",
    "posterUrl": "./assets/images/524.png",
    "title": "SICKO MODE",
    "album": "ASTROWORLD",
    "year": "2018",
    "artist": "Travis Scott",
    "musicPath": "./assets/music/524.mp3"
  },
  {
    "backgroundImage": "./assets/images/525.png",
    "posterUrl": "./assets/images/525.png",
    "title": "Sing For The Moment",
    "album": "The Eminem Show",
    "year": "2002",
    "artist": "Eminem",
    "musicPath": "./assets/music/525.mp3"
  },
  {
    "backgroundImage": "./assets/images/526.png",
    "posterUrl": "./assets/images/526.png",
    "title": "Skyfall",
    "album": "Skyfall",
    "year": "2012",
    "artist": "Adele",
    "musicPath": "./assets/music/526.mp3"
  },
  {
    "backgroundImage": "./assets/images/527.png",
    "posterUrl": "./assets/images/527.png",
    "title": "Smells Like Teen Spirit",
    "album": "Nevermind (Remastered)",
    "year": "1991",
    "artist": "Nirvana",
    "musicPath": "./assets/music/527.mp3"
  },
  {
    "backgroundImage": "./assets/images/528.png",
    "posterUrl": "./assets/images/528.png",
    "title": "Sneakin\u2019",
    "album": "Sneakin\u2019",
    "year": "2016",
    "artist": "Drake/21 Savage",
    "musicPath": "./assets/music/528.mp3"
  },
  {
    "backgroundImage": "./assets/images/529.png",
    "posterUrl": "./assets/images/529.png",
    "title": "So Gaya Yeh Jahan",
    "album": "Tezaab",
    "year": "1988",
    "artist": "Nitin Mukesh/Alka Yagnik/Shabbir Kumar",
    "musicPath": "./assets/music/529.mp3"
  },
  {
    "backgroundImage": "./assets/images/530.png",
    "posterUrl": "./assets/images/530.png",
    "title": "Soch",
    "album": "Soch",
    "year": "2013",
    "artist": "Harrdy Sandhu/B Praak/Jaani",
    "musicPath": "./assets/music/530.mp3"
  },
  {
    "backgroundImage": "./assets/images/531.png",
    "posterUrl": "./assets/images/531.png",
    "title": "Softcore",
    "album": "Hard To Imagine The Neighbourhood Ever Changing",
    "year": "2018",
    "artist": "The Neighbourhood",
    "musicPath": "./assets/music/531.mp3"
  },
  {
    "backgroundImage": "./assets/images/532.png",
    "posterUrl": "./assets/images/532.png",
    "title": "Sohan Vich Tu",
    "album": "Ik Kudi Punjab Di",
    "year": "2010",
    "artist": "Amrinder Gill",
    "musicPath": "./assets/music/532.mp3"
  },
  {
    "backgroundImage": "./assets/images/533.png",
    "posterUrl": "./assets/images/533.png",
    "title": "Solfeggio, H. 220",
    "album": "AMEB Piano For Leisure Series 1 Grade 4",
    "year": "2002",
    "artist": "Carl Philipp Emanuel Bach/Rebecca Chambers",
    "musicPath": "./assets/music/533.mp3"
  },
  {
    "backgroundImage": "./assets/images/534.png",
    "posterUrl": "./assets/images/534.png",
    "title": "Somebody That I Used To Know",
    "album": "Making Mirrors",
    "year": "2011",
    "artist": "Gotye/Kimbra",
    "musicPath": "./assets/music/534.mp3"
  },
  {
    "backgroundImage": "./assets/images/535.png",
    "posterUrl": "./assets/images/535.png",
    "title": "Somebody To Love - Gorgon City Remix",
    "album": "Somebody To Love (Gorgon City Remix)",
    "year": "2022",
    "artist": "Ben Kim/Gorgon City",
    "musicPath": "./assets/music/535.mp3"
  },
  {
    "backgroundImage": "./assets/images/536.png",
    "posterUrl": "./assets/images/536.png",
    "title": "Somebody To You",
    "album": "Meet The Vamps",
    "year": "2014",
    "artist": "The Vamps",
    "musicPath": "./assets/music/536.mp3"
  },
  {
    "backgroundImage": "./assets/images/537.png",
    "posterUrl": "./assets/images/537.png",
    "title": "someday i'll get it",
    "album": "someday i'll get it",
    "year": "2023",
    "artist": "Alek Olsen",
    "musicPath": "./assets/music/537.mp3"
  },
  {
    "backgroundImage": "./assets/images/538.png",
    "posterUrl": "./assets/images/538.png",
    "title": "Someone To You - Acoustic",
    "album": "Someone To You",
    "year": "2020",
    "artist": "BANNERS",
    "musicPath": "./assets/music/538.mp3"
  },
  {
    "backgroundImage": "./assets/images/539.png",
    "posterUrl": "./assets/images/539.png",
    "title": "Something In The Way",
    "album": "Nevermind (Remastered)",
    "year": "1991",
    "artist": "Nirvana",
    "musicPath": "./assets/music/539.mp3"
  },
  {
    "backgroundImage": "./assets/images/540.png",
    "posterUrl": "./assets/images/540.png",
    "title": "Somewhere Only We Know",
    "album": "Hopes And Fears",
    "year": "2004",
    "artist": "Keane",
    "musicPath": "./assets/music/540.mp3"
  },
  {
    "backgroundImage": "./assets/images/541.png",
    "posterUrl": "./assets/images/541.png",
    "title": "Specific",
    "album": "Defcon 1",
    "year": "2022",
    "artist": "Tarsem Jassar",
    "musicPath": "./assets/music/541.mp3"
  },
  {
    "backgroundImage": "./assets/images/542.png",
    "posterUrl": "./assets/images/542.png",
    "title": "Stand By Me",
    "album": "Don't Play That Song (Mono)",
    "year": "1962",
    "artist": "Ben E. King",
    "musicPath": "./assets/music/542.mp3"
  },
  {
    "backgroundImage": "./assets/images/543.png",
    "posterUrl": "./assets/images/543.png",
    "title": "Stargirl Interlude",
    "album": "Starboy",
    "year": "2016",
    "artist": "The Weeknd/Lana Del Rey",
    "musicPath": "./assets/music/543.mp3"
  },
  {
    "backgroundImage": "./assets/images/544.png",
    "posterUrl": "./assets/images/544.png",
    "title": "Stayin' Alive",
    "album": "Staying Alive (Original Motion Picture Soundtrack)",
    "year": "1977",
    "artist": "Bee Gees",
    "musicPath": "./assets/music/544.mp3"
  },
  {
    "backgroundImage": "./assets/images/545.png",
    "posterUrl": "./assets/images/545.png",
    "title": "Steal My Girl",
    "album": "FOUR (Deluxe)",
    "year": "2014",
    "artist": "One Direction",
    "musicPath": "./assets/music/545.mp3"
  },
  {
    "backgroundImage": "./assets/images/546.png",
    "posterUrl": "./assets/images/546.png",
    "title": "Stella By Starlight",
    "album": "The Columbia Years (1943-1952): The Complete Recordings: Volume 6",
    "year": "1993",
    "artist": "Frank Sinatra",
    "musicPath": "./assets/music/546.mp3"
  },
  {
    "backgroundImage": "./assets/images/547.png",
    "posterUrl": "./assets/images/547.png",
    "title": "Stereo Hearts (feat. Adam Levine)",
    "album": "The Papercut Chronicles II",
    "year": "2011",
    "artist": "Gym Class Heroes/Adam Levine",
    "musicPath": "./assets/music/547.mp3"
  },
  {
    "backgroundImage": "./assets/images/548.png",
    "posterUrl": "./assets/images/548.png",
    "title": "Stick Together",
    "album": "Forgetting This",
    "year": "2016",
    "artist": "Elijah N",
    "musicPath": "./assets/music/548.mp3"
  },
  {
    "backgroundImage": "./assets/images/549.png",
    "posterUrl": "./assets/images/549.png",
    "title": "Still Broken",
    "album": "Screaming Our Sins",
    "year": "2010",
    "artist": "Plan Three",
    "musicPath": "./assets/music/549.mp3"
  },
  {
    "backgroundImage": "./assets/images/550.png",
    "posterUrl": "./assets/images/550.png",
    "title": "Stitches",
    "album": "Handwritten",
    "year": "2015",
    "artist": "Shawn Mendes",
    "musicPath": "./assets/music/550.mp3"
  },
  {
    "backgroundImage": "./assets/images/551.png",
    "posterUrl": "./assets/images/551.png",
    "title": "Stolen Dance",
    "album": "Sadnecessary",
    "year": "2013",
    "artist": "Milky Chance",
    "musicPath": "./assets/music/551.mp3"
  },
  {
    "backgroundImage": "./assets/images/552.png",
    "posterUrl": "./assets/images/552.png",
    "title": "Story of My Life",
    "album": "Midnight Memories (Deluxe)",
    "year": "2013",
    "artist": "One Direction",
    "musicPath": "./assets/music/552.mp3"
  },
  {
    "backgroundImage": "./assets/images/553.png",
    "posterUrl": "./assets/images/553.png",
    "title": "Stressings To Blessings",
    "album": "Stressings To Blessings",
    "year": "2021",
    "artist": "AZ Giovanni",
    "musicPath": "./assets/music/553.mp3"
  },
  {
    "backgroundImage": "./assets/images/554.png",
    "posterUrl": "./assets/images/554.png",
    "title": "Stunnin' (feat. Harm Franklin)",
    "album": "Stunnin' (feat. Harm Franklin)",
    "year": "2020",
    "artist": "Curtis Waters/Harm Franklin",
    "musicPath": "./assets/music/554.mp3"
  },
  {
    "backgroundImage": "./assets/images/555.png",
    "posterUrl": "./assets/images/555.png",
    "title": "Sugar & Brownies",
    "album": "Sugar & Brownies",
    "year": "2019",
    "artist": "DHARIA",
    "musicPath": "./assets/music/555.mp3"
  },
  {
    "backgroundImage": "./assets/images/556.png",
    "posterUrl": "./assets/images/556.png",
    "title": "Sugar",
    "album": "V (Asia Tour Edition)",
    "year": "2015",
    "artist": "Maroon 5",
    "musicPath": "./assets/music/556.mp3"
  },
  {
    "backgroundImage": "./assets/images/557.png",
    "posterUrl": "./assets/images/557.png",
    "title": "Suno Aisha",
    "album": "Aisha (Original Motion Picture Soundtrack)",
    "year": "2010",
    "artist": "Amit Trivedi/Nakash Aziz/Ash King",
    "musicPath": "./assets/music/557.mp3"
  },
  {
    "backgroundImage": "./assets/images/558.png",
    "posterUrl": "./assets/images/558.png",
    "title": "Superman",
    "album": "The Eminem Show",
    "year": "2002",
    "artist": "Eminem/Dina Rae",
    "musicPath": "./assets/music/558.mp3"
  },
  {
    "backgroundImage": "./assets/images/559.png",
    "posterUrl": "./assets/images/559.png",
    "title": "Supna",
    "album": "Jihne Mera Dil Luteya (Original Motion Picture Soundtrack)",
    "year": "2011",
    "artist": "Diljit Dosanjh",
    "musicPath": "./assets/music/559.mp3"
  },
  {
    "backgroundImage": "./assets/images/560.png",
    "posterUrl": "./assets/images/560.png",
    "title": "Surround Sound (feat. 21 Savage & Baby Tate)",
    "album": "The Forever Story (Extended Version)",
    "year": "2022",
    "artist": "JID/21 Savage/Baby Tate",
    "musicPath": "./assets/music/560.mp3"
  },
  {
    "backgroundImage": "./assets/images/561.png",
    "posterUrl": "./assets/images/561.png",
    "title": "Suzume no Tojimari",
    "album": "Suzume no Tojimari",
    "year": "2022",
    "artist": "Chewie Melodies/Pealeaf",
    "musicPath": "./assets/music/561.mp3"
  },
  {
    "backgroundImage": "./assets/images/562.png",
    "posterUrl": "./assets/images/562.png",
    "title": "Swimming Pools (Drank) - Extended Version",
    "album": "good kid, m.A.A.d city (Deluxe)",
    "year": "2012",
    "artist": "Kendrick Lamar",
    "musicPath": "./assets/music/562.mp3"
  },
  {
    "backgroundImage": "./assets/images/563.png",
    "posterUrl": "./assets/images/563.png",
    "title": "Symphony In H (feat. Eminem)",
    "album": "The Piece Maker 3: Return of the 50 MCs",
    "year": "2013",
    "artist": "Tony Touch/Eminem",
    "musicPath": "./assets/music/563.mp3"
  },
  {
    "backgroundImage": "./assets/images/564.png",
    "posterUrl": "./assets/images/564.png",
    "title": "Taaj - Acoustic",
    "album": "Marigold Soundsystem (Deluxe)",
    "year": "2023",
    "artist": "Lost Stories/JAI DHIR",
    "musicPath": "./assets/music/564.mp3"
  },
  {
    "backgroundImage": "./assets/images/565.png",
    "posterUrl": "./assets/images/565.png",
    "title": "Taarif Karoon Kya Uski",
    "album": "Mohammed Rafi Suron Ka Anar",
    "year": "2021",
    "artist": "Mohammed Rafi",
    "musicPath": "./assets/music/565.mp3"
  },
  {
    "backgroundImage": "./assets/images/566.png",
    "posterUrl": "./assets/images/566.png",
    "title": "Take Me Back to London (feat. Stormzy)",
    "album": "No.6 Collaborations Project",
    "year": "2019",
    "artist": "Ed Sheeran/Stormzy",
    "musicPath": "./assets/music/566.mp3"
  },
  {
    "backgroundImage": "./assets/images/567.png",
    "posterUrl": "./assets/images/567.png",
    "title": "Take My Breath - Single Version",
    "album": "Take My Breath",
    "year": "2021",
    "artist": "The Weeknd",
    "musicPath": "./assets/music/567.mp3"
  },
  {
    "backgroundImage": "./assets/images/568.png",
    "posterUrl": "./assets/images/568.png",
    "title": "Take You Dancing",
    "album": "Take You Dancing",
    "year": "2020",
    "artist": "Jason Derulo",
    "musicPath": "./assets/music/568.mp3"
  },
  {
    "backgroundImage": "./assets/images/569.png",
    "posterUrl": "./assets/images/569.png",
    "title": "Tears In The Rain",
    "album": "Kiss Land",
    "year": "2013",
    "artist": "The Weeknd",
    "musicPath": "./assets/music/569.mp3"
  },
  {
    "backgroundImage": "./assets/images/570.png",
    "posterUrl": "./assets/images/570.png",
    "title": "Telephones",
    "album": "Changes",
    "year": "2018",
    "artist": "Vacations",
    "musicPath": "./assets/music/570.mp3"
  },
  {
    "backgroundImage": "./assets/images/571.png",
    "posterUrl": "./assets/images/571.png",
    "title": "Tell Me",
    "album": "Tell Me",
    "year": "2020",
    "artist": "Talwiinder/30KEY!",
    "musicPath": "./assets/music/571.mp3"
  },
  {
    "backgroundImage": "./assets/images/572.png",
    "posterUrl": "./assets/images/572.png",
    "title": "Tera Hi Bas Hona Chaahoon",
    "album": "Haunted",
    "year": "2011",
    "artist": "Jojo Nathaniel/Najam Sheraz",
    "musicPath": "./assets/music/572.mp3"
  },
  {
    "backgroundImage": "./assets/images/573.png",
    "posterUrl": "./assets/images/573.png",
    "title": "Tera Hi Rahun",
    "album": "Tera Hi Rahun",
    "year": "2016",
    "artist": "Gajendra Verma",
    "musicPath": "./assets/music/573.mp3"
  },
  {
    "backgroundImage": "./assets/images/574.png",
    "posterUrl": "./assets/images/574.png",
    "title": "Tera Mera Rishta",
    "album": "Awarapan (Original Motion Picture Soundtrack)",
    "year": "2022",
    "artist": "Mustafa Zahid",
    "musicPath": "./assets/music/574.mp3"
  },
  {
    "backgroundImage": "./assets/images/575.png",
    "posterUrl": "./assets/images/575.png",
    "title": "Tera Naam",
    "album": "Red",
    "year": "2013",
    "artist": "Babbal Rai",
    "musicPath": "./assets/music/575.mp3"
  },
  {
    "backgroundImage": "./assets/images/576.png",
    "posterUrl": "./assets/images/576.png",
    "title": "Tera Saath",
    "album": "Tera Saath",
    "year": "2021",
    "artist": "Talwiinder/Vylom",
    "musicPath": "./assets/music/576.mp3"
  },
  {
    "backgroundImage": "./assets/images/577.png",
    "posterUrl": "./assets/images/577.png",
    "title": "Tere Bina",
    "album": "Guru (Original Motion Picture Soundtrack)",
    "year": "2006",
    "artist": "A.R. Rahman/Chinmayi/Murtuza Khan/Qadir Khan",
    "musicPath": "./assets/music/577.mp3"
  },
  {
    "backgroundImage": "./assets/images/578.png",
    "posterUrl": "./assets/images/578.png",
    "title": "Tere Hawaale (From \"Laal Singh Chaddha\")",
    "album": "Tere Hawaale (From \"Laal Singh Chaddha\")",
    "year": "2022",
    "artist": "Pritam/Arijit Singh/Shilpa Rao",
    "musicPath": "./assets/music/578.mp3"
  },
  {
    "backgroundImage": "./assets/images/579.png",
    "posterUrl": "./assets/images/579.png",
    "title": "Tere Hawale - Darshan Raval",
    "album": "Tere Hawale - Darshan Raval",
    "year": "2023",
    "artist": "Akdas Hayat",
    "musicPath": "./assets/music/579.mp3"
  },
  {
    "backgroundImage": "./assets/images/580.png",
    "posterUrl": "./assets/images/580.png",
    "title": "Tere Naina",
    "album": "Chandni Chowk To China",
    "year": "2008",
    "artist": "Shankar Mahadevan/Shreya Ghoshal",
    "musicPath": "./assets/music/580.mp3"
  },
  {
    "backgroundImage": "./assets/images/581.png",
    "posterUrl": "./assets/images/581.png",
    "title": "Teri Meri Pehli Sham",
    "album": "Teri Meri Pehli Sham",
    "year": "2020",
    "artist": "Punit Singh",
    "musicPath": "./assets/music/581.mp3"
  },
  {
    "backgroundImage": "./assets/images/582.png",
    "posterUrl": "./assets/images/582.png",
    "title": "Terrible Love",
    "album": "High Violet",
    "year": "2010",
    "artist": "The National",
    "musicPath": "./assets/music/582.mp3"
  },
  {
    "backgroundImage": "./assets/images/583.png",
    "posterUrl": "./assets/images/583.png",
    "title": "That Girl",
    "album": "Judaa 3 Chapter 2",
    "year": "2024",
    "artist": "Amrinder Gill/Dr Zeus/Raj Ranjodh",
    "musicPath": "./assets/music/583.mp3"
  },
  {
    "backgroundImage": "./assets/images/584.png",
    "posterUrl": "./assets/images/584.png",
    "title": "That's Amore",
    "album": "Dean Martin Sings",
    "year": "1955",
    "artist": "Dean Martin",
    "musicPath": "./assets/music/584.mp3"
  },
  {
    "backgroundImage": "./assets/images/585.png",
    "posterUrl": "./assets/images/585.png",
    "title": "The A Team",
    "album": "+",
    "year": "2011",
    "artist": "Ed Sheeran",
    "musicPath": "./assets/music/585.mp3"
  },
  {
    "backgroundImage": "./assets/images/586.png",
    "posterUrl": "./assets/images/586.png",
    "title": "The Adults Are Talking",
    "album": "The New Abnormal",
    "year": "2020",
    "artist": "The Strokes",
    "musicPath": "./assets/music/586.mp3"
  },
  {
    "backgroundImage": "./assets/images/587.png",
    "posterUrl": "./assets/images/587.png",
    "title": "The Box",
    "album": "Please Excuse Me for Being Antisocial",
    "year": "2019",
    "artist": "Roddy Ricch",
    "musicPath": "./assets/music/587.mp3"
  },
  {
    "backgroundImage": "./assets/images/588.png",
    "posterUrl": "./assets/images/588.png",
    "title": "The City - Live at Sticky Studios; Loose Change EP",
    "album": "5",
    "year": "2014",
    "artist": "Ed Sheeran",
    "musicPath": "./assets/music/588.mp3"
  },
  {
    "backgroundImage": "./assets/images/589.png",
    "posterUrl": "./assets/images/589.png",
    "title": "The Emptiness Machine",
    "album": "The Emptiness Machine",
    "year": "2024",
    "artist": "Linkin Park",
    "musicPath": "./assets/music/589.mp3"
  },
  {
    "backgroundImage": "./assets/images/590.png",
    "posterUrl": "./assets/images/590.png",
    "title": "The Feels",
    "album": "Ends & Begins",
    "year": "2023",
    "artist": "Labrinth",
    "musicPath": "./assets/music/590.mp3"
  },
  {
    "backgroundImage": "./assets/images/591.png",
    "posterUrl": "./assets/images/591.png",
    "title": "The Hills",
    "album": "Beauty Behind The Madness",
    "year": "2015",
    "artist": "The Weeknd",
    "musicPath": "./assets/music/591.mp3"
  },
  {
    "backgroundImage": "./assets/images/592.png",
    "posterUrl": "./assets/images/592.png",
    "title": "The Middle",
    "album": "The Middle",
    "year": "2018",
    "artist": "Zedd/Maren Morris/Grey",
    "musicPath": "./assets/music/592.mp3"
  },
  {
    "backgroundImage": "./assets/images/593.png",
    "posterUrl": "./assets/images/593.png",
    "title": "The Morning",
    "album": "Trilogy",
    "year": "2012",
    "artist": "The Weeknd",
    "musicPath": "./assets/music/593.mp3"
  },
  {
    "backgroundImage": "./assets/images/594.png",
    "posterUrl": "./assets/images/594.png",
    "title": "The Night King",
    "album": "Game Of Thrones: Season 8 (Music from the HBO Series)",
    "year": "2019",
    "artist": "Ramin Djawadi",
    "musicPath": "./assets/music/594.mp3"
  },
  {
    "backgroundImage": "./assets/images/595.png",
    "posterUrl": "./assets/images/595.png",
    "title": "The Night We Met",
    "album": "Strange Trails",
    "year": "2015",
    "artist": "Lord Huron",
    "musicPath": "./assets/music/595.mp3"
  },
  {
    "backgroundImage": "./assets/images/596.png",
    "posterUrl": "./assets/images/596.png",
    "title": "The Nights",
    "album": "The Days / Nights",
    "year": "2014",
    "artist": "Avicii",
    "musicPath": "./assets/music/596.mp3"
  },
  {
    "backgroundImage": "./assets/images/597.png",
    "posterUrl": "./assets/images/597.png",
    "title": "The Original Brown Noise",
    "album": "Brown Noise",
    "year": "2020",
    "artist": "Zenibly",
    "musicPath": "./assets/music/597.mp3"
  },
  {
    "backgroundImage": "./assets/images/598.png",
    "posterUrl": "./assets/images/598.png",
    "title": "The Real Slim Shady",
    "album": "The Marshall Mathers LP",
    "year": "2000",
    "artist": "Eminem",
    "musicPath": "./assets/music/598.mp3"
  },
  {
    "backgroundImage": "./assets/images/599.png",
    "posterUrl": "./assets/images/599.png",
    "title": "The Silence",
    "album": "A Black Mile To The Surface",
    "year": "2017",
    "artist": "Manchester Orchestra",
    "musicPath": "./assets/music/599.mp3"
  },
  {
    "backgroundImage": "./assets/images/600.png",
    "posterUrl": "./assets/images/600.png",
    "title": "The Sound of Silence",
    "album": "The Graduate",
    "year": "1968",
    "artist": "Simon & Garfunkel",
    "musicPath": "./assets/music/600.mp3"
  },
  {
    "backgroundImage": "./assets/images/601.png",
    "posterUrl": "./assets/images/601.png",
    "title": "The Thing",
    "album": "Velouria",
    "year": "1990",
    "artist": "Pixies",
    "musicPath": "./assets/music/601.mp3"
  },
  {
    "backgroundImage": "./assets/images/602.png",
    "posterUrl": "./assets/images/602.png",
    "title": "This Girl (Kungs Vs. Cookin' On 3 Burners)",
    "album": "Layers",
    "year": "2016",
    "artist": "Kungs/Cookin' On 3 Burners",
    "musicPath": "./assets/music/602.mp3"
  },
  {
    "backgroundImage": "./assets/images/603.png",
    "posterUrl": "./assets/images/603.png",
    "title": "This Is Home",
    "album": "This Is Home",
    "year": "2015",
    "artist": "Cavetown",
    "musicPath": "./assets/music/603.mp3"
  },
  {
    "backgroundImage": "./assets/images/604.png",
    "posterUrl": "./assets/images/604.png",
    "title": "this is how you fall in love",
    "album": "this is how you fall in love",
    "year": "2021",
    "artist": "Jeremy Zucker/Chelsea Cutler",
    "musicPath": "./assets/music/604.mp3"
  },
  {
    "backgroundImage": "./assets/images/605.png",
    "posterUrl": "./assets/images/605.png",
    "title": "This Party Getting Hot",
    "album": "This Party Getting Hot",
    "year": "2012",
    "artist": "Jazzy B/Yo Yo Honey Singh",
    "musicPath": "./assets/music/605.mp3"
  },
  {
    "backgroundImage": "./assets/images/606.png",
    "posterUrl": "./assets/images/606.png",
    "title": "Thodi Der",
    "album": "Half Girlfriend (Original Motion Picture Soundtrack)",
    "year": "2017",
    "artist": "Farhan Saeed/Shreya Ghoshal/Kumaar",
    "musicPath": "./assets/music/606.mp3"
  },
  {
    "backgroundImage": "./assets/images/607.png",
    "posterUrl": "./assets/images/607.png",
    "title": "Tone Deaf",
    "album": "Music To Be Murdered By - Side B (Deluxe Edition)",
    "year": "2020",
    "artist": "Eminem",
    "musicPath": "./assets/music/607.mp3"
  },
  {
    "backgroundImage": "./assets/images/608.png",
    "posterUrl": "./assets/images/608.png",
    "title": "Toxic",
    "album": "Faded",
    "year": "2021",
    "artist": "BoyWithUke",
    "musicPath": "./assets/music/608.mp3"
  },
  {
    "backgroundImage": "./assets/images/609.png",
    "posterUrl": "./assets/images/609.png",
    "title": "Trap Anthem",
    "album": "Trap Anthem",
    "year": "2020",
    "artist": "MC Virgins/Yun Head",
    "musicPath": "./assets/music/609.mp3"
  },
  {
    "backgroundImage": "./assets/images/610.png",
    "posterUrl": "./assets/images/610.png",
    "title": "Try Me",
    "album": "My Dear Melancholy,",
    "year": "2018",
    "artist": "The Weeknd",
    "musicPath": "./assets/music/610.mp3"
  },
  {
    "backgroundImage": "./assets/images/611.png",
    "posterUrl": "./assets/images/611.png",
    "title": "Tu Hi Hai",
    "album": "Dear Zindagi (Original Motion Picture Soundtrack)",
    "year": "2016",
    "artist": "Amit Trivedi/Arijit Singh/Kausar Munir",
    "musicPath": "./assets/music/611.mp3"
  },
  {
    "backgroundImage": "./assets/images/612.png",
    "posterUrl": "./assets/images/612.png",
    "title": "Tu Hi Tu",
    "album": "Kick",
    "year": "2014",
    "artist": "Mohammed Irfan/Himesh Reshammiya/Mayur Puri",
    "musicPath": "./assets/music/612.mp3"
  },
  {
    "backgroundImage": "./assets/images/613.png",
    "posterUrl": "./assets/images/613.png",
    "title": "Tu Hi",
    "album": "My Turn",
    "year": "2023",
    "artist": "Sultaan/Avvy Sra",
    "musicPath": "./assets/music/613.mp3"
  },
  {
    "backgroundImage": "./assets/images/614.png",
    "posterUrl": "./assets/images/614.png",
    "title": "Tujhko Jo Paaya",
    "album": "Crook (Original Motion Picture Soundtrack)",
    "year": "2010",
    "artist": "Pritam/Mohit Chauhan",
    "musicPath": "./assets/music/614.mp3"
  },
  {
    "backgroundImage": "./assets/images/615.png",
    "posterUrl": "./assets/images/615.png",
    "title": "Tum Hi Ho Bandhu",
    "album": "Cocktail (Original Motion Picture Soundtrack)",
    "year": "2012",
    "artist": "Neeraj Shridhar/Kavita Seth/Pritam",
    "musicPath": "./assets/music/615.mp3"
  },
  {
    "backgroundImage": "./assets/images/616.png",
    "posterUrl": "./assets/images/616.png",
    "title": "Tum Ho Mera Pyar",
    "album": "Haunted",
    "year": "2011",
    "artist": "KK/Suzanne",
    "musicPath": "./assets/music/616.mp3"
  },
  {
    "backgroundImage": "./assets/images/617.png",
    "posterUrl": "./assets/images/617.png",
    "title": "Tum Mile",
    "album": "Tum Mile (Original Motion Picture Soundtrack)",
    "year": "2009",
    "artist": "Pritam/Neeraj Shridhar",
    "musicPath": "./assets/music/617.mp3"
  },
  {
    "backgroundImage": "./assets/images/618.png",
    "posterUrl": "./assets/images/618.png",
    "title": "Tumse Hi Tumse",
    "album": "Anjaana Anjaani",
    "year": "2010",
    "artist": "Vishal-Shekhar/Shekhar Ravjiani/Caralisa Monteiro",
    "musicPath": "./assets/music/618.mp3"
  },
  {
    "backgroundImage": "./assets/images/619.png",
    "posterUrl": "./assets/images/619.png",
    "title": "Tune Jo Na Kaha",
    "album": "New York",
    "year": "2009",
    "artist": "Pritam/Mohit Chauhan/Sandeep Shrivastava",
    "musicPath": "./assets/music/619.mp3"
  },
  {
    "backgroundImage": "./assets/images/620.png",
    "posterUrl": "./assets/images/620.png",
    "title": "Tune Kaha",
    "album": "Tune Kaha",
    "year": "2016",
    "artist": "Prateek Kuhad",
    "musicPath": "./assets/music/620.mp3"
  },
  {
    "backgroundImage": "./assets/images/621.png",
    "posterUrl": "./assets/images/621.png",
    "title": "Type Shit",
    "album": "WE DON'T TRUST YOU",
    "year": "2024",
    "artist": "Future/Metro Boomin/Travis Scott/Playboi Carti",
    "musicPath": "./assets/music/621.mp3"
  },
  {
    "backgroundImage": "./assets/images/622.png",
    "posterUrl": "./assets/images/622.png",
    "title": "Unforgettable",
    "album": "Unforgettable",
    "year": "2018",
    "artist": "Talwiinder",
    "musicPath": "./assets/music/622.mp3"
  },
  {
    "backgroundImage": "./assets/images/623.png",
    "posterUrl": "./assets/images/623.png",
    "title": "unravel",
    "album": "Fantastic Magic",
    "year": "2014",
    "artist": "TK from Ling tosite sigure",
    "musicPath": "./assets/music/623.mp3"
  },
  {
    "backgroundImage": "./assets/images/624.png",
    "posterUrl": "./assets/images/624.png",
    "title": "Until I Found You",
    "album": "Until I Found You",
    "year": "2021",
    "artist": "Stephen Sanchez",
    "musicPath": "./assets/music/624.mp3"
  },
  {
    "backgroundImage": "./assets/images/625.png",
    "posterUrl": "./assets/images/625.png",
    "title": "Ur So F**kInG cOoL (blackbear Remix)",
    "album": "Ur So F**kInG cOoL (blackbear Remix)",
    "year": "2020",
    "artist": "Tones And I",
    "musicPath": "./assets/music/625.mp3"
  },
  {
    "backgroundImage": "./assets/images/626.png",
    "posterUrl": "./assets/images/626.png",
    "title": "Violet Hill",
    "album": "Viva La Vida or Death and All His Friends",
    "year": "2008",
    "artist": "Coldplay",
    "musicPath": "./assets/music/626.mp3"
  },
  {
    "backgroundImage": "./assets/images/627.png",
    "posterUrl": "./assets/images/627.png",
    "title": "virgo",
    "album": "virgo",
    "year": "2018",
    "artist": "Jadu Jadu",
    "musicPath": "./assets/music/627.mp3"
  },
  {
    "backgroundImage": "./assets/images/628.png",
    "posterUrl": "./assets/images/628.png",
    "title": "Wait a Minute! (Sped Up) - I Think I Left My Consciousness in the 6Th Dimension",
    "album": "Wait a Minute! (Sped Up) - I Think I Left My Consciousness in the 6Th Dimension",
    "year": "2022",
    "artist": "Hiko",
    "musicPath": "./assets/music/628.mp3"
  },
  {
    "backgroundImage": "./assets/images/629.png",
    "posterUrl": "./assets/images/629.png",
    "title": "Wait",
    "album": "Hurry up, We're Dreaming",
    "year": "2011",
    "artist": "M83",
    "musicPath": "./assets/music/629.mp3"
  },
  {
    "backgroundImage": "./assets/images/630.png",
    "posterUrl": "./assets/images/630.png",
    "title": "Walls Could Talk",
    "album": "hopeless fountain kingdom (Deluxe)",
    "year": "2017",
    "artist": "Halsey",
    "musicPath": "./assets/music/630.mp3"
  },
  {
    "backgroundImage": "./assets/images/631.png",
    "posterUrl": "./assets/images/631.png",
    "title": "WAM",
    "album": "Floor Seats",
    "year": "2019",
    "artist": "A$AP Ferg/MadeinTYO",
    "musicPath": "./assets/music/631.mp3"
  },
  {
    "backgroundImage": "./assets/images/632.png",
    "posterUrl": "./assets/images/632.png",
    "title": "Wants and Needs (feat. Lil Baby)",
    "album": "Scary Hours 2",
    "year": "2021",
    "artist": "Drake/Lil Baby",
    "musicPath": "./assets/music/632.mp3"
  },
  {
    "backgroundImage": "./assets/images/633.png",
    "posterUrl": "./assets/images/633.png",
    "title": "Warriors",
    "album": "Smoke + Mirrors (Deluxe)",
    "year": "2015",
    "artist": "Imagine Dragons",
    "musicPath": "./assets/music/633.mp3"
  },
  {
    "backgroundImage": "./assets/images/634.png",
    "posterUrl": "./assets/images/634.png",
    "title": "Washing Machine Heart",
    "album": "Be the Cowboy",
    "year": "2018",
    "artist": "Mitski",
    "musicPath": "./assets/music/634.mp3"
  },
  {
    "backgroundImage": "./assets/images/635.png",
    "posterUrl": "./assets/images/635.png",
    "title": "WASTE",
    "album": "DISORDER",
    "year": "2021",
    "artist": "KXLLSWXTCH",
    "musicPath": "./assets/music/635.mp3"
  },
  {
    "backgroundImage": "./assets/images/636.png",
    "posterUrl": "./assets/images/636.png",
    "title": "Wasted Summers",
    "album": "Wasted Summers",
    "year": "2023",
    "artist": "juju<3",
    "musicPath": "./assets/music/636.mp3"
  },
  {
    "backgroundImage": "./assets/images/637.png",
    "posterUrl": "./assets/images/637.png",
    "title": "watching the stars (Sped Up)",
    "album": "watching the stars (Remixes)",
    "year": "2022",
    "artist": "\u00d8neheart",
    "musicPath": "./assets/music/637.mp3"
  },
  {
    "backgroundImage": "./assets/images/638.png",
    "posterUrl": "./assets/images/638.png",
    "title": "Water Fountain",
    "album": "Narrated For You",
    "year": "2018",
    "artist": "Alec Benjamin",
    "musicPath": "./assets/music/638.mp3"
  },
  {
    "backgroundImage": "./assets/images/639.png",
    "posterUrl": "./assets/images/639.png",
    "title": "Way Back Home (feat. Conor Maynard) - Sam Feldt Edit",
    "album": "Way Back Home (feat. Conor Maynard) [Sam Feldt Edit]",
    "year": "2018",
    "artist": "SHAUN/Conor Maynard/Sam Feldt",
    "musicPath": "./assets/music/639.mp3"
  },
  {
    "backgroundImage": "./assets/images/640.png",
    "posterUrl": "./assets/images/640.png",
    "title": "Way Back Home",
    "album": "Take",
    "year": "2018",
    "artist": "SHAUN",
    "musicPath": "./assets/music/640.mp3"
  },
  {
    "backgroundImage": "./assets/images/641.png",
    "posterUrl": "./assets/images/641.png",
    "title": "We All Knew",
    "album": "Euphoria (Original Score from the HBO Series)",
    "year": "2019",
    "artist": "Labrinth",
    "musicPath": "./assets/music/641.mp3"
  },
  {
    "backgroundImage": "./assets/images/642.png",
    "posterUrl": "./assets/images/642.png",
    "title": "we fell in love in october",
    "album": "we fell in love in october / forget her",
    "year": "2018",
    "artist": "girl in red",
    "musicPath": "./assets/music/642.mp3"
  },
  {
    "backgroundImage": "./assets/images/643.png",
    "posterUrl": "./assets/images/643.png",
    "title": "We No Speak Americano",
    "album": "We No Speak\u00a0Americano",
    "year": "2020",
    "artist": "Yolanda Be Cool/DCup",
    "musicPath": "./assets/music/643.mp3"
  },
  {
    "backgroundImage": "./assets/images/644.png",
    "posterUrl": "./assets/images/644.png",
    "title": "What A Wonderful World",
    "album": "What A Wonderful World",
    "year": "1968",
    "artist": "Louis Armstrong",
    "musicPath": "./assets/music/644.mp3"
  },
  {
    "backgroundImage": "./assets/images/645.png",
    "posterUrl": "./assets/images/645.png",
    "title": "What Do I Know?",
    "album": "\u00f7 (Deluxe)",
    "year": "2017",
    "artist": "Ed Sheeran",
    "musicPath": "./assets/music/645.mp3"
  },
  {
    "backgroundImage": "./assets/images/646.png",
    "posterUrl": "./assets/images/646.png",
    "title": "What I've Done",
    "album": "Minutes to Midnight",
    "year": "2007",
    "artist": "Linkin Park",
    "musicPath": "./assets/music/646.mp3"
  },
  {
    "backgroundImage": "./assets/images/647.png",
    "posterUrl": "./assets/images/647.png",
    "title": "What Makes You Sad",
    "album": "What Makes You Sad",
    "year": "2022",
    "artist": "Nicotine Dolls",
    "musicPath": "./assets/music/647.mp3"
  },
  {
    "backgroundImage": "./assets/images/648.png",
    "posterUrl": "./assets/images/648.png",
    "title": "Whats Poppin (feat. DaBaby, Tory Lanez & Lil Wayne) [Remix] - Bonus Track",
    "album": "Thats What They All Say",
    "year": "2020",
    "artist": "Jack Harlow/Tory Lanez/DaBaby/Lil Wayne",
    "musicPath": "./assets/music/648.mp3"
  },
  {
    "backgroundImage": "./assets/images/649.png",
    "posterUrl": "./assets/images/649.png",
    "title": "When You Wash Your Hair",
    "album": "Krystal",
    "year": "2020",
    "artist": "Matt Maltese",
    "musicPath": "./assets/music/649.mp3"
  },
  {
    "backgroundImage": "./assets/images/650.png",
    "posterUrl": "./assets/images/650.png",
    "title": "Whenever, Wherever",
    "album": "Laundry Service",
    "year": "2001",
    "artist": "Shakira",
    "musicPath": "./assets/music/650.mp3"
  },
  {
    "backgroundImage": "./assets/images/651.png",
    "posterUrl": "./assets/images/651.png",
    "title": "Where Are \u00dc Now (with Justin Bieber)",
    "album": "Skrillex and Diplo present Jack \u00dc",
    "year": "2015",
    "artist": "Jack \u00dc/Skrillex/Diplo/Justin Bieber",
    "musicPath": "./assets/music/651.mp3"
  },
  {
    "backgroundImage": "./assets/images/652.png",
    "posterUrl": "./assets/images/652.png",
    "title": "Where Is My Mind?",
    "album": "Death to the Pixies",
    "year": "1997",
    "artist": "Pixies",
    "musicPath": "./assets/music/652.mp3"
  },
  {
    "backgroundImage": "./assets/images/653.png",
    "posterUrl": "./assets/images/653.png",
    "title": "Who Knew",
    "album": "The Marshall Mathers LP",
    "year": "2000",
    "artist": "Eminem",
    "musicPath": "./assets/music/653.mp3"
  },
  {
    "backgroundImage": "./assets/images/654.png",
    "posterUrl": "./assets/images/654.png",
    "title": "Who Says",
    "album": "When The Sun Goes Down",
    "year": "2011",
    "artist": "Selena Gomez & The Scene",
    "musicPath": "./assets/music/654.mp3"
  },
  {
    "backgroundImage": "./assets/images/655.png",
    "posterUrl": "./assets/images/655.png",
    "title": "Whore",
    "album": "Blood",
    "year": "2012",
    "artist": "In This Moment",
    "musicPath": "./assets/music/655.mp3"
  },
  {
    "backgroundImage": "./assets/images/656.png",
    "posterUrl": "./assets/images/656.png",
    "title": "Wishes",
    "album": "Maybe, It's Love",
    "year": "2023",
    "artist": "Hasan Raheem/Umair/Talwiinder",
    "musicPath": "./assets/music/656.mp3"
  },
  {
    "backgroundImage": "./assets/images/657.png",
    "posterUrl": "./assets/images/657.png",
    "title": "without you (interlude)",
    "album": "Getaway",
    "year": "2022",
    "artist": "Orion Sun",
    "musicPath": "./assets/music/657.mp3"
  },
  {
    "backgroundImage": "./assets/images/658.png",
    "posterUrl": "./assets/images/658.png",
    "title": "WITHOUT YOU",
    "album": "F*CK LOVE (SAVAGE)",
    "year": "2020",
    "artist": "The Kid LAROI",
    "musicPath": "./assets/music/658.mp3"
  },
  {
    "backgroundImage": "./assets/images/659.png",
    "posterUrl": "./assets/images/659.png",
    "title": "Woh Ladki Hai Kahan",
    "album": "Dil Chahta Hai",
    "year": "2001",
    "artist": "Shaan/Kavita Krishnamurthy",
    "musicPath": "./assets/music/659.mp3"
  },
  {
    "backgroundImage": "./assets/images/660.png",
    "posterUrl": "./assets/images/660.png",
    "title": "Woh Lamhe Woh Baatein",
    "album": "Zeher",
    "year": "2005",
    "artist": "Atif Aslam",
    "musicPath": "./assets/music/660.mp3"
  },
  {
    "backgroundImage": "./assets/images/661.png",
    "posterUrl": "./assets/images/661.png",
    "title": "Woofer (feat. Snoop Dogg, Zora Randhawa & Nargis Fakhri)",
    "album": "Global Injection",
    "year": "2018",
    "artist": "Dr Zeus/Snoop Dogg/Zora Randhawa/Nargis Fakhri",
    "musicPath": "./assets/music/661.mp3"
  },
  {
    "backgroundImage": "./assets/images/662.png",
    "posterUrl": "./assets/images/662.png",
    "title": "Work",
    "album": "ANTI (Deluxe)",
    "year": "2016",
    "artist": "Rihanna/Drake",
    "musicPath": "./assets/music/662.mp3"
  },
  {
    "backgroundImage": "./assets/images/663.png",
    "posterUrl": "./assets/images/663.png",
    "title": "worldstar money (interlude)",
    "album": "In Tongues (Deluxe)",
    "year": "2018",
    "artist": "Joji",
    "musicPath": "./assets/music/663.mp3"
  },
  {
    "backgroundImage": "./assets/images/664.png",
    "posterUrl": "./assets/images/664.png",
    "title": "WTF Are We Talking For",
    "album": "Euphoria (Original Score from the HBO Series)",
    "year": "2019",
    "artist": "Labrinth",
    "musicPath": "./assets/music/664.mp3"
  },
  {
    "backgroundImage": "./assets/images/665.png",
    "posterUrl": "./assets/images/665.png",
    "title": "Yaar Bathere",
    "album": "Alfaaz",
    "year": "2011",
    "artist": "Alfaaz",
    "musicPath": "./assets/music/665.mp3"
  },
  {
    "backgroundImage": "./assets/images/666.png",
    "posterUrl": "./assets/images/666.png",
    "title": "Yahan Koi Nahi",
    "album": "Yahan Koi Nahi",
    "year": "2020",
    "artist": "Punit Singh",
    "musicPath": "./assets/music/666.mp3"
  },
  {
    "backgroundImage": "./assets/images/667.png",
    "posterUrl": "./assets/images/667.png",
    "title": "Yahin Hoon Main",
    "album": "Yahin Hoon Main",
    "year": "2015",
    "artist": "Rochak Kohli/Ayushmann Khurrana",
    "musicPath": "./assets/music/667.mp3"
  },
  {
    "backgroundImage": "./assets/images/668.png",
    "posterUrl": "./assets/images/668.png",
    "title": "Ye Tune Kya Kiya",
    "album": "Once Upon Ay Time In Mumbai Dobaara !",
    "year": "2013",
    "artist": "Pritam/Javed Bashir",
    "musicPath": "./assets/music/668.mp3"
  },
  {
    "backgroundImage": "./assets/images/669.png",
    "posterUrl": "./assets/images/669.png",
    "title": "Yeh Dil Deewana",
    "album": "Pardes (Original Motion Picture Soundtrack)",
    "year": "1997",
    "artist": "Sonu Nigam/Hema Sardesai/Shankar Mahadevan",
    "musicPath": "./assets/music/669.mp3"
  },
  {
    "backgroundImage": "./assets/images/670.png",
    "posterUrl": "./assets/images/670.png",
    "title": "Yeh I Fuckin' Did It - From \"Euphoria\" An Original HBO Series",
    "album": "Yeh I Fuckin' Did It / I'm Tired (From \"Euphoria\" An Original HBO Series)",
    "year": "2022",
    "artist": "Labrinth",
    "musicPath": "./assets/music/670.mp3"
  },
  {
    "backgroundImage": "./assets/images/671.png",
    "posterUrl": "./assets/images/671.png",
    "title": "Yeh Jism",
    "album": "Jism 2",
    "year": "2012",
    "artist": "Ali Azmat",
    "musicPath": "./assets/music/671.mp3"
  },
  {
    "backgroundImage": "./assets/images/672.png",
    "posterUrl": "./assets/images/672.png",
    "title": "Yeh Pal",
    "album": "Raat Raazi",
    "year": "2013",
    "artist": "Prateek Kuhad",
    "musicPath": "./assets/music/672.mp3"
  },
  {
    "backgroundImage": "./assets/images/673.png",
    "posterUrl": "./assets/images/673.png",
    "title": "Yeh Raaten Yeh Mausam",
    "album": "Rewind With Sanam",
    "year": "2020",
    "artist": "Sanam/Simran Sehgal",
    "musicPath": "./assets/music/673.mp3"
  },
  {
    "backgroundImage": "./assets/images/674.png",
    "posterUrl": "./assets/images/674.png",
    "title": "Yoon Shabnami",
    "album": "Saawariya (Original Motion Picture Soundtrack)",
    "year": "2007",
    "artist": "Monty Sharma/Parthiv Gohil",
    "musicPath": "./assets/music/674.mp3"
  },
  {
    "backgroundImage": "./assets/images/675.png",
    "posterUrl": "./assets/images/675.png",
    "title": "You Don't Own Me (feat. G-Eazy)",
    "album": "FMA",
    "year": "2016",
    "artist": "SAYGRACE/G-Eazy",
    "musicPath": "./assets/music/675.mp3"
  },
  {
    "backgroundImage": "./assets/images/676.png",
    "posterUrl": "./assets/images/676.png",
    "title": "You Give Love A Bad Name",
    "album": "Slippery When Wet",
    "year": "1986",
    "artist": "Bon Jovi",
    "musicPath": "./assets/music/676.mp3"
  },
  {
    "backgroundImage": "./assets/images/677.png",
    "posterUrl": "./assets/images/677.png",
    "title": "you were good to me",
    "album": "brent",
    "year": "2019",
    "artist": "Jeremy Zucker/Chelsea Cutler",
    "musicPath": "./assets/music/677.mp3"
  },
  {
    "backgroundImage": "./assets/images/678.png",
    "posterUrl": "./assets/images/678.png",
    "title": "Your Eyes",
    "album": "Your Eyes",
    "year": "2022",
    "artist": "Talwiinder/30KEY!",
    "musicPath": "./assets/music/678.mp3"
  },
  {
    "backgroundImage": "./assets/images/679.png",
    "posterUrl": "./assets/images/679.png",
    "title": "Yun Hi Chala Chal (From \"Swades\")",
    "album": "Best Of Kailash Kher",
    "year": "2017",
    "artist": "Udit Narayan/Hariharan/Kailash Kher",
    "musicPath": "./assets/music/679.mp3"
  },
  {
    "backgroundImage": "./assets/images/680.png",
    "posterUrl": "./assets/images/680.png",
    "title": "Zakir",
    "album": "Hindi Gaane",
    "year": "2021",
    "artist": "NAALAYAK",
    "musicPath": "./assets/music/680.mp3"
  },
  {
    "backgroundImage": "./assets/images/681.png",
    "posterUrl": "./assets/images/681.png",
    "title": "Zara Zara - MTV Unwind",
    "album": "Zara Zara - MTV Unwind",
    "year": "2022",
    "artist": "Arjun Kanungo",
    "musicPath": "./assets/music/681.mp3"
  },
  {
    "backgroundImage": "./assets/images/682.png",
    "posterUrl": "./assets/images/682.png",
    "title": "Zehnaseeb",
    "album": "Hasee Toh Phasee (Original Motion Picture Soundtrack)",
    "year": "2014",
    "artist": "Vishal-Shekhar/Chinmayi/Shekhar Ravjiani",
    "musicPath": "./assets/music/682.mp3"
  },
  {
    "backgroundImage": "./assets/images/683.png",
    "posterUrl": "./assets/images/683.png",
    "title": "Zenloaded",
    "album": "Virgins Club",
    "year": "2020",
    "artist": "MC Virgins/Zenloaded",
    "musicPath": "./assets/music/683.mp3"
  },
  {
    "backgroundImage": "./assets/images/684.png",
    "posterUrl": "./assets/images/684.png",
    "title": "Zeus (feat. White Gold)",
    "album": "Music To Be Murdered By - Side B (Deluxe Edition)",
    "year": "2020",
    "artist": "Eminem/White Gold",
    "musicPath": "./assets/music/684.mp3"
  },
  {
    "backgroundImage": "./assets/images/685.png",
    "posterUrl": "./assets/images/685.png",
    "title": "\u044d\u0442\u043e \u043b\u0438 \u0441\u0447\u0430\u0441\u0442\u044c\u0435?",
    "album": "\u044d\u0442\u043e \u043b\u0438 \u0441\u0447\u0430\u0441\u0442\u044c\u0435?",
    "year": "2019",
    "artist": "Rauf & Faik",
    "musicPath": "./assets/music/685.mp3"
  },
  {
    "backgroundImage": "./assets/images/686.png",
    "posterUrl": "./assets/images/686.png",
    "title": "\u306a\u3044\u3082\u306e\u306d\u3060\u308a",
    "album": "\u50d5\u304cCD\u3092\u51fa\u3057\u305f\u3089",
    "year": "2013",
    "artist": "KANA-BOON",
    "musicPath": "./assets/music/686.mp3"
  },
  {
    "backgroundImage": "./assets/images/687.png",
    "posterUrl": "./assets/images/687.png",
    "title": "\u306a\u3093\u3067\u3082\u306a\u3044\u3084 - movie ver.",
    "album": "chouchou",
    "year": "2016",
    "artist": "Mone Kamishiraishi",
    "musicPath": "./assets/music/687.mp3"
  },
  {
    "backgroundImage": "./assets/images/688.png",
    "posterUrl": "./assets/images/688.png",
    "title": "\u30a2\u30b9\u30ce\u30e8\u30be\u30e9\u54e8\u6212\u73ed",
    "album": "\u5f7c\u306f\u304d\u3063\u3068\u9b54\u6cd5\u3092\u4f7f\u3046\u3002",
    "year": "2017",
    "artist": "MARY",
    "musicPath": "./assets/music/688.mp3"
  },
  {
    "backgroundImage": "./assets/images/689.png",
    "posterUrl": "./assets/images/689.png",
    "title": "\u30a4\u30f3\u30d5\u30a7\u30eb\u30ce",
    "album": "Attitude",
    "year": "2019",
    "artist": "Mrs. GREEN APPLE",
    "musicPath": "./assets/music/689.mp3"
  },
  {
    "backgroundImage": "./assets/images/690.png",
    "posterUrl": "./assets/images/690.png",
    "title": "\u30ab\u30ef\u30ad\u30f2\u30a2\u30e1\u30af",
    "album": "\u30ab\u30ef\u30ad\u30f2\u30a2\u30e1\u30af",
    "year": "2019",
    "artist": "\u7f8e\u6ce2",
    "musicPath": "./assets/music/690.mp3"
  },
  {
    "backgroundImage": "./assets/images/691.png",
    "posterUrl": "./assets/images/691.png",
    "title": "\u30d6\u30eb\u30fc\u30d0\u30fc\u30c9",
    "album": "Chou Ikimonobakari Tennen Kinen Members Best Selection",
    "year": "2006",
    "artist": "Ikimonogakari",
    "musicPath": "./assets/music/691.mp3"
  },
  {
    "backgroundImage": "./assets/images/692.png",
    "posterUrl": "./assets/images/692.png",
    "title": "\u30ed\u30b9\u30c8\u30a2\u30f3\u30d6\u30ec\u30e9",
    "album": "\u30a2\u30f3\u30c1\u30b5\u30a4\u30af\u30ed\u30f3",
    "year": "2019",
    "artist": "\u7a32\u8449\u66c7",
    "musicPath": "./assets/music/692.mp3"
  },
  {
    "backgroundImage": "./assets/images/693.png",
    "posterUrl": "./assets/images/693.png",
    "title": "\u604b\u611b\u30b5\u30fc\u30ad\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3",
    "album": "Utamonogatari Special Edition (Original Soundtrack)",
    "year": "2018",
    "artist": "\u7269\u8a9e\u30b7\u30ea\u30fc\u30ba",
    "musicPath": "./assets/music/693.mp3"
  },
  {
    "backgroundImage": "./assets/images/694.png",
    "posterUrl": "./assets/images/694.png",
    "title": "\u6253\u4e0a\u82b1\u706b",
    "album": "\u6253\u4e0a\u82b1\u706b",
    "year": "2017",
    "artist": "Daoko/Kenshi Yonezu",
    "musicPath": "./assets/music/694.mp3"
  }
];


/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
  elements[i].addEventListener(eventType, callback);
  }
 }
 
 
 
 /**
  * PLAYLIST
  * 
  * add all music in playlist, from 'musicData'
  */
 
 const playlist = document.querySelector("[data-music-list]");
 
 for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
  <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
  <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
  class="img-cover">
 
  <div class="item-icon">
  <span class="material-symbols-rounded">equalizer</span>
  </div>
  </button>
  </li>
  `;
 }
 
 // Listen for media key events
 document.addEventListener("keydown", function (event) {
  // Check for play/pause button (Media Play/Pause)
  if (event.key === "MediaPlayPause" || event.key === "k") { // Some keyboards might send "k" as a fallback
  playMusic(); // Toggle play/pause
  }
  
  // Check for next track button (Media Next Track)
  if (event.key === "MediaNextTrack" || event.key === "n") {
  skipNext(); // Skip to next track
  }
 
  // Check for previous track button (Media Previous Track)
  if (event.key === "MediaPreviousTrack" || event.key === "p") {
  skipPrev(); // Skip to previous track
  }
 });
 
 
 /**
  * PLAYLIST MODAL SIDEBAR TOGGLE
  * 
  * show 'playlist' modal sidebar when click on playlist button in top app bar
  * and hide when click on overlay or any playlist-item
  */
 
 const playlistSideModal = document.querySelector("[data-playlist]");
 const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
 const overlay = document.querySelector("[data-overlay]");
 
 const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
 }
 
 addEventOnElements(playlistTogglers, "click", togglePlaylist);
 
 
 
 /**
  * PLAYLIST ITEM
  * 
  * remove active state from last time played music
  * and add active state in clicked music
  */
 
 const playlistItems = document.querySelectorAll("[data-playlist-item]");
 
 let currentMusic = 0;
 let lastPlayedMusic = 0;
 
 const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
 }
 
 addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
 });
 
 
 
 /**
  * PLAYER
  * 
  * change all visual information on player, based on current music
  */
 
 const playerBanner = document.querySelector("[data-player-banner]");
 const playerTitle = document.querySelector("[data-title]");
 const playerAlbum = document.querySelector("[data-album]");
 const playerYear = document.querySelector("[data-year]");
 const playerArtist = document.querySelector("[data-artist]");
 
 const audioSource = new Audio(musicData[currentMusic].musicPath);
 
 
 const changePlayerInfo = function () {
  // Update the player UI with current music details
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;
 
  audioSource.src = musicData[currentMusic].musicPath;
 
  audioSource.addEventListener("loadeddata", updateDuration);
 
  // Play the music once everything is set up
  playMusic();
 
  // Update Media Session metadata to sync with external media controls
  if ('mediaSession' in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
  title: musicData[currentMusic].title,
  artist: musicData[currentMusic].artist,
  album: musicData[currentMusic].album,
  artwork: [
  { src: musicData[currentMusic].posterUrl, sizes: '512x512', type: 'image/png' }
  ]
  });
 
  // Set action handlers for media control buttons (play, pause, next, previous)
  navigator.mediaSession.setActionHandler('play', playMusic);
  navigator.mediaSession.setActionHandler('pause', playMusic);
  navigator.mediaSession.setActionHandler('nexttrack', skipNext);
  navigator.mediaSession.setActionHandler('previoustrack', skipPrev);
  navigator.mediaSession.setActionHandler('shuffle', toggleShuffle); // Shuffle
  navigator.mediaSession.setActionHandler('loop', toggleLoop); // Loop
  navigator.mediaSession.metadata.album = `${musicData[currentMusic].album} ${isShuffled ? "(Shuffle On)" : "(Shuffle Off)"} ${audioSource.loop ? "(Loop On)" : "(Loop Off)"}`;
 
  } 
 }
 
 
 addEventOnElements(playlistItems, "click", changePlayerInfo);
 
 /** update player duration */
 const playerDuration = document.querySelector("[data-duration]");
 const playerSeekRange = document.querySelector("[data-seek]");
 
 /** pass seconds and get timcode formate */
 const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
 }
 
 const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
 }
 
 audioSource.addEventListener("loadeddata", updateDuration);
 
 
 
 /**
  * PLAY MUSIC
  * 
  * play and pause music when click on play button
  */
 
 const playBtn = document.querySelector("[data-play-btn]");
 
 let playInterval;
 
 const playMusic = function () {
  if (audioSource.paused) {
  audioSource.play();
  playBtn.classList.add("active");
  playInterval = setInterval(updateRunningTime, 500);
  } else {
  audioSource.pause();
  playBtn.classList.remove("active");
  clearInterval(playInterval);
  }
 }
 
 playBtn.addEventListener("click", playMusic);
 
 
 /** update running time while playing music */
 
 const playerRunningTime = document.querySelector("[data-running-time");
 
 const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);
 
  updateRangeFill();
  isMusicEnd();
 }
 
 
 
 /**
  * RANGE FILL WIDTH
  * 
  * change 'rangeFill' width, while changing range value
  */
 
 const ranges = document.querySelectorAll("[data-range]");
 const rangeFill = document.querySelector("[data-range-fill]");
 
 const updateRangeFill = function () {
  let element = this || ranges[0];
 
  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
 }
 
 addEventOnElements(ranges, "input", updateRangeFill);
 
 
 
 /**
  * SEEK MUSIC
  * 
  * seek music while changing player seek range
  */
 
 const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
 }
 
 playerSeekRange.addEventListener("input", seek);
 
 
 
 /**
  * END MUSIC
  */
 
 const isMusicEnd = function () {
  if (audioSource.ended) {
  playBtn.classList.remove("active");
  audioSource.currentTime = 0;
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);
  skipNext();
  updateRangeFill();
  }
 }
 
 
 
 /**
  * SKIP TO NEXT MUSIC
  */
 
 const playerSkipNextBtn = document.querySelector("[data-skip-next]");
 
 const skipNext = function () {
  lastPlayedMusic = currentMusic;
 
  if (isShuffled) {
  shuffleMusic();
  } else {
  currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }
 
  changePlayerInfo();
  changePlaylistItem();
 }
 
 playerSkipNextBtn.addEventListener("click", skipNext);
 
 
 
 /**
  * SKIP TO PREVIOUS MUSIC
  */
 
 const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");
 
 const skipPrev = function () {
  lastPlayedMusic = currentMusic;
 
  if (isShuffled) {
  shuffleMusic();
  } else {
  currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }
 
  changePlayerInfo();
  changePlaylistItem();
 }
 
 playerSkipPrevBtn.addEventListener("click", skipPrev);
 
 
 
 /**
  * SHUFFLE MUSIC
  */
 
 /** get random number for shuffle */
 const getRandomMusic = () => Math.floor(Math.random() * musicData.length);
 
 const shuffleMusic = () => currentMusic = getRandomMusic();
 
 const playerShuffleBtn = document.querySelector("[data-shuffle]");
 let isShuffled = false;
 
 const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");
 
  isShuffled = isShuffled ? false : true;
 }
 
 playerShuffleBtn.addEventListener("click", shuffle);
 
 
 
 /**
  * REPEAT MUSIC
  */
 
 const playerRepeatBtn = document.querySelector("[data-repeat]");
 
 const repeat = function () {
  if (!audioSource.loop) {
  audioSource.loop = true;
  this.classList.add("active");
  } else {
  audioSource.loop = false;
  this.classList.remove("active");
  }
 }
 
 playerRepeatBtn.addEventListener("click", repeat);
 
 
 
 /**
  * MUSIC VOLUME
  * 
  * increase or decrease music volume when change the volume range
  */
 
 const playerVolumeRange = document.querySelector("[data-volume]");
 const playerVolumeBtn = document.querySelector("[data-volume-btn]");
 
 const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;
 
  if (audioSource.volume <= 0.1) {
  playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
  playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
  playerVolumeBtn.children[0].textContent = "volume_up";
  }
 }
 
 playerVolumeRange.addEventListener("input", changeVolume);
 
 
 /**
  * MUTE MUSIC
  */
 
 const muteVolume = function () {
  if (!audioSource.muted) {
  audioSource.muted = true;
  playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
  changeVolume();
  }
 }
 
 playerVolumeBtn.addEventListener("click", muteVolume);
 
 // old Fucntions
 // const changePlayerInfo = function () {
 // playerBanner.src = musicData[currentMusic].posterUrl;
 // playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
 // document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
 // playerTitle.textContent = musicData[currentMusic].title;
 // playerAlbum.textContent = musicData[currentMusic].album;
 // playerYear.textContent = musicData[currentMusic].year;
 // playerArtist.textContent = musicData[currentMusic].artist;
 
 // audioSource.src = musicData[currentMusic].musicPath;
 
 // audioSource.addEventListener("loadeddata", updateDuration);
 // playMusic();
 // }
 