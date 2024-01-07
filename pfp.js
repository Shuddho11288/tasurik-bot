const apiURL = 'https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662'
const sendImage = require('./basicTools/sendImage')

const pfp = (api, event)=>{
  let targetID = Object.keys(event.mentions)[0] || event.senderID
  let url = apiURL.replace('USER_ID', targetID)
  sendImage.sendImage(api, event, url)
}

const getpfp = (api, event)=>{
  let targetID = Object.keys(event.mentions)[0] || event.senderID
  let url = apiURL.replace('USER_ID', targetID)
  return url
}

module.exports = {pfp, getpfp}