const apiforname = 'https://pypokedexbyshuddho.tasawarshuddho.repl.co/api/pokemon/name/'
const apifordex = 'https://pypokedexbyshuddho.tasawarshuddho.repl.co/api/pokemon/dex/'

const sendImage = require('./basicTools/sendImage')

const axios = require('axios')
const boldify = require('./boldify')
const pokedex = async (api, event) => {
  let msg = event.body.split('pokedex')[1].trim()
  let result = ''
  //check if number using isNaN
  if (isNaN(msg)) {
    let url = apiforname + msg
    let data = await axios.get(url)
    result = data.data
  }
  else {

    let url = apifordex + msg
    let data = await axios.get(url)
    result = data.data
  }
  let msgd = ''
  for (let i = 0; i < Object.keys(result).length; i++) {
    msgd += `${boldify(Object.keys(result)[i])} : ${result[Object.keys(result)[i]]}\n`
  }
  if (Object.keys(result).includes('sprites')) {
    msgd = msgd.split('𝘀𝗽𝗿𝗶𝘁𝗲𝘀')[0]
    sendImage.sendImageWithMessage(api, event, msgd, result['sprites'])

  }
  else {
  api.sendMessage(msgd, event.threadID, event.messageID)
  
  }
}

const pokedex2 = (api, event)=>{
    let msg = event.body.split('pokedex')[1].trim()
}


module.exports = {
  pokedex: pokedex2
}