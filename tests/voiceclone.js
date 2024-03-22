const url = 'https://bilalsardar-voice-cloning.hf.space/run/predict'

const axios = require('axios')
const fs = require('fs')
let base64 = fs.readFileSync('Alphabet.aac', 'base64')
axios.post(url, {
    
        "data": [
          
      'Sussy Baka',

      {"name":"Alphabet.wav","data":"data:audio/wav;base64,"+base64},
      {"name":"Alphabet.wav","data":"data:audio/wav;base64,"+base64},
]

      
}).then((response) => {
    console.log('https://bilalsardar-voice-cloning.hf.space/file='+response.data.data[0].name)
})