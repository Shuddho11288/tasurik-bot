
const setNickname = (api, event)=>{
  //console.log(event)
  var mentions = Object.keys(event.mentions);
  var mention = mentions[0];
  var nickname = event.body.split('setNickname')[1]

  if (mention != undefined && nickname != '' && nickname.includes('|')) {
    api.changeNickname(nickname.split('|')[1].trim(), event.threadID, mention).catch((err)=>{
      console.log(err)
      api.sendMessage(err.error, event.threadID, event.messageID)
    })
  }
  else {
    api.sendMessage("Please mention someone!", event.threadID);
  }
}

module.exports = {
  setNickname: setNickname
}