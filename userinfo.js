const userinfo = async (api, event) => {
  str = event.body.split('|')
  console.log(str)
  await api.sendMessage('Collecting User Info...', event.threadID)
  let userID = Object.keys(event.mentions)[0]
  console.log(userID)
  console.log(event.mentions)
  let msg = 'User Info: \n------------------\n\nUser ID: '+userID+'\n\n'
  let info = await api.getUserInfo(userID)
  Object.keys(info).forEach(key => {
    Object.keys(info[key]).forEach(key2 => {
      msg += `${key2.toUpperCase()}: ${info[key][key2]}\n\n`

    })
  })
  //console.log(await api.getUserInfo(userID))
  api.sendMessage(msg.toString(), event.threadID)
}


module.exports = {
  userinfo: userinfo
}