const config = {
    "name": "mistral",
    "description": "Use mistral AI",
    "usage": "-mistral <prompt>",
    "category": "🅰️ AI",
    "author": "Tasawar Ahmed Shuddho",
    "version": "1.0.0",
    "permission": "all",
    "alias": "misai"
}
const axios = require('axios');

async function sendRequest(prompt) {
  try {
    const payload = {
      prompt: `<s>[INST]${prompt} [/INST]\n`,
      model: "mistralai/mixtral-8x7b-instruct-v0.1",
      temperature: 0.75,
      topP: 0.9,
      maxTokens: 800
    };

    const response = await axios.post('https://mixtral.replicate.dev/api', payload);
    return response.data;
  } catch (error) {
    console.error('Error sending request:', error);
    throw error;
  }
}

// Example usage:


const run = async (api, event, args) => {
    api.sendMessage("Getting response from mistral ai model! ⏳...", event.threadID, event.messageID);
    let prompt = args.join(" ");   

    let result = await sendRequest(prompt);

    console.log(result)

    api.sendMessage(result, event.threadID, event.messageID);
};

const handle = async (api, event) => {
    return;
};

module.exports = { run, config, handle };