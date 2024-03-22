const config = {
    "name": "animeguess",
    "description": "Guess the anime character",
    "usage": "-animeguess",
    "category": "🎉 Fun Commands",
    "author": "Tasawar Ahmed Shuddho",
    "version": "1.0.0",
    "permission": "all"
}
const db = "Monkey D. Luffy, Son Goku, Naruto Uzumaki, Edward Elric, Tanjiro Kamado, Eren Yeager, Gon Freecss, Izuku Midoriya, Jotaro Kujo, Asta, Usagi Tsukino, Sakura Kinomoto, Mikasa Ackerman, Tohru Honda, Emma, Kaguya Shinomiya, Yor Forger, Rei Ayanami, Violet Evergarden, Shouko Komi, Hinata Shoyo, Kuroko Tetsuya, Ash Ketchum, Hanamichi Sakuragi, Maki Nishikino, Hajime Kozuno, Chihaya Ayase, Yuri Katsuki, Onizuka Koganei, Rin Matsuoka, Yui Hirasawa, Nodoka Hanadera, Hitori Bocchi, Ayanokouji Kiyotaka, Holo, Reki Kawahara, Kousei Arima, Nagisa Furukawa, Hotaru Shida, Kaori Miyazono, Arataka Reigen, Saiki Kusuo, Sakamoto, Umaru Doma, Gintama, Barnaby Brooks Jr, Konata Izumi, Hanako Honda, Misaki Ayuzawa, Guts, Alphonse Elric, Griffith, Lelouch Lamperouge, Thorfinn Karlsefni, Inuyasha, Princess Mononoke, Lelouch Lamperouge, Setsuna F. Seiei, Suzaku Kururugi, Kamina, Simon, Yoko Littner, Kallen Stadtfeld, Kira Yamato, Light Yagami, Yuno Gasai, Johan Liebert, Re:Zero Subaru Natsuki, Homura Akemi, Makima, Kyubey".split(", ");
const queue = {}
var gis = require('g-i-s');
const sendImage = require("../cmds/basicTools/sendImage");
const axios = require('axios')
const boldify = require('./boldify')
const database = require('../cmds/database')
const run = async (api, event, args) => {
    
    let footballer = db[Math.floor(Math.random() * db.length)];
    queue[event.senderID] = footballer;
    console.log(footballer)
        let url =  'https://www.google.com/search?as_st=y&tbm=isch&as_q=messi+anime+character&as_epq=&as_oq=&as_eq=&imgsz=&imgar=&imgc=&imgcolor=&imgtype=&cr=&as_sitesearch=&as_filetype=&tbs='.replace('messi', footballer)
    let response =  await axios.get(url)
    console.log(response.data)
    
// Regular expression to extract URLs from img tags
const imgTagRegex = /<img.*?src=["'](.*?)["'].*?>/g;

// Find all matches in the HTML content
const matches = response.data.match(imgTagRegex);

// Extract the URLs from the matches
const imgUrls = matches.map(match => {
    const srcRegex = /src=["'](.*?)["']/;
    const srcMatch = match.match(srcRegex);
    return srcMatch ? srcMatch[1] : null;
}).filter(url => url !== null);
  //api.sendMessage( 'https://image.thum.io/get/fullpage/image/fit/200x350/'+imgUrls[3], event.threadID, event.messageID)
  sendImage.sendImage(api, event , 'https://image.thum.io/get/fullpage/image/fit/200x350/'+imgUrls, '.png', 'Guess The Anime !' )
};

const handle = async (api, event) => {
    if (queue[event.senderID] != undefined){

        if (queue[event.senderID].toLowerCase().split(' ').includes(event.body.toLowerCase())){
          api.sendMessage("Correct!", event.threadID, event.messageID);
          delete queue[event.senderID];
                let nwpm_queue = database.getDatabase("anime_queue");
          let am = nwpm_queue[event.senderID] || 0
          nwpm_queue[event.senderID] = am + 1;
          database.setDatabase("anime_queue", nwpm_queue);
        }
        else{
          api.sendMessage("Wrong! The Correct Answer will be "+ guessthefootballerqueue[event.senderID], event.threadID, event.messageID);
          delete guessthefootballerqueue[event.senderID];
        }
        
      }
};

module.exports = { run, config, handle };