var ytvqueue = {}
const yts = require('yt-search')
const ytdl = require('ytdl-core')
const fs = require('fs')




async function searchvid(searchstr) {

  const r = await yts(searchstr)
  let li = {}

  const videos = r.videos.slice(0, 10)
  console.log(videos)
  videos.forEach((v) => {
    if (Number(v.seconds) <= 2000) {
      li[' ' + v.title + ' ' + v.timestamp] = v.url
    }

  })
  return li
}

async function vid(api, event) {
  var lista = await searchvid(event.body.split('play')[1])
  let queuedict = {}
  let msg = ''
  let i = 1
  Object.keys(lista).forEach((v) => {
    queuedict[i.toString()] = lista[v]
    msg += i.toString() + ':' + v + '\n'
    i += 1
  })

  msg += 'This is the full list of available videos. Choose one by replying number. E.g. 1'
  ytvqueue[event.senderID] = queuedict
  console.log(lista)
  console.log(ytvqueue)
  let senderID = event.senderID

  await api.sendMessage(msg, event.threadID)
}


async function handlevid(api, event) {
  console.log('Wait')
  console.log(ytvqueue)


  if (Object.keys(ytvqueue).includes(event.senderID)) {

    if (Object.keys(ytvqueue[event.senderID]).includes(event.body)) {
      await api.unsendMessage(event.messageReply.messageID)
      console.log("started downloading")
      await api.sendMessage('Downloading Video...⬇️', event.threadID)

      let url = ytvqueue[event.senderID][event.body]
      console.log(ytvqueue[event.senderID][event.body])

      const videoUrl = url;

      const vidname = event.senderID + process.hrtime.bigint()
      const options = {
        quality: 'highest',
        filter: 'audioonly',
      }


      const videoStream = fs.createWriteStream(__dirname + '/' + vidname + '.mp3')


      ytdl(videoUrl, options)
        .pipe(videoStream)
        .on('finish', async () => {
          console.log('Video downloaded successfully!');
          await api.sendMessage('Audio Downloaded and  uploading has started!\nPlease Wait...(It may take up to 1 minute)', event.threadID)
              const outputFilePath = __dirname + '/' + vidname + '.mp3'
              console.log('Video compressed successfully!');
              await api.sendMessage({ body: 'Here:', attachment: fs.createReadStream(outputFilePath) }, event.threadID)
              delete ytvqueue[event.senderID]

              fs.unlinkSync(outputFilePath)
            })






    }

  }

  else {
    if (Object.keys(ytvqueue).includes(event.senderID)) {
      delete ytvqueue[event.senderID]

      api.sendMessage('Wrong Input! Try again.', event.threadID)
    }


  }


}





module.exports = { play: vid, handleplay: handlevid }