const apiURL = 'https://source.unsplash.com/1920x1080/?'
const sendImage = require('./basicTools/sendImage')
const unsplash = (api, event)=>{
  api.sendMessage('Please Wait..', event.threadID, event.messageID)
  let prompt = event.body.split('unsplash')[1].trim().split(' ').join('+')
  let url = apiURL + prompt

  sendImage.sendImage(api, event, url)
  
}

module.exports = {
  unsplash
}