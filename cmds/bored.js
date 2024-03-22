const axios = require('axios')
const boldify = require('./boldify')

const bored = async (api, event)=>{
  let url = 'https://www.boredapi.com/api/activity'
  let response = await axios.get(url)
  let data = response.data
  let msg = ''
  Object.keys(data).forEach((e)=>{
    msg += `${boldify(e)}: ${data[e]}\n`
  
  })
  api.sendMessage(msg, event.threadID, event.messageID)
}

module.exports = {
  bored
}