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

const sendImage = require("../cmds/basicTools/sendImage")
const run = async (api, event, args) => {
    const prompt = args.join(" ");

    if (!prompt) {
        api.sendMessage("Please enter a prompt!", event.threadID, event.messageID);
        return;
    }

    api.sendMessage(`Generating image with prompt: ${prompt}`, event.threadID, event.messageID);

    try {
        const url = "https://api.imggen.ai/guest-generate-image";
        const data = { prompt };
        const response = await axios.post(url, data);
        console.log(response.data);
        const nurl = 'https://api.imggen.ai/guest-watch-process/' + response.data.uuid;

        let images = [];

        const checkProcess = async () => {
            try {
                const processResponse = await axios.get(nurl);
                if (processResponse.data.images.length != 4) {
                    setTimeout(checkProcess, 1000); // Check every 1 second
                } else {
                    images = processResponse.data.images.map(image => 'https://api.imggen.ai' + image);
                    console.log(images);
                    let msg = `Your prompt: ${prompt}`;
                    // Assuming sendBulkImage can handle sending multiple images
                    sendImage.sendBulkImage(api, event, images, msg);
                }
            } catch (error) {
                console.error("Error while watching process:", error);
                api.sendMessage("An error occurred while generating the image. Please try again later.", event.threadID, event.messageID);
            }
        };

        await checkProcess();
    } catch (error) {
        console.error("Error occurred while generating or sending image:", error);
        api.sendMessage("An error occurred while generating the image. Please try again later.", event.threadID, event.messageID);
    }
};


const handle = async (api, event) => {
  return;
};

module.exports = { run, config, handle };
