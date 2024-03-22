const config = {
    "name": "botrestart",
    "description": "Restart Bot",
    "usage": "-botrestart",
    "category": "🤖 Bot Admin Only",
    "author": "Tasawar Ahmed Shuddho",
    "version": "1.0.0",
    "permission": "admin"
}

const run = async (api, event, args) => {
    let result = "Bot is restarting! 🤖 Love you";
    api.sendMessage(result, event.threadID, ()=>{
        process.exit()
    },event.messageID);
};

const handle = async (api, event) => {
    return;
};

module.exports = { run, config, handle };