const database = require('./database')

const checkNSFW = (api, event)=>{

  let dbase = database.getDatabase('nsfw')

  if (dbase[event.threadID] == true){
    return true
  }
  else{
    return false
  }
}

const NSFW = (api, event)=>{
  let dbase = database.getDatabase('nsfw')
  if (checkNSFW(api, event) == true){
  dbase[event.threadID] = false
    database.setDatabase('nsfw', dbase)
    api.sendMessage(
      'Turned off NSFW mode',
      event.threadID)
  }
  else{
    dbase[event.threadID] = true
    database.setDatabase('nsfw', dbase)
    api.sendMessage(
      'Turned on NSFW mode',
      event.threadID)
  }
}

module.exports = {NSFW:NSFW,checkNSFW:checkNSFW}