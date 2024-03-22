const config = {
    "name": "hercv3",
    "description": "Use hercv3 model to generate image",
    "usage": "-hercv3 <prompt>",
    "category": "🖼️ AI Image Generator",
    "author": "Tasawar Ahmed Shuddho",
    "version": "1.0.0",
    "permission": "all"
}

const { Hercai } = require('hercai');
const sendImage = require('../cmds/basicTools/sendImage');
const herc = new Hercai();

const generateImage = async (prompt, model) => {
    console.log(prompt);

    let result = await herc.drawImage({
        model: model,
        prompt: prompt
    });

    return result;
};
const run = async (api, event, args) => {
    let prompt = args.join(" ");
    console.log(prompt)

    if (!prompt) {
        api.sendMessage("Please enter a prompt!", event.threadID, event.messageID);
        return;
    }
    let loadingmsg = `Generating image with prompt: ${prompt}\n`

    api.sendMessage(loadingmsg, event.threadID, event.messageID);
    let result =await generateImage(prompt, 'v3')

    console.log(result)

    let msg = `Your prompt: ${prompt}\nYour Model: v3\nYour Image: (see below)`;


    //sendImage.sendImageWithMessage(api, event, result.url, msg, ".png");

    sendImage.sendImage(api, event, result.url, ".png", msg);
    
};

const handle = async (api, event) => {
    return;
};

module.exports = { run, config, handle, generateImage };