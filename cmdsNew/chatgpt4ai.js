const config = {
    "name": "chatgpt4ai",
    "description": "Use chatgpt4 new ai from https://chatgpt4login.org/",
    "usage": "-chatgpt4ai",
    "category": "🅰️ AI",
    "author": "Tasawar Ahmed Shuddho",
    "version": "1.0.0",
    "permission": "all",
    "alias": "aigpt4"
}
const axios = require('axios')
const URL_ENDPOINT = 'https://chatgpt4login.org/ajax-dlp.php'
class WPNONCE_BLOCKED_ERROR extends Error {
  constructor(message) {
    super(message)
    this.name = "WPNONCE_BLOCKED_ERROR"
  }
}
const getWpNonce = async ()=>{
    
let data = await axios.get("https://chatgpt4login.org/")

const rawString = data.data
const regex = /_wpnonce=[a-zA-Z0-9]+/
const match = rawString.match(regex)

if (match) {
  const extractedValue = match[0].split('=')
  return extractedValue[1]
} else {
  throw WPNONCE_BLOCKED_ERROR('https://chatgpt4login.org/ is blocked by anti-wp. Axios failed to extract the nonce value.\n\n This simply means the api has blocked the bot! You may report the owner of the bot for this!')
}
}

const reverse_engineered_api = async (prompt) => {
    
    let nonce = await getWpNonce()
    console.log(nonce)
    const formData = new URLSearchParams();
    formData.append('act', 'results');
    formData.append('_wpnonce', 'ff3b450ef0');
    formData.append('_message', prompt);

    let result = await axios.post(URL_ENDPOINT, formData.toString())
    console.log(result.data)
    return result.data

    
}
const run = async (api, event, args) => {
    let prompt = args.join(" ")

    reverse_engineered_api(prompt).then(
        result => {
            api.sendMessage(result.data, event.threadID, event.messageID)
        }
    )


}

const handle = async (api, event) => {
    return
}

module.exports = { run, config, handle }