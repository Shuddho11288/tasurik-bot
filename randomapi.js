const axios = require('axios')
const boldify = require('./boldify')

const randomapi = async (api, event)=>{
  let url = 'https://api.publicapis.org/entries'
  let response = await axios.get(url)
  let data = response.data.entries[Math.floor(Math.random() * response.data.entries.length)]
  let msg = ''
  Object.keys(data).forEach((e)=>{
    msg += `${boldify(e)}: ${data[e]}\n`

  })
  api.sendMessage(msg, event.threadID, event.messageID)
}

module.exports = {
  randomapi
}