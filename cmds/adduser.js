const adduser = (api, event)=>{
  let id = event.body.split('adduser')[1].trim()
  api.addUserToGroup(id, event.threadID).catch((err)=>{
    api.sendMessage(JSON.stringify(err), event.threadID)
  
  })
}

module.exports = {
  adduser
}