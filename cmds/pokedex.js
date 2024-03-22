
const sendImage = require('./basicTools/sendImage')
var Pokedex = require('pokedex'),
    pokedexer = new Pokedex();
 
const axios = require('axios')
const boldify = require('./boldify')

const pokedex = (api, event)=>{
    let msg = event.body.split('pokedex')[1].trim()
    let pokemonData = pokedexer.pokemon(msg)
    let presentationMessage = `Pokemon Presentation: ${boldify(pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1))} (ID: ${pokemonData.id})\n`;

    for (const key in pokemonData) {
      if (key !== 'name' && key !== 'sprites') {
          presentationMessage += `${boldify(key.replace('_', ' ').toUpperCase())}: ${pokemonData[key]}\n`;
      }
    }
    sendImage.sendImageWithMessage(api, event, presentationMessage, pokemonData.sprites.animated, '.gif')
}


module.exports = {
  pokedex
}