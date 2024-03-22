const config = {
    "name": "getMessage",
    "description": "get message through your temp mail",
    "usage": "-getmessage <page> <mail> <pass>",
    "category": "📩 Email",
    "author": "Tasawar Ahmed Shuddho",
    "version": "1.0.0",
    "permission": "all",
    "alias": "gm|getmessage|getmail"
}
const axios = require('axios')
const boldify = require('./boldify').boldify
const database = require('../cmds/database')
function formatMessage(data) {
    let message = 'Here is your message:\n\n';
    console.log(data.data)
    // Format data
    data.data['hydra:member'].forEach(item => {
        message += `${boldify('ID')}: ${item.id}\n`;
        message += `${boldify('Message ID')}: ${item.msgid}\n`;
        message += `${boldify('From')}: ${item.from.name} <${item.from.address}>\n`;
        message += `${boldify('To')}: ${item.to[0].address}\n`;
        message += `${boldify('Subject')}: ${item.subject}\n`;
        message += `${boldify('Intro')}: ${item.intro}\n`;
        message += `${boldify('Has Attachments')}: ${item.hasAttachments}\n`;
        message += `${boldify('Size')}: ${item.size}\n`;
        message += `${boldify('Created At')}: ${item.createdAt}\n`;
        message += `${boldify('Updated At')}: ${item.updatedAt}\n`;
    });

    return message;
}

const newformat = (data)=>{
    let msg = ''
    msg += `${boldify('FROM: ')} ${data.from.name} <${data.from.address}>\n`;
    msg += `${boldify('TO: ')} ${data.to[0].address}\n`;
    msg += `${boldify('SUBJECT: ')} ${data.subject}\n`;
    msg += `${boldify('TEXT: ')} ${data.text}\n`;
    msg += `${boldify('HAS ATTACHMENTS: ')} ${data.hasAttachments}\n`;
    msg += `${boldify('SIZE: ')} ${data.size}\n`;
    msg += `${boldify('CREATED AT: ')} ${data.createdAt}\n`;
    msg += `${boldify('UPDATED AT: ')} ${data.updatedAt}\n`;
    return msg
}

const getToken = async (id, pass)=>{

    let data = await axios.post('https://api.mail.tm/token', {
        address: id,
        password: pass
    })
    console.log(data.data)
    return data

}

const getMessage = async (token, id) => {
    let msg = await axios.get('https://api.mail.tm/messages/'+id, options={
        headers: {
            'Authorization': `Bearer ${token.data.token}`
        }
    })   

    return msg.data
}

const run = async (api, event, args) => {

    let mail = args[1] || database.getDatabase('tempmail')[event.senderID].address
    let pass = args[2] || database.getDatabase('tempmail')[event.senderID].pass
    let page = args[0] || '1'
    let token = await getToken(mail, pass)
    
    let msg = await axios.get('https://api.mail.tm/messages?page='+'1', options={
        headers: {
            'Authorization': `Bearer ${token.data.token}`
        }
    })    
    console.log(msg.data)
    if (!msg.data['hydra:member'][page-1]){
        api.sendMessage('No Message found for serial '+page, event.threadID, event.messageID);
        return;
    }
    let rdata = await getMessage(token, msg.data['hydra:member'][page-1].id)

    console.log(rdata)
    api.sendMessage(newformat(rdata), event.threadID, event.messageID);
};

const handle = async (api, event) => {
    return;
};

module.exports = { run, config, handle };