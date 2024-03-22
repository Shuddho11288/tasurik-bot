const axios = require('axios');

// Define the request payload
const payload = {
  "botId": "default",
  "customId": null,
  "session": "N/A",
  "chatId": "xehqfzweqec",
  "contextId": 1781,
  "messages": [{
      "id": "ruw7gbv1zo9",
      "role": "assistant",
      "content": "How can I help you today?",
      "who": "AI: ",
      "timestamp": 1709638992489
    },
    {
      "id": "pziocfrq87h",
      "role": "user",
      "content": "hi",
      "who": "User: ",
      "timestamp": 1709639002966
    },
    {
      "id": "e8fdkfm6h9r",
      "role": "assistant",
      "content": "Hello! How can I assist you today?",
      "who": "AI: ",
      "timestamp": 1709639004943,
      "isQuerying": false
    },
    {
      "id": "22kfncplnqm",
      "role": "user",
      "content": "yo",
      "who": "User: ",
      "timestamp": 1709639056732
    },
    {
      "id": "06x65eydstgw",
      "role": "assistant",
      "content": "Hey there! How can I help you today?",
      "who": "AI: ",
      "timestamp": 1709639058382,
      "isQuerying": false
    }
  ],
  "newMessage": "how to make a loop in rust?",
  "newFileId": null,
  "stream": true
};

// Define the headers
const headers = {
  'Accept': 'text/event-stream',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'en-GB,en;q=0.9,en-US;q=0.8',
  'Content-Type': 'application/json',
  'Cookie': 'ezux_ifep_529392=true; ezux_et_529392=103; ezux_tos_529392=192',
  'Dnt': '1',
  'Origin': 'https://gpt4free.io',
  'Referer': 'https://gpt4free.io/chat/',
  'Sec-Ch-Ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
  'Sec-Ch-Ua-Mobile': '?0',
  'Sec-Ch-Ua-Platform': '"Windows"',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'same-origin',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
  'X-Wp-Nonce': 'ac11c89afc'
};

// Make the POST request
axios.post('https://gpt4free.io/wp-json/mwai-ui/v1/chats/submit', payload, { headers })
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
