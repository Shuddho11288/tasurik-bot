const config = {
  name: "tune",
  description: "Get tune of a song, also known as karaoke!",
  usage: "-tune <song name>",
  category: "🎉 Fun Commands",
  author: "Tasawar Ahmed Shuddho and Md. Sifayet Rahman",
  version: "1.0.0",
  permission: "all",
};

// search karaoke using yt-search


const yts = require('yt-search')
const ytdl = require('ytdl-core')
const fs = require('fs')




async function searchvid(searchstr) {

  const r = await yts(searchstr)
  let li = {}

  const v = r.videos[0]


    li.name =  `${v.title} by ${v.author.name}`;
    li.author = `${v.author.name}`;
    li.duration = v.duration
    li.url = v.url

    return  li


}



const run = async (api, event) => {
    let song_name = event.body.split('tune')[1].trim()+ ' karaoke'

searchvid(song_name).then(song => {
      if (!song.name.toLowerCase().includes('karaoke')) {
        api.sendMessage('No karaoke found for that song', event.threadID, event.messageID)
      } else {

        api.sendMessage(`Audio Downloading😃\n\nDETAILS: 
        \nTitle: ${song.name}
        \nAuthor: ${song.author}
        \nDuration: ${song.duration}

        `, event.threadID, event.messageID)
        const videoUrl = song.url;

        const vidname = event.senderID + process.hrtime.bigint()
        const options = {
          quality: 'highest',
          filter: 'audioonly',
        }
  
  
        const videoStream = fs.createWriteStream(__dirname + '/' + vidname + '.mp3')
  
  
        ytdl(videoUrl, options)
          .pipe(videoStream)
          .on('finish', async () => {
            console.log('Audio downloaded successfully!');
            await api.sendMessage('Audio Downloaded and  uploading has started!\nPlease Wait...(It may take up to 1 minute)', event.threadID)
                const outputFilePath = __dirname + '/' + vidname + '.mp3'
                console.log('Video compressed successfully!');
                await api.sendMessage({ body: 'Here:', attachment: fs.createReadStream(outputFilePath) }, event.threadID)
                fs.unlinkSync(outputFilePath)
                
              })
  
      }
})}

const handle = async (api, event) => {
  return;
};

module.exports = { run, config, handle };
