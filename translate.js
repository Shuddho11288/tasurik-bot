const axios = require('axios')

async function translateAPI(text, lang) {

  const response = await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${lang}&dt=t&q=${encodeURIComponent(text)}`);

  return response.data[0][0][0];

}

const translatee = async (api, event) => {

  let msg = event.body.split('translate')[1]

  if (msg.includes('|')){
    let text = msg.split('|')[1].trim()

    let lang = msg.split('|')[0].trim()

    let translatedText = await translateAPI(text, lang)

    api.sendMessage('Your Translated text: ' + translatedText, event.threadID, event.messageID)
  }
  else{

    api.sendMessage('Please enter a language first. For example:\n-translate bn|How are you?', event.threadID, event.messageID)

    
  }




}

module.exports = { translate: translatee }
