const axios = require('axios')
const boldify = require('./boldify')
const url = 'https://factgenerator.tasawarshuddho.repl.co/'

const fact = (api, event) => {

  axios.get(url).then(res => {
    let msg = 'Here is a random fact for you:\n\n'
    msg += boldify(res.data)
    api.sendMessage(msg, event.threadID, event.messageID)
  })
}

module.exports = {
  fact: fact
}