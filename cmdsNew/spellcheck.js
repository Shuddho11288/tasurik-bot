const config = {
    name: "spellcheck",
    description : "A spellcheck command",
    usage : "spellcheck <text>",
    category : "🔠 Language",
    author : "Tasawar Ahmed Shuddho",
    version : "1.0.0",
    permission : 'all'
}


const url = 'https://api-samir.onrender.com/spellcheck/'
const axios = require('axios')
const run = async (api, event) => {
    let prompt = event.body.split('spellcheck')[1]
    prompt = encodeURIComponent(prompt)
    let fullurl = url + prompt
    console.log(fullurl)
    let response = await axios.get(fullurl)
    console.log(response)
    api.sendMessage(response.data.correctedText.generated_text, event.threadID, event.messageID)
}

module.exports = {
    config,
    run
}