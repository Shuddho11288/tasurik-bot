const unsend = (api, event) => {
  if (event.messageReply.senderID == '61552181213388' && event.messageReply.body.startsWith('Message unsent by') && event.senderID!='100088054962292' && event.messageReply.senderID =='61555957081131') {
    api.sendMessage('Sorry! I won\'t try to delete the log messages! Nice try kiddo ;)', event.threadID)
  }
  else if (event.messageReply.senderID != '61555957081131') {
    api.sendMessage('I can only remove the messages sent by me!', event.threadID)
  }
  else {
    api.unsendMessage(event.messageReply.messageID)
  }

}

module.exports = {
  unsend: unsend
}