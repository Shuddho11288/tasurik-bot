const threadinfo = async (api, event) => {

  await api.sendMessage('Collecting Thread Info...', event.threadID)

  let query = event.body.split('threadinfo')[1]

  let msg = 'Thread Info: \n------------------\n'
  let info = await api.getThreadInfo(event.threadID)
  console.log(info)
  // Object.keys(info).forEach(key => {
  //   Object.keys(info[key]).forEach(key2 => {
  //     msg += `${key2.toUpperCase()}: ${info[key][key2]}\n\n`

  //   })
  // })
  //console.log(await api.getUserInfo(userID))
  api.sendMessage('There you go:\n'+JSON.stringify(info[query.trim()]), event.threadID)
}


module.exports = {
  threadinfo: threadinfo
}