const axios = require('axios')

const gpt = async (api, event, opening = false) => {
  let prompt = event.body.split('ai')[1]
  if (prompt == '') {
    api.sendMessage('Please enter a prompt!', event.threadID, event.messageID)
  }
  else {
    if (!opening) {
      api.sendMessage('Generating response...', event.threadID, event.messageID)
    }

    try {
      prompt = prompt.trim().split(' ').join('+')
      let url = process.env['aiApiUrl'] + prompt
      //console.log(url)
      let result = await axios.get(url)
      //console.log(result)
      let response = result.data.message
      console.log(response)

      await api.sendMessage(response, event.threadID, event.messageID)
    }
    catch (error) {
      console.log(error)
      await gpt(api, event, true)
    }
  }
}

module.exports = {
  ai: gpt
}