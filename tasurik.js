const database = require('./database')

const nsfw = require('./nsfw')

const tasurik = async (api, event)=>{

  if (nsfw.checkNSFW(api, event)){
    let teachdict = database.getDatabase('teachdict')
    let repans = database.getDatabase('repans')

        console.log(teachdict)

        console.log(Object.keys(teachdict))

        let msg = event.body.split('tasurik')[1].trim()

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
    tasurik: tasurik
}