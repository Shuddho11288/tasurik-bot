const config = {
    "name": "shortenURL",
    "description": "Shorten your url using cleanURL",
    "usage": "-shortenURL <url>",
    "category": "⚙️ Utils",
    "author": "Tasawar Ahmed Shuddho",
    "version": "1.0.0",
    "permission": "all",
    "alias": "shorten|surl|short|shor|shorl"
}
const axios = require('axios');

async function shortenUrl(url) {
    const response = await axios.post('https://cleanuri.com/api/v1/shorten', { url });
    return response.data.result_url;
}

const run = async (api, event, args) => {
    let url = args.join(" ");
    console.log(url)
    if (!url) {
        api.sendMessage("Please enter a url!", event.threadID, event.messageID);
        return;
    }
    let result = await shortenUrl(url)
    let msg = `Your Url: ${url}\nYour Shortened Url: ${result}`
    api.sendMessage(msg, event.threadID, event.messageID);
};

const handle = async (api, event) => {
    return;
};

module.exports = { run, config, handle };