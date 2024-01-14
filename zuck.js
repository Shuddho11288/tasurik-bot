const apiURL = 'https://meme-api-shuddho.vercel.app/zuck?t=top'// This api was made by me !
const sendImage = require('./basicTools/sendImage')
const zuck = async (api, event) => {

  api.sendMessage(
    'Please wait a moment...',
    event.threadID,
    event.messageID)

  let text = event.body.split('zuck')[1].trim()

  let targetURL = apiURL.replace('top', encodeURIComponent(text))
  sendImage.sendImage(api, event, 'https://image.thum.io/get/width/1920/crop/400/fullpage/noanimate/viewportWidth/700/viewportHeight/700' + targetURL + `&session=brefuy${process.hrtime.bigint()}rtgebiu`)

}

module.exports = {
  zuck
}