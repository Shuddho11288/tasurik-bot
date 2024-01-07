
const checkAdmin = require('../basicTools/checkAdmin')
const isGrpAdmin = async (api, event, uid)=>{
  let adminIDs = []

  let threadinfo = await api.getThreadInfo(event.threadID)
  threadinfo = threadinfo.adminIDs
  console.log(threadinfo)
  threadinfo.forEach(e => adminIDs.push(e.id))
  console.log(adminIDs)
  console.log(event.senderID)
  console.log(adminIDs.includes(uid))
  return adminIDs.includes(uid)
}
  
const kick = async (api,event)=>{
  const senderID = event.senderID
  const mention = Object.keys(event.mentions)[0]
  const admin = await checkAdmin.isGrpAdmin(api,event)
  if (await isGrpAdmin(api, event, '61552181213388') && admin && mention != undefined){
    api.removeUserFromGroup(mention,event.threadID).catch(err=>{
      console.log(err)
    })
    api.sendMessage(`Kicked ${event.mentions[mention].replace("@","")} from the group`,event.threadID)
  }
  else{
    api.sendMessage(`You or I don't have permission to kick members`,event.threadID)
  }


}

module.exports = {
  kick:kick
}