const database = require('./database')
const checkAdmin = require('../basicTools/checkAdmin')

const blacklist = (api, event)=>{
  const target = Object.keys(event.mentions)[0]
  if (checkAdmin.isAdmin(target)){
    api.sendMessage('You can\'t blacklist an admin!', event.threadID, event.messageID)
    return
  }
  let dbase = database.getDatabase('blacklisted')
  dbase[target] = true
  database.setDatabase('blacklisted', dbase)
  api.sendMessage(`[ Success ] Successfully blacklisted ${target}`, event.threadID, event.messageID)
}

const unblacklist = (api, event)=>{
  const target = Object.keys(event.mentions)[0]
  let dbase = database.getDatabase('blacklisted')
  delete dbase[target]
  database.setDatabase('blacklisted', dbase)
  api.sendMessage(`[ Success ] Successfully unblacklisted ${target}`, event.threadID, event.messageID)
}

module.exports = {
  blacklist:blacklist,
  unblacklist:unblacklist
}