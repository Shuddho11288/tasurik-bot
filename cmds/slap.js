const apiURL = 'https://meme-api-shuddho.vercel.app/slap?t=top&b=bottom'// This api was made by me !
const sendImage = require('./basicTools/sendImage')
const slap = async (api, event)=>{
  if (Object.keys(event.mentions) == 0 && event.body.split('slap')[1].trim()==''){
    api.sendMessage(
      'Please use the format: -slap <@mention|any name>',
      event.threadID,
      event.messageID)
    return
  }
  let secondUser = ''
  if (Object.keys(event.mentions) == 0){
    secondUser = event.body.split('slap')[1].trim()
  }
  else{
    secondUser = await api.getUserInfo(Object.keys(event.mentions)[0])
    secondUser = secondUser[Object.keys(event.mentions)[0]].name
  }
  api.sendMessage(
    'Please wait a moment...',
    event.threadID,
    event.messageID)
  let firstUser = await api.getUserInfo(event.senderID)
  firstUser = firstUser[event.senderID].name

  let targetURL = apiURL.replace('top', firstUser).replace('bottom', secondUser)
  sendImage.sendImage(api, event, 'https://image.thum.io/get/width/1920/crop/400/fullpage/noanimate/'+targetURL+`&session=brefuy${process.hrtime.bigint()}rtgebiu`)
  
}

module.exports = {
  slap
}