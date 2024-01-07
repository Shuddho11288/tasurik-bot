const database = require('./database')
const tasurik = require('./tasurik')
const checkAdmin = require('./basicTools/checkAdmin')

const isSimOn = (event)=>{
  let dbase = database.getDatabase('sim')
  if (dbase[event.threadID] == true){
    return true
  }
  else{
    return false
  }
}

const simOn = (event)=>{
  let dbase = database.getDatabase('sim')
  dbase[event.threadID] = true
  database.setDatabase('sim', dbase)
}
const simOff = (event)=>{
  let dbase = database.getDatabase('sim')
  delete dbase[event.threadID]
  database.setDatabase('sim', dbase)
}

const sim = async (api, event)=>{
  if (!(await checkAdmin.isGrpAdmin(api, event))){
    api.sendMessage(' Only group admin can use this command', event.threadID, event.messageID)
    return
  }
  let dbase = database.getDatabase('sim')
  if (dbase[event.threadID] == true){
    simOff(event)
    api.sendMessage('Sim Off', event.threadID)
  }
  else{
    simOn(event)
    api.sendMessage('Sim On', event.threadID)
  }
}

const axios = require('axios')
const nsfw = require('./nsfw')
const simsimi = async (api, event)=>{

  if (nsfw.checkNSFW(api, event)){
    let teachdict = database.getDatabase('teachdict')
    let repans = database.getDatabase('repans')

        console.log(teachdict)

        console.log(Object.keys(teachdict))

        let msg = event.body.trim()

              if (Object.keys(teachdict).includes(msg)) {

                await api.sendMessage(teachdict[msg].trim(), event.threadID, event.messageID)

                return 0

              }


              try {

                var url = "https://api.simsimi.vn/v2/simtalk";
msg = encodeURIComponent(msg)+' r '
                fetch(url, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                  body: "text=" + msg + "&lc=bn",
                })
                  .then((response) => response.json())
                  .then((data) => {
                    console.log(data)
                    console.log(data['message'])
                     if(Object.keys(repans).includes(data['message'])){
                        api.sendMessage(repans[data['message']], event.threadID, event.messageID)

                    }
                    else{
                      api.sendMessage(data['message'], event.threadID, event.messageID)
                    }

                  })

              } catch (error) {
                console.log(error)

    }
  }
  else{
    api.sendMessage("Sorry but nsfw for this group is turned off.\nNote that, tasurik command can sometimes send some unwanted and offensive replies.", event.threadID, event.messageID)
  }


}

module.exports = {
  
  simOn,
  simOff,
  sim,
  isSimOn,
  simsimi
}