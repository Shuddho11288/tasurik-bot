const config = {
    "name": "herc",
    "description": "Generate message using AI, namely herc",
    "usage": "-herc <prompt>",
    "category": "🅰 AI",
    "author": "Tasawar Ahmed Shuddho",
    "version": "1.0.0",
    "permission": "all"
}

const { Hercai } = require('hercai');
const herc = new Hercai();
const generateChat = async (prompt, model) => {
    
    let result = await herc.question({
        content: prompt,
        model: model,
    });
    return result;
}
const run = async (api, event, args) => {
    let model = args[0]
    let prompt = args.join(" ").replace(model, "");
    console.log(prompt)
    if (!prompt) {
        api.sendMessage("Please enter a prompt!", event.threadID, event.messageID);
        return;
    }
    let result = await generateChat(prompt, model)

    console.log(result)
    api.sendMessage(result.reply, event.threadID, event.messageID);
};

const handle = async (api, event) => {
    return;
};

module.exports = { run, config, handle };