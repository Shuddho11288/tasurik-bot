const config = {
    "name": "gethistorygpt3",
    "description": "Get your chatgpt3 with memory's history!",
    "usage": "-gethistorygpt3",
    "category": "🅰️ AI",
    "author": "Tasawar Ahmed Shuddho",
    "version": "1.0.0",
    "permission": "all",
    "alias": "getmem"
}
const database = require('../cmds/database');
const run = async (api, event, args) => {
    let msg = 'Here is your chat history! (For Database Limitation, only the past 10 chats are saved!)'
    let db = database.getDatabase('gpt3mem')[event.senderID] || []
    db = db.slice(-10)
    let result = db.join('\n\n')
    result = msg + '\n\n' + result
    api.sendMessage(result, event.threadID, event.messageID);
};

const handle = async (api, event) => {
    return;
};

module.exports = { run, config, handle };