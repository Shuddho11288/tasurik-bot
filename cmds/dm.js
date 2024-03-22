const dm = async (api, event)=>{
    str = event.body.split('|')
    console.log(str)
    await api.sendMessage('Sending Message', event.threadID)
    let threadID = Object.keys(event.mentions)[0]
    console.log(threadID)
    console.log(str)
    if (threadID == undefined) {
      api.sendMessage('Invalid syntax! Use -help dm for more info!')
    }
    await api.sendMessage(str[1], threadID)
    await api.sendMessage('Done!', event.threadID)
}

module.exports = {
    dm: dm
}