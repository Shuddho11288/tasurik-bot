const axios = require("axios");

const sendImage = require("./basicTools/sendImage");

const { Hercai } = require("hercai");

const herc = new Hercai();

const gpt = async (api, event, opening = false) => {
  let prompt = event.body.split("imagine")[1];
  if (prompt == "") {
    api.sendMessage("Please enter a prompt!", event.threadID, event.messageID);
  } else {
    if (!opening) {
      api.sendMessage("Generating image...", event.threadID, event.messageID);
    }

    try {
      prompt = prompt.trim().split(" ").join("+");
      let url = require('../env.json')["imagineApiUrl"] + prompt;

      let result = await axios.get(url);

      let response = result.data.result;

      let randomURL = response[Math.floor(Math.random() * response.length)];
      try {
        let image = await axios({
          method: "GET",
          url: randomURL,
          responseType: "stream",
        });
        api.sendMessage(
          {
            body: "Here:",
            attachment: image.data,
          },
          event.threadID,
          event.messageID,
        );
      } catch (error) {
        console.error("Error sending message with image:", error);
      }
    } catch (error) {
      console.log(error);
      await gpt(api, event, true);
    }
  }
};

const imagineHerc = async (api, event, model = "v2", opening = true) => {
  let prompt = "";

  if (model == "v3") {
    prompt = event.body.split("dalle")[1];
  } else if (model == "lexica") {
    prompt = event.body.split("lexica")[1];
  } else if (model == "prodia") {
    prompt = event.body.split("prodia")[1];
  } else {
    prompt = event.body.split("imagineherc")[1];
  }
  if (opening) {
    api.sendMessage("Generating image", event.threadID, event.messageID);
  }

  let isokay = true;
  let response = null;
  herc
    .drawImage({ model: model, prompt: prompt })
    .then(async (responsel) => {
      let url = responsel.url;
      if (responsel.url) {
        console.log(responsel.url);
        sendImage.sendImage(api, event, url);
      }
    })
    .catch((err) => {
      console.log(err);
      //imagineHerc(api, event, model, false)
    });
};

module.exports = {
  imagine: gpt,
  imagineHerc: imagineHerc,
};
