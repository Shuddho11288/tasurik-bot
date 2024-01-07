const axios = require('axios')
const sendImage = require('../basicTools/sendImage')

const webss = (api, event)=>{
  const baseURL = 'https://image.thum.io/get/width/1920/crop/400/fullpage/noanimate/'
  const promptURL = event.body.split('webss')[1].trim()
  if (promptURL == ''){
    api.sendMessage('Please enter a prompt!', event.threadID, event.messageID)
    return
  }
  else{
    api.sendMessage('Please wait...', event.threadID, event.messageID)
    const prompt = baseURL + promptURL
    console.log(prompt)
    sendImage.sendImage(api, event, prompt)
  }
}

module.exports = {
  webss
}