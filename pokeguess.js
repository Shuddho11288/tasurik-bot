const apifordex = 'https://pypokedexbyshuddho.tasawarshuddho.repl.co/api/pokemon/dex/'

var Pokedex = require('pokedex')
var pokedex = new Pokedex();
 

const sendImage = require('./basicTools/sendImage')

const axios = require('axios')
const boldify = require('./boldify')
const pokeguess_queue = {}
const database = require('./database')


const randompoke = () => {
  var randdex = Math.floor(Math.random() * 501)
  if (randdex > 500) {
    return '500'
  }
  else {
    return randdex
  }
}
const pokeguess = async (api, event) => {
  let randdex = randompoke()
  let data = pokedex.pokemon(randdex)
  let pokename = data['name']
  let imageurl = data['sprites']['animated']
  pokeguess_queue[event.senderID] = pokename
  sendImage.sendImageWithMessage(api, event, 'Who is that Pokemon?', imageurl, '.gif')
}

const handlepokeguess = async (api, event) => {
  let pokename = event.body.toLowerCase()
  // check if in queue
  if (!pokeguess_queue[event.senderID]) {
    return
  }

  let poke = pokeguess_queue[event.senderID]
  if (pokename == poke) {
    api.sendMessage('Correct!', event.threadID, event.messageID)
    delete pokeguess_queue[event.senderID]

    let dbase = database.getDatabase('pokemonCount')
    dbase[event.senderID] == undefined ? dbase[event.senderID] = 1 : dbase[event.senderID] = dbase[event.senderID] + 1
    database.setDatabase('pokemonCount', dbase)
  }
  else {
    api.sendMessage('Wrong! It is ' + pokeguess_queue[event.senderID], event.threadID, event.messageID)
    delete pokeguess_queue[event.senderID]
  }
}


const pokeguessleaderboard = async (api, event) => {
  let nwpm_queue = database.getDatabase('pokemonCount')
  let reply = boldify('Here is the pokemon count leaderboard:\n\n')
  const sortedData = Object.fromEntries(
    Object.entries(nwpm_queue).sort(([, a], [, b]) => b - a)
  )

  let i = 0
  for (const [key, value] of Object.entries(sortedData)) {
    var user_name = await api.getUserInfo(key)
    //console.log(user_name)
    let h = boldify('RANK:' + (i + 1) + ' ' + user_name[key].name)
    reply += `${h}: ${value}\n`
    i++
    if (i == 5) {
      break
    }
  }
  api.sendMessage(reply, event.threadID, event.messageID)
}

module.exports = {
  pokeguess,
  handlepokeguess,
  pokeguessleaderboard
}