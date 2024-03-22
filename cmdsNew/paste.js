const config = {
    "name": "paste",
    "description": "Upload text to pastebin.",
    "usage": "-paste <text>",
    "category": "⚙️ Utils",
    "author": "Tasawar Ahmed Shuddho",
    "version": "1.0.0",
    "permission": "all"
}

const axios = require('axios');

function postToPastebin(api_dev_key, api_paste_code, api_option = 'paste') {
    const url = 'https://pastebin.com/api/api_post.php';
    const data = {
        api_dev_key,
        api_paste_code,
        api_option
    };

    return axios.post(url, data)
        .then(response => response.data)
}

// Example usage:



const run = async (api, event, args) => {
    let text = args.join(' ');
    console.log(text)
    let result = await postToPastebin('8JSRC6U7OV225yj62MCOzl2axSN38YZH', text);
    console.log(result)
    api.sendMessage(JSON.stringify(result), event.threadID, event.messageID);
};

const handle = async (api, event) => {
    return;
};

module.exports = { run, config, handle };