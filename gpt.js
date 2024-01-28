const axios = require('axios')

const gpt = async (api, event, opening = false) => {
  let prompt = event.body.split('gpt')[1]
  if (prompt == '') {
    api.sendMessage('Please enter a prompt!', event.threadID, event.messageID)
  }
  else {
    if (!opening) {
      api.sendMessage('Generating response...', event.threadID, event.messageID)
    }

    try {
      prompt = prompt.trim().split(' ').join('+')
      let url = 'http://eu4.diresnode.com:3301/gpt4?idd=1&prompt=' + prompt
      //console.log(url)
      let result = await axios.get(url)
      //console.log(result)
      let response = result.data['gpt4']
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
  gpt: gpt
}