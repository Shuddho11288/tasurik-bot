const config = {
    "name": "bardfree",
    "description": "Use Google bard API! The Latest Gemini Web AI!",
    "usage": "-bardfree <prompt>",
    "category": "🅰️ AI",
    "author": "Tasawar Ahmed Shuddho",
    "version": "1.0.0",
    "permission": "all",
    "alias": "geminibard|aibard|aigemini|bardAI|bardai"
}
const axios = require('axios')

const ENDPOINT = 'https://blackearthauction.com/Bard/api?req=';


const run = async (api, event, args) => {
    if (!args[0]) {
        api.sendMessage("Please enter a prompt!", event.threadID, event.messageID);
        return;
    }
    api.sendMessage("Please wait while we generate your response from Google's latest gemini web ai! ⏰...", event.threadID, event.messageID);
    let ques = args.join(" ");
    let result = await axios.get(ENDPOINT + encodeURIComponent(ques+' Reply in English. Tone of reply should be  Professional'))
    console.log(result)
    if (!result) {api.sendMessage('Something went wrong :(', event.threadID, event.messageID);return}
    result = result.data.response
    api.sendMessage(result, event.threadID, event.messageID);
};

const handle = async (api, event) => {
    return;
};

module.exports = { run, config, handle };