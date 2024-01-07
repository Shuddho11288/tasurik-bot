const uid = (api, event) => {
  console.log(event.messageReply.senderID)
  api.sendMessage('UID: '+event.messageReply.senderID, event.threadID, event.messageID).catch(err => { console.log(err) })
}


module.exports = {
  uid
}