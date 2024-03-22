const config = {
    "name": "hercv1",
    "description": "Use hercv1 to generate image",
    "usage": "-hercv1 <prompt>",
    "category": "🖼️ AI Image Generator",
    "author": "Tasawar Ahmed Shuddho",
    "version": "1.0.0",
    "permission": "all"
}
const {generateImage} = require('./hercv3')
const sendImage = require('../cmds/basicTools/sendImage');
const run = async (api, event, args) => {
    let prompt = args.join(" ");
    console.log(prompt)

    if (!prompt) {
        api.sendMessage("Please enter a prompt!", event.threadID, event.messageID);
        return;
    }
    let loadingmsg = `Generating image with prompt: ${prompt}\n`

    api.sendMessage(loadingmsg, event.threadID, event.messageID);
    let result =await generateImage(prompt, 'v1')

    console.log(result)

    let msg = `Your prompt: ${prompt}\nYour Model: v1\nYour Image: (see below)`;


    //sendImage.sendImageWithMessage(api, event, result.url, msg, ".png");

    sendImage.sendImage(api, event, result.url, ".png", msg);
    
};

const handle = async (api, event) => {
    return;
};

module.exports = { run, config, handle };