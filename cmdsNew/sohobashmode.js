const config = {
    "name": "sohobashmode",
    "description": "Enter Sohobash Mode For unexpected fun and annoyance 💦💦",
    "usage": "-sohobashmode",
    "category": "🎉 Fun",
    "author": "Tasawar Ahmed Shuddho",
    "version": "1.0.0",
    "permission": "groupadmin",
    "alias": "sohobashimode|sohobashita"
}
const sendImage = require('../cmds/basicTools/sendImage');
const database = require('../cmds/database')
const run = async (api, event, args) => {
    if (database.getDatabase('SohobashMode')[event.threadID] == true) {
        let db = database.getDatabase('SohobashMode')
        db[event.threadID] = false
        database.setDatabase('SohobashMode', db)
        api.sendMessage('Sohobash Mode Disabled', event.threadID, event.messageID);
    } else {
        let db = database.getDatabase('SohobashMode')
        db[event.threadID] = true
        database.setDatabase('SohobashMode', db)
        api.sendMessage('Sohobash Mode Enabled', event.threadID, event.messageID);
    }
};
const sohobashita = {
    'thopper':{msg:'',image: 'https://i.postimg.cc/rszSB4vt/image.png'},
    'topper':{msg:'',image: 'https://i.postimg.cc/rszSB4vt/image.png'},
    'ma': {msg: '', image: 'https://i.postimg.cc/RFvFJzdS/image.png'},
    'abal': {msg: '', image: 'https://i.postimg.cc/RFvFJzdS/image.png'},
    'dhur': {msg: '', image: 'https://i.postimg.cc/RFvFJzdS/image.png'},
    'dhur mia': {msg: '', image: 'https://i.postimg.cc/RFvFJzdS/image.png'},
    'mia': {msg: '', image: 'https://i.postimg.cc/RFvFJzdS/image.png'},
    'dur': {msg: '', image: 'https://i.postimg.cc/RFvFJzdS/image.png'},
    'gay': {msg: 'gayyyy', image: 'https://i.postimg.cc/0N10Y8NP/image.png'},
    'sohobash': {msg: 'ahahaha', image: 'https://i.postimg.cc/0N10Y8NP/image.png'},
    'somokami': {msg: 'ahhh', image: 'https://i.postimg.cc/0N10Y8NP/image.png'},
    'lesbian': {msg: 'tor ma', image: 'https://i.postimg.cc/0N10Y8NP/image.png'},
    'ask' : {msg: 'tor ma jigaisilo'}
    
    
}
const handle = async (api, event) => {
    if (database.getDatabase('SohobashMode')[event.threadID] == true) {
        // check if any key of sohobashita object is available in event.body as a word as event.body is a sentence
        // Object.keys(sohobashita).forEach(key => {
        //     if (event.body.toLowerCase().includes(key)) {
        //         sendImage.sendImageWithMessage(api, event,  sohobashita[key].msg, sohobashita[key].image,".png")
        //     }
        // })

        for (key in sohobashita){
            if (event.body.toLowerCase().includes(key)) {
                if (sohobashita[key].image){
                sendImage.sendImageWithMessage(api, event,  sohobashita[key].msg, sohobashita[key].image,".png")
                break
                }
                else{
                    api.sendMessage(sohobashita[key].msg, event.threadID, event.messageID)
                    break
                }
            }
        }
        
        
    }
};

module.exports = { run, config, handle };
