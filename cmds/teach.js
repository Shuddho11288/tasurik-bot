const database = require('./database')

let teachdict = database.getDatabase('teachdict')

let permissions = database.getDatabase('permissions')

const admin = ['100088054962292']

async function teach(api, event) {
  teachdict = database.getDatabase('teachdict')

  permissions = database.getDatabase('permissionsForTeach')
  {
    if (event.senderID == admin[0] || permissions[event.senderID] == true) {
      await api.sendMessage('Attempting to teach...', event.threadID)

      let teach = event.body.split('teach')[1].split('|')
      if (teach[0] == undefined || teach[1] == undefined) {
        await api.sendMessage('Wrong Syntax! Use /help teach to know more!', event.threadID)
        return
      }
      let ques = teach[0].trim()
      let ans = teach[1].trim()
      teachdict[ques] = ans
      database.setDatabase('teachdict', teachdict)
      api.sendMessage('Taught Successfully!', event.threadID)

    }
    else {
      api.sendMessage('Sorry you do not have the permission', event.threadID)
    }
  }
}

async function unteach(api, event) {
  teachdict = database.getDatabase('teachdict')

  permissions = database.getDatabase('permissionsForTeach')
  {
    if (event.senderID == admin[0] || permissions[event.senderID] == true) {
      await api.sendMessage('Attempting to unteach...', event.threadID)

      let teach = event.body.split('unteach')[1]
      let ques = teach.trim()

      delete teachdict[ques]
      database.setDatabase('teachdict', teachdict)
      api.sendMessage('Untaught Successfully!', event.threadID)

    }
    else {
      api.sendMessage('Sorry you do not have the permission', event.threadID)
    }
  }
}

module.exports = {
  teach: teach,
  unteach: unteach
}