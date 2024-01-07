const database = require('./database')
const admin = ['100088054962292']
const repans = async (api, event)=>{
  permissions = database.getDatabase('permissionsForTeach')
  {
    if (event.senderID == admin[0] || permissions[event.senderID] == true) {
      if (event.body.includes('|')){
        await api.sendMessage('Please Wait...', event.threadID)
        let dbase = database.getDatabase('repans')
        let msg = event.body.split('repans')[1]
        msg = msg.split('|')
        let ans = msg[0].trim()
        let rep = msg[1].trim()
        dbase[ans] = rep
        database.setDatabase('repans', dbase)
        api.sendMessage(`Successfully repansed for ${ans} to ${rep}`, event.threadID, event.messageID)

      }
      else{
        api.sendMessage('Invalid Syntax! Use -help repans for more info!')
      }
    }
    else{
      api.sendMessage('You are not authorized to use this command!', event.threadID, event.messageID)
    }

}}

module.exports = {
  repans: repans
}