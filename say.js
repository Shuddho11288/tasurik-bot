const axios = require("axios");
const Gtts = require("gtts");
const fs = require("fs");

const tts = require("google-tts-api");

const say = async (api, event) => {
  let body = event.body.split("say")[1].trim();
  let lang = "en";
  if (body.includes("-l bn")) {
    body = encodeURIComponent(body.replace("-l bn", ""));

    let url =
      "https://translate.google.com/translate_tts?ie=UTF-8&tl=bn&q=TEXT&client=tw-ob".replace(
        "TEXT",
        body,
      );
    api.sendMessage(url, event.threadID, event.messageID);
    let path = __dirname + "/cache/say.mp3";
    let get = await axios.get(url, { responseType: "arraybuffer" })
    fs.writeFileSync(path, Buffer.from(get.data, "utf-8"));
    api.sendMessage({
      attachment: fs.createReadStream(path)
    }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    return;
  }
  console.log(body);
  if (body == "") {
    api.sendMessage(
      "Please enter the message you want to send",
      event.threadID,
      event.messageID,
    );
  } else {
    const gtts = new Gtts(body, lang);
    let path = "cache/e.mp3";
    gtts.save(path, async function (err, result) {
      console.log(err);
      let stream = fs.createReadStream(path);
      await api
        .sendMessage({ attachment: stream }, event.threadID, event.messageID)
        .then((...val) => {
          fs.unlinkSync(path);
        })
        .catch((err) => {});
    });
  }
};

// const say = async (api, event)=>{

//     let body = event.body.split('say')[1].trim()
//     console.log(body)
//     if(body == '') {
//       api.sendMessage('Please enter the message you want to send', event.threadID, event.messageID)
//     }
//     else{

//   const text = 'Hello, this is a test.';
//   const language = 'en';
//   const speed = 1; // Adjust the speed as desired (1 is the default)

//   const readableStream = tts.tts(body, language, speed);
//       await api.sendMessage({body:'Here', attachment: readableStream}, event.threadID, event.messageID)
//     }
// }

module.exports = {
  say,
};
