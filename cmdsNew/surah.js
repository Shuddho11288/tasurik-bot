const config = {
  name: "surah",
  description: "Get Surah from the holy Quran.",
  usage: "-surah <surah-number>",
  category: "🕋 Islam",
  author: "Tasawar Ahmed Shuddho, Md. Sifayet Rahman and Md. Wasi Hossain",
  version: "0.5.0",
  permission: "all",
};

const axios = require("axios");
const HIGHEST_NUMBER = 114;

const boldify = require("./boldify").boldify;
function formatQuranChapter(verseData) {
  const { ayahs, englishName, englishNameTranslation, number } = verseData;

  let formattedVerse = `
        ${boldify(
          "Surah:"
        )} ${englishName} (${englishNameTranslation}) - ${boldify(
    "Chapter: "
  )} ${number}\n
    `;

  for (let i = 0; i < ayahs.length; i++) {
    formattedVerse += `
${boldify("Ayah:")} ${ayahs[i].numberInSurah}\n
${boldify("Text:")} ${ayahs[i].text}\n
        `;

    if (ayahs[i].sajda) {
      formattedVerse += boldify("Sajda: ") + ayahs[i].sajda;
    }
  }

  return formattedVerse;
}

const run = async (api, event) => {
  let surah_number = event.body.split("surah")[1];

  if (!surah_number) {
    surah_number = Math.floor(Math.random() * HIGHEST_NUMBER) + 1;
  } else {
    surah_number = parseInt(surah_number);
  }

  let jsondata = await axios.get(
    `https://api.alquran.cloud/v1/surah/${surah_number}/en.asad`
  );

  jsondata = jsondata.data.data;

  let result = formatQuranChapter(jsondata);

  if (result.length > 14096) {
    require("fs").writeFileSync(
      require("path").resolve(__dirname, `./${jsondata.englishName + ".txt"}`),
      result,
      "utf8"
    );

    let stream = require("fs").createReadStream(
      require("path").resolve(__dirname, `./${jsondata.englishName + ".txt"}`)
    );



    api.sendMessage({ attachment: stream }, event.threadID, ()=>{

        // delete the file

        require("fs").unlinkSync(
          require("path").resolve(__dirname, `./${jsondata.englishName + ".txt"}`)
        )
    }, event.messageID);


  }

  api.sendMessage(result, event.threadID, event.messageID);
};

const handle = async (api, event) => {
  return;
};

module.exports = { run, config, handle };
