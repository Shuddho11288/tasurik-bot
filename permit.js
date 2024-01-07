const database = require('./database')
const checkAdmin = require('../basicTools/checkAdmin')



const permit = async (api, event) => {
  var permissionsForTeach = database.getDatabase('permissionsForTeach')
  await api.sendMessage('Please Wait...', event.threadID)
  if (checkAdmin.isAdmin(event.senderID)) {
    let msg = event.body
    let targetUserID = Object.keys(event.mentions)[0]
    permissionsForTeach[targetUserID] = true
    permissionsForTeach = database.setDatabase('permissionsForTeach', permissionsForTeach)
    api.sendMessage('Permission successfully given!', event.threadID).catch((error) => {
      // Handle the error here
      console.log("Error:", error.message);
    })

  }
  else {
    api.sendMessage('Sorry But you are not the admin!', event.threadID).catch((error) => {
      // Handle the error here
      console.log("Error:", error.message);
    })
  }
}

const unpermit = async (api, event) => {
  var permissionsForTeach = database.getDatabase('permissionsForTeach')
  await api.sendMessage('Please Wait...', event.threadID).catch((error) => {
    // Handle the error here
    console.log("Error:", error.message);
  })
  if (checkAdmin.isAdmin(event.senderID)) {
    let msg = event.body
    let targetUserID = Object.keys(event.mentions)[0]
    permissionsForTeach[targetUserID] = false
    api.sendMessage('Permission successfully withdrawn!', event.threadID).catch((error) => {
      // Handle the error here
      console.log("Error:", error.message);
    })
    permissionsForTeach = database.setDatabase('permissionsForTeach', permissionsForTeach)

  }
  else {
    api.sendMessage('Sorry But you are not the admin!', event.threadID)
  }
}

module.exports = {
  permit: permit,
  unpermit: unpermit
}