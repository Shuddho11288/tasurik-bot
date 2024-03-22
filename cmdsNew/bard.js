const config = {
    "name": "bard",
    "description": "Use Google bard API! The Latest Gemini Web AI!",
    "usage": "-bard <prompt>",
    "category": "🅰️ AI",
    "author": "Tasawar Ahmed Shuddho",
    "version": "1.0.0",
    "permission": "all",
    "alias": "geminiweb|gemweb|gemiweb"
}
const { RsnChat } = require("rsnchat");

// const rsnchat = new RsnChat( process.env["rsnapikey"]);



const run = async (api, event, args) => {
    if (!args[0]) {
        api.sendMessage("Please enter a prompt!", event.threadID, event.messageID);
        return;
    }
    api.sendMessage("Please wait while we generate your response from Google's latest gemini web ai! ⏰...", event.threadID, event.messageID);
    let ques = args.join(" ");
    let result = await rsnchat.bard(ques)
    console.log(result)
    if (!result.success) {api.sendMessage('Something went wrong :(', event.threadID, event.messageID);return}
    result = result.message
    api.sendMessage(result, event.threadID, event.messageID);
};

const handle = async (api, event) => {
    return;
};

module.exports = { run, config, handle };