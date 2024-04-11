const config = {
    "name": "imagine",
    "description": "Use imagine to generate image",
    "usage": "-imagine <prompt>",
    "category": "🖼️ AI Image Generator",
    "author": "Tasawar Ahmed Shuddho",
    "version": "1.0.0",
    "permission": "all"
}
const axios = require("axios");





const sendImage = require('../cmds/basicTools/sendImage');
const run = async (api, event, args) => {
    let prompt = args.join(" ");
    console.log(prompt)

    if (!prompt) {
        api.sendMessage("Please enter a prompt!", event.threadID, event.messageID);
        return;
    }
    let loadingmsg = `Generating image with prompt: ${prompt}`
        api.sendMessage(loadingmsg, event.threadID, event.messageID);
      const url = "https://api.imggen.ai/guest-generate-image";
  const data = { prompt };

  const response = await axios.post(url, data);
  console.log(response.data);
  const nurl = 'https://api.imggen.ai/guest-watch-process/' + response.data.uuid;
  console.log(nurl);

  let images = [];

  const checkProcess = async () => {
    try {
      const processResponse = await axios.get(nurl);
        console.log(processResponse.data)
      if (processResponse.data.images?.length !== 4) {
        setTimeout(checkProcess, 1000); // Check every 1 second
      } else {
        images = processResponse.data.images;
        images.forEach((image, index) => {
          images[index] = 'https://api.imggen.ai' + image;
        });
        console.log(images);
        

    let msg = `Your prompt: ${prompt}`;


    //sendImage.sendImageWithMessage(api, event, result.url, msg, ".png");

    sendImage.sendBulkImage(api, event, result, msg, [event.senderID]);
    
      }
    } catch (error) {
      console.log("Error while watching process:", error);
    }
  };

  await checkProcess();
   

};

const handle = async (api, event) => {
    return;
};

module.exports = { run, config, handle };
