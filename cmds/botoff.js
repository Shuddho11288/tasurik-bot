const checkAdmin = require('./basicTools/checkAdmin')

const botoff = async (api, event)=>{
    if (checkAdmin.isAdmin(event.senderID)){
      process.exit()
       await api.sendMessage('Bot is turning off', event.threadID, event.messageID).then(()=>{process.exit()})

        
    }
    else{
        api.sendMessage('Sorry! The command can only be invoked by the bot admin!', event.threadID)
    }
    
}

module.exports = {
    botoff
}