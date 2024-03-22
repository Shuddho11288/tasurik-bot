const config = {
    "name": "gpt3withmemory",
    "description": "Use Chat GPT 3 with memory",
    "usage": "-gpt3withmemory <prompt>",
    "category": "🅰️ AI",
    "author": "Tasawar Ahmed Shuddho",
    "version": "1.0.0",
    "permission": "all",
    "alias": "gpt3mem|cg3mem|cgmem|memgpt"
}
const axios = require('axios');
const getNonce = async () => {
    const response = await axios.get('https://chatgptdemo.ai/');
    const rawdata = response.data;
    const regex = /"search_nonce":"([a-f0-9]+)"/;
    const match = rawdata.match(regex);
    
    if (match) {
        const searchNonce = match[1];
        console.log("search_nonce:", searchNonce);
        return searchNonce;
    } else {
        console.log("search_nonce not found in the raw data.");
    }
}

const getResponse = async (prompt, db)=>{

// Create URLSearchParams object and append the required fields
console.log(db)
    const params = new URLSearchParams();
    params.append('_wpnonce', await getNonce());
    params.append('post_id', '3008');
    params.append('url', 'https://chatgptdemo.ai');
    params.append('action', 'wpaicg_chat_shortcode_message');
    params.append('message', prompt);
    params.append('bot_id', '0');
    params.append('chatbot_identity', 'shortcode');
    params.append('wpaicg_chat_client_id', 'EuMPhdvxFf');
    params.append('wpaicg_chat_history', db);

    // Make POST request using axios
    const response = await axios.post('https://chatgptdemo.ai/wp-admin/admin-ajax.php', params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    return response.data.data;
}

const database = require('../cmds/database');
const run = async (api, event, args) => {
    api.sendMessage('Generating response from ChatGPT3 with memory ⏳', event.threadID, event.messageID);
    let prompt = args.join(" ");
    let db = database.getDatabase('gpt3mem')[event.senderID] || []

    db = db.slice(-10)

    console.log(db)
    


    getResponse(prompt, JSON.stringify(db)).then(
        result => {
            db.push(`Human: ${prompt}`)
            db.push(`AI: ${result}`)
            console.log(db)
            let newdb = database.getDatabase('gpt3mem')
            newdb[event.senderID] = db
            database.setDatabase('gpt3mem', newdb)
            
            api.sendMessage(result, event.threadID, event.messageID);
        }
    )
    
};

const handle = async (api, event) => {
    return;
};

module.exports = { run, config, handle };