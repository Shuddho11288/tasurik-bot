const config = {
    "name": "imagine",
    "description": "Use imagine to generate image",
    "usage": "-imagine <prompt>",
    "category": "🖼️ AI Image Generator",
    "author": "Tasawar Ahmed Shuddho",
    "version": "1.0.0",
    "permission": "all"
};

const axios = require("axios");
const sendImage = require('../cmds/basicTools/sendImage');

const imagine = async (prompt) => {
  const url = "https://api.imggen.ai/guest-generate-image";
  const data = { prompt };

  const response = await axios.post(url, data);
  console.log(response.data);
  const nurl = 'https://api.imggen.ai/guest-watch-process/' + response.data.uuid;
  console.log(nurl);

  let images = [];

  const checkProcess = async () => {
    const processResponse = await axios.get(nurl);
    if (!processResponse.data.images) {
      // Images data not available yet, wait and retry
      setTimeout(checkProcess, 1000); // Check every 1 second
    } else if (processResponse.data.images.length !== 4) {
      // Images data incomplete, wait and retry
      setTimeout(checkProcess, 1000); // Check every 1 second
    } else {
      // Images data complete, return images
      images = processResponse.data.images.map(image => 'https://api.imggen.ai' + image);
      console.log(images);
      return images;
    }
  };

  await checkProcess();
};

const run = async (api, event, args) => {
    let prompt = args.join(" ");
    console.log(prompt)

    if (!prompt) {
        api.sendMessage("Please enter a prompt!", event.threadID, event.messageID);
        return;
    }
    let loadingmsg = `Generating image with prompt: ${prompt}\n`;
    api.sendMessage(loadingmsg, event.threadID, event.messageID);

    let result = await imagine(prompt);
    console.log(result);

    let msg = `Your prompt: ${prompt}`;
    sendImage.sendBulkImage(api, event, result, msg);
};

const handle = async (api, event) => {
    return;
};

module.exports = { run, config, handle };
