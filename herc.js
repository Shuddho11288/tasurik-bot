
const { Hercai } = require('hercai');

const herc = new Hercai();

/* Available Models */
/* "v2" , "beta" , "v3-beta" */
/* Default Model; "v2" */


const aiherc = (api, event) => {
  api.sendMessage('Generating response from herc AI', event.threadID, event.messageID)

  herc.question({ model: "v2", content: event.body.split('herc')[1] }).then(response => {
    api.sendMessage(response.reply, event.threadID, event.messageID)

  }).catch(err => {
    console.log(err)
    api.sendMessage('Error Occured', event.threadID, event.messageID)
  })

}

const aiharcbeta = (api, event) => {
  api.sendMessage('Generating response from herc AI', event.threadID, event.messageID)
  herc.question({ model: "beta", content: event.body.split('herc')[1] }).then(response => {
    api.sendMessage(response.reply, event.threadID, event.messageID)
  }).catch(err => {
    console.log(err)
    api.sendMessage('Error Occured', event.threadID, event.messageID)
  })
}

const aiharcbetav3 = (api, event) => {
  api.sendMessage('Generating response from herc AI', event.threadID, event.messageID)
  herc.question({ model: "v3-beta", content: event.body.split('herc')[1] }).then(response => {
    api.sendMessage(response.reply, event.threadID, event.messageID)
  }).catch(err => {
    console.log(err)
    api.sendMessage('Error Occured', event.threadID, event.messageID)
  })
}

const gpt4 = (api, event) => {
  api.sendMessage('Generating response from Open AI\'s ChatGPT-4', event.threadID, event.messageID)
  herc.question({ model: "v3-beta", content: event.body.split('gpt4')[1] }).then(response => {
    api.sendMessage(response.reply, event.threadID, event.messageID)
  }).catch(err => {
    console.log(err)
    api.sendMessage('Error Occured. Try Again!', event.threadID, event.messageID)
  })
}

module.exports = {
  aiherc,
  aiharcbeta,
  aiharcbetav3,
  gpt4
}