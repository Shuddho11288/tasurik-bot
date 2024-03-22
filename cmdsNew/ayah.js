const config = {
  name: "ayah",
  description:
    "Get and Ayah from the holy Quran! If no parameters passed then it gives random ayah.",
  usage: "-ayah [ayah's number]",
  category: "🕋 Islam",
  author: "Tasawar Ahmed Shuddho, Md. Sifayet Rahman and Md. Wasi Hossain",
  version: "0.5.0",
  permission: "all",
};

const HIGHEST_NUMBER = 6236;

const axios = require("axios");

const boldify = require("./boldify").boldify;
function formatQuranVerse(verseData) {
  const { text, surah, number } = verseData;

  const formattedVerse = `
        ${boldify("Surah:")} ${surah.englishName} (${
    surah.englishNameTranslation
  }) - ${boldify("Ayah:")} ${number}\n\n
        ${text}
    `;

  return formattedVerse;
}

const run = async (api, event) => {
  let ayah = event.body.split("ayah")[1];

  if (!ayah) {
    ayah = Math.floor(Math.random() * HIGHEST_NUMBER) + 1;
  } else {
    ayah = parseInt(ayah);
  }

  let res = await axios.get(
    `https://api.alquran.cloud/v1/ayah/${ayah}/en.asad`
  );

  let jsondata = res.data.data;

  delete jsondata["edition"];

  api.sendMessage(formatQuranVerse(jsondata), event.threadID, event.messageID);
};

const handle = async (api, event) => {
  return;
};

module.exports = { run, config, handle };
