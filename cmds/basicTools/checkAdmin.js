const admin = ['100088054962292']

const isAdmin = (id)=>{

    if (admin.includes(id)){
        return true
    } 
    else{
        return false
    }
}

const isGrpAdmin = async (api, event)=>{
  if (isAdmin(event.senderID)){
    return true
  }
  let adminIDs = []
  
  let threadinfo = await api.getThreadInfo(event.threadID)
  threadinfo = threadinfo.adminIDs
  console.log(threadinfo)
  threadinfo.forEach(e => adminIDs.push(e.id))
  console.log(adminIDs)
  console.log(event.senderID)
  console.log(adminIDs.includes(event.senderID))
  return adminIDs.includes(event.senderID)
}


module.exports = {
    isAdmin: isAdmin,
    isGrpAdmin: isGrpAdmin
}

