const config = {
    "name": "profanity",
    "description": "Check profanity",
    "usage": "-profanity <text>",
    "category": "⚙️ Utils",
    "author": "Tasawar Ahmed Shuddho",
    "version": "1.0.0",
    "permission": "all"
}
const URL = 'https://profanity-checker.vercel.app/profane?t='
const axios = require('axios')
const check_profanity = async (text)=>{

    let url = URL + text
    let data = await axios.get(url)

    return data.data

}

const run = async (api, event, args) => {
    let text = encodeURIComponent(args.join(' '))
    console.log(text)
    let result = await check_profanity(text)
    console.log(result)
    let msg = `Profanity Report:\n`
    Object.entries(result).forEach(([key, value]) => {
        msg += `${key}: ${value}\n`
    })
    api.sendMessage(msg, event.threadID, event.messageID);
};

const handle = async (api, event) => {
    return;
};

module.exports = { run, config, handle, check_profanity };