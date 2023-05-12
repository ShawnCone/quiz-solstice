import { z } from "zod";

export const questionSchema = z.object({
  id: z.number(),
  title: z.string(),
  question: z.string(),
  imageLink: z.optional(z.string()),
  answer: z.string(),
});

export const questionBank: z.infer<typeof questionSchema>[] = [
  {
    id: 1,
    title: "GEO 101",
    question: "What country is this?",
    answer: "Italy",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Italian_regions_provinces_white_no_labels.svg/1200px-Italian_regions_provinces_white_no_labels.svg.png",
  },
  {
    id: 2,
    title: "GEO 101",
    question: "What are the names of the seven continents of the world?",
    answer:
      "Asia, Africa, North America, South America, Antarctica, Europe, Australia",
  },
  {
    id: 3,
    title: "GEO 101",
    question: "What are the names of the five oceans of the world?",
    answer: "Atlantic, Pacific, Indian, Arctic, and the Antarctic",
  },
  {
    id: 4,
    title: "GEO 101",
    question: "What is the name of the longest river in Africa?",
    answer: "The Nile River",
  },
  {
    id: 5,
    title: "GEO 101",
    question: "What country is this?",
    answer: "Peru",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/3/35/Chile_on_the_globe_%28Chile_centered%29.svg",
  },
  {
    id: 6,
    title: "MATH 101",
    question:
      "A club has 5 members. They need to pick a committee of 3 members to go to a convention. How many such 2-member\ncommittees are possible?",
    answer: "10",
  },
  {
    id: 7,
    title: "MATH 101",
    question: "The expression (a + b)(a - b) can be simplified to?",
    answer: "a^2-b^2",
  },
  {
    id: 8,
    title: "MATH 101",
    question: "What is the longest side of the right-angle triangle called?",
    answer: "Hypotenuse",
  },
  {
    id: 9,
    title: "MATH 101",
    question: "2^10?",
    answer: "1024",
  },
  {
    id: 10,
    title: "MATH 101",
    question: "Solve for m: 4m - 9 − (6m + 13) = 0",
    answer: "2",
  },
  {
    id: 11,
    title: "PE 201",
    question: "Perform 2 x forward roll!",
    answer: "",
  },
  {
    id: 12,
    title: "PE 201",
    question: "Perform the bridge pose and hold for 10 seconds!",
    answer: "",
    imageLink:
      "https://im.indiatimes.in/media/content/2016/Jun/7%20kharmakhare%20com_1466507654.jpg",
  },
  {
    id: 13,
    title: "PE 201",
    question: 'Perform the "airplane" pose and hold for 10 seconds!',
    answer: "",
    imageLink:
      "https://pocketyoga.com/assets/images/full/warrior_iii_airplane_L.png",
  },
  {
    id: 14,
    title: "PE 201",
    question:
      "Choose 1 person to do 10 push-ups, 10 sit-ups, and 10 jumping jacks!",
    answer: "",
  },
  {
    id: 15,
    title: "PE 201",
    question: "Choose 1 person to do plank exercise for 1 minute!",
    answer: "",
  },
  {
    id: 16,
    title: "CHEM 201",
    question: "0 Celcius = ? Kelvin (nearest integer)",
    answer: "273 K",
  },
  {
    id: 17,
    title: "CHEM 201",
    question:
      "When 2 hydrogen atoms and one oxygen atom combine, they form what?",
    answer: "Water",
  },
  {
    id: 18,
    title: "CHEM 201",
    question: "CH3COOH is called ______ acid?",
    answer: "Acetic",
  },
  {
    id: 19,
    title: "CHEM 201",
    question: "What is the chemical symbol for gold?",
    answer: "Au",
  },
  {
    id: 20,
    title: "CHEM 201",
    question: "True or False? Protons are smaller than electrons",
    answer: "FALSE",
  },
  {
    id: 21,
    title: "ENG 201",
    question: 'What does "polygot" mean?',
    answer: "knowing or using several languages",
  },
  {
    id: 22,
    title: "ENG 201",
    question:
      "There are some people who think that only the poor and less educated people use slang, but this idea is _________.\na. accurate\nb. popular\nc. erroneous\nd. widespread",
    answer: "C",
  },
  {
    id: 23,
    title: "ENG 201",
    question: 'What does "ostentatious" mean?',
    answer: "seeking attention",
  },
  {
    id: 24,
    title: "ENG 201",
    question: 'What does "loquacious" mean?',
    answer: "talkative",
  },
  {
    id: 25,
    title: "ENG 201",
    question:
      "The movie offended many of the parents of its younger viewers by including unnecessary ______ in the dialogue.\na. vulgarity\nb. verbosity\nc. vocalizations\nd. garishness",
    answer: "A",
  },
  {
    id: 26,
    title: "HIST 201",
    question: "When was the Declaration of Independence signed?",
    answer: "1776",
  },
  {
    id: 27,
    title: "HIST 201",
    question:
      "The most renowned landmark to see here is the Koepelkerk, a Phanteon style church, locally known as Geraja Bleduk, a copper domed Dutch church dating from 1753. Don’t forget to visit Gedung Batu where stands the old Chinese temple and the recently erected statue of Admiral Cheng Ho. Which Indonesian city is this?",
    answer: "Semarang",
  },
  {
    id: 28,
    title: "HIST 201",
    question: "Who is the husband of Megawati?",
    answer: "Taufiq Kiemas",
  },
  {
    id: 29,
    title: "HIST 201",
    question: "Singkatan dari NKRI",
    answer: "Negara Kesatuan Republik Indonesia",
  },
  {
    id: 30,
    title: "HIST 201",
    question:
      "Pangkat Deddy Corbuzier:\na. Mayjen Tituler\nb. Letjen Tituler\nc. Brigjen Tituler\nd. Letkol Tituler\ne. Kontol Tituler",
    answer: "D",
  },
  {
    id: 31,
    title: "SEX 201",
    question:
      "What's the average number of sex partners for women?\na. 2\nb. 3\nc. 4\nd. 5",
    answer: "C",
  },
  {
    id: 32,
    title: "SEX 201",
    question: "Ukuran penis orang Indonesia idealnya pada waktu ereksi?",
    answer: "10.5-12.9 cm",
  },
  {
    id: 33,
    title: "SEX 201",
    question:
      "Which one of this is a blue film?\na. Indian Curry\nb. Chinese Dumpling\nc. American Pie\nd. Indonesian Indomie",
    answer: "C",
  },
  {
    id: 34,
    title: "SEX 201",
    question: "What percentage of women never orgasm at all?",
    answer: "10% - 15%",
  },
  {
    id: 35,
    title: "SEX 201",
    question: "Sebutkan 3 website porno",
    answer: "",
  },
  {
    id: 36,
    title: "MATH 201",
    question:
      "An equation of the line that contains the origin and the point (1, 2) is:\na. y = 2x \nb. 2y = x \nc. y = x - 1 \nd. y = 2x + 1",
    answer: "A",
  },
  {
    id: 37,
    title: "MATH 201",
    question:
      "2^(5/2) / 2^(3/2) =\na. 2^(1/2) \nb. 2 \nc. 2^(3/2) \nd. 2^(5/3)",
    answer: "B",
  },
  {
    id: 38,
    title: "MATH 201",
    question:
      "You are given a 3-digit number. The second digit of this number is four times bigger than the third digit. The first digit of the number is 3 less than the second digit. What is the number?",
    answer: "141",
  },
  {
    id: 39,
    title: "MATH 201",
    question:
      "Using only the process of addition, how to add eight 8’s to get the final number of 1000?",
    answer: "888+88+8+8+8=1000",
  },
  {
    id: 40,
    title: "MATH 201",
    question: "If 1=3, 2=3, 3=5, 4=4, and 5=4, what is 6=?",
    answer: "3",
  },
  {
    id: 41,
    title: "???",
    question: "Sebutkan tempat lahir setiap orang disini",
    answer: "",
  },
  {
    id: 42,
    title: "???",
    question: "Tahun lulus undergrad setiap orang disini",
    answer: "",
  },
  {
    id: 43,
    title: "???",
    question: "Sebutkan major undergrad setiap orang disini",
    answer: "",
  },
  {
    id: 44,
    title: "???",
    question: "Bikin pantun dengan rima ABAB (2/4 baris gpp)",
    answer: "",
  },
  {
    id: 45,
    title: "???",
    question: "3, 7, 40, 100, ... ?",
    answer: "1000",
  },
  {
    id: 46,
    title: "STAT 201",
    question:
      "On a six-sided die, each side has a number between 1 and 6. What is the probability of throwing a 3 or a 4?",
    answer: "1/3",
  },
  {
    id: 47,
    title: "STAT 201",
    question:
      "Carlin has rolled a six on each of 4 successive tosses. What is the probability of Carlin rolling a six on the next toss?",
    answer: "1/6",
  },
  {
    id: 48,
    title: "STAT 201",
    question:
      "Three coins are tossed up in the air, one at a time. What is the probability that two of them will land heads up and one will land tails up?\na. 1/4\nb. 5/8\nc. 3/8\nd. 1/2",
    answer: "C",
  },
  {
    id: 49,
    title: "STAT 201",
    question:
      "If I throw 2 dices and 2 coins simultaneously, what is the number of possible outcomes I can get?",
    answer: "144",
  },
  {
    id: 50,
    title: "STAT 201",
    question: "Name three probability distributions",
    answer: "Normal, Uniform, Binomial, Poisson, Bernoulli",
  },
  {
    id: 51,
    title: "ECON 201",
    question: "GDP stands for?",
    answer: "Gross Domestic Product",
  },
  {
    id: 52,
    title: "ECON 201",
    question: "Difference between micro and macroeconomics",
    answer:
      "Microeconomics is concerned with how supply and demand interact in individual markets for goods and services. In macroeconomics, the subject is typically a nation—how all markets interact to generate big phenomena that economists call aggregate variables.",
  },
  {
    id: 53,
    title: "ECON 201",
    question: "Top 3 countries with highest economy based on GDP in 2022",
    answer: "1. US, 2. China, 3. Japan",
  },
  {
    id: 54,
    title: "ECON 201",
    question: "Siapa menteri keuangan Indonesia?",
    answer: "Sri Mulyani",
  },
  {
    id: 55,
    title: "ECON 201",
    question: "ASEAN country with highest GDP in 2022",
    answer: "Indonesia",
  },
  {
    id: 56,
    title: "GEO 301",
    question: "The Bund is a landmark in which city?",
    answer: "Shanghai",
  },
  {
    id: 57,
    title: "GEO 301",
    question:
      "La Sagrada Familia is a famous landmark of Spain. In which city is it located?",
    answer: "Barcelona",
  },
  {
    id: 58,
    title: "GEO 301",
    question: "How much of the Earth’s surface is covered by the ocean?",
    answer: "71%",
  },
  {
    id: 59,
    title: "GEO 301",
    question:
      "How many oceans does the Equator run through? Mention each of them.",
    answer: "3 oceans – the Atlantic Ocean, Pacific Ocean, and Indian Ocean",
  },
  {
    id: 60,
    title: "GEO 301",
    question:
      "True or false, the longest mountain range in the world is under the ocean?",
    answer:
      "True. The Mid-Oceanic Ridge stretches all across the ocean floor along tectonic plate boundaries, reaching roughly 65 thousand km in length.",
  },
  {
    id: 61,
    title: "BIO 301",
    question:
      "Fertilization of the ovum by the sperm usually occurs in the: \na) oviduct \nb) vagina \nc) uterus \nd) ovary",
    answer: "A",
  },
  {
    id: 62,
    title: "BIO 301",
    question:
      "In most axons, the myelin sheath is interrupted at intervals of about 1 millimeter or more. These interruptions are called the: \na) glial\nb) nodes of Ranvier\nc) collaterals\nd) nodes of Babinet",
    answer: "B",
  },
  {
    id: 63,
    title: "BIO 301",
    question:
      "In the human brain, body temperature, metabolism, heart rate, sexual development, sleep and the body's use of fat and water are influenced by this region of the brain. This region of the brain is the:",
    answer: "hypothalamus",
  },
  {
    id: 64,
    title: "BIO 301",
    question:
      "What ions determine the resting potential of a nerve? \na) sodium and calcium \nb) calcium and copper \nc) potassium and calcium \nd) sodium and potassium",
    answer: "D",
  },
  {
    id: 65,
    title: "BIO 301",
    question:
      "Once the erythrocytes enter the blood in humans, it is estimated that they have an average lifetime of how many days?",
    answer: "120 days",
  },
  {
    id: 66,
    title: "CS 301",
    question: "What does wifi stand for?",
    answer: "Wireless Fidelity",
  },
  {
    id: 67,
    title: "CS 301",
    question:
      "The process of placing seeds in the soil iscalled as\na. ploughing\nb. sowing\nc. crop production\nd. crop rotation",
    answer: "B",
  },
  {
    id: 68,
    title: "CS 301",
    question:
      "Organism that control insects and pests of plant crops is\na. bio-pesticides\nb. bio-fertilizers\nc. earthworms\nd. neem leaves",
    answer: "A",
  },
  {
    id: 69,
    title: "CS 301",
    question:
      "What result code means that the page the client wanted is available and shown in the content?",
    answer: "200",
  },
  {
    id: 70,
    title: "CS 301",
    question: "Name 10 programming languages in 20 seconds",
    answer: "",
  },
  {
    id: 71,
    title: "GEN 301",
    question: "ERII (Roman numeral 2) stands for?",
    answer: "Elizabeth Regina II",
  },
  {
    id: 72,
    title: "GEN 301",
    question: "Name the Coffee shop in US sitcom Friends",
    answer: "Central Perk",
  },
  {
    id: 73,
    title: "GEN 301",
    question: "Who discovered that the Earth revolves around the Sun?",
    answer: "Nicholas Copernicus",
  },
  {
    id: 74,
    title: "GEN 301",
    question: "Capital City of Finland",
    answer: "Helsinki",
  },
  {
    id: 75,
    title: "GEN 301",
    question: "Which countries are in the Borneo island?",
    answer: "Indonesia, Malaysia, Brunei",
  },
  {
    id: 76,
    title: "ART 401",
    question:
      'Continue the lyric: "Kuterima suratmu, telah kubaca dan aku mengerti. Betapa merindunya dirimu ... ',
    answer: "Akan hadirnya diriku (Pupus Dewa 19)",
  },
  {
    id: 77,
    title: "ART 401",
    question:
      "What's the title of the song and the artist: \"Terus melangkah melupakanmu, lelah hati perhatikan sikapmu, jalan pikiranmu buatku ragu, tak mungkin ini tetap bertahan",
    answer: "Menghapus Jejakmu - NOAH",
  },
  {
    id: 78,
    title: "ART 401",
    question: "Who created this painting?",
    answer: "Salvador Dali",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/The_Persistence_of_Memory.jpg/300px-The_Persistence_of_Memory.jpg",
  },
  {
    id: 79,
    title: "ART 401",
    question: "Who created this painting and where is it now?",
    answer: "Michelangelo, Sistine Chapel",
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/540px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
  },
  {
    id: 80,
    title: "ART 401",
    question: "Who wrote The Old Man and the Sea?",
    answer: "Ernest Hemingway",
  },
];
