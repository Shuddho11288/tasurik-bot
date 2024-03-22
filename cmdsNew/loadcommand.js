const config = {
    "name": "loadcommand",
    "description": "Load new command to bot!",
    "usage": "-loadcommand <filename(don't add extension)> <main code>",
    "category": "🤖 Bot Admin Only",
    "author": "Tasawar Ahmed Shuddho",
    "version": "1.0.0",
    "permission": "admin"
}
const fs = require('fs');
const run = async (api, event, args) => {
    let filename = args[0];
    let code = args.slice(1).join(" ");
    let result = " ✅ Command Loaded! Enjoy! 👍!\n Use -help "+filename+" to know its usage!";
    fs.writeFileSync('./cmdsNew/' + filename + '.js', code);
    api.sendMessage(result, event.threadID, event.messageID);
};

const handle = async (api, event) => {
    return;
};

module.exports = { run, config, handle };