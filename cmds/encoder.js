const morse = require('morse');

function mainencode(param){
    var code = String(param)
    var li = code.split('')
    var nli = []
    li.forEach(element => {
        let ncode = parseInt(element.charCodeAt()).toString(2)
        nli.push("0"+ncode)
    });
    code = nli.join(" ")
    return code
}

function maindecode(param){
    var code = String(param)
    var li = code.split(' ')
    var nli = []
    li.forEach(element => {
        let ncode = String.fromCharCode(parseInt(element,2))
        nli.push(ncode)
    })
    code = nli.join("")
    return code

}



// Function to encode text to Morse code
function encodeToMorse(text) {
    return morse.encode(text);
}

// Function to decode Morse code to text
function decodeToMorse(morseCode) {
    return morse.decode(morseCode);
}




const encodebin = (api, event) =>{
  if (event.body.includes('encodebin')){
    var bin = event.body.split('encodebin')[1].trim()
  }

  else{
  var bin = event.body.split('ebin')[1].trim()
  }

    var encode = mainencode(bin)
    api.sendMessage(encode, event.threadID, event.messageID).catch((error) => {
    // Handle the error here
    console.log("Error:", error.message);
  })
}

const decodebin = (api, event) =>{
    if (event.body.includes('decodebin')){
      var bin = event.body.split('decodebin')[1].trim()
    }

  else{
    var bin = event.body.split('debin')[1].trim()
  }

    var decode = maindecode(bin)
    api.sendMessage(decode, event.threadID, event.messageID).catch((error) => {
    // Handle the error here
    console.log("Error:", error.message);
  })
}

const encodemorse = (api, event) =>{
  if (event.body.includes('encodemorse')){
    var bin = event.body.split('encodemorse')[1].trim()
  }

  else{
  var bin = event.body.split('emorse')[1].trim()
  }

    var encode = encodeToMorse(bin)
    api.sendMessage(encode, event.threadID, event.messageID).catch((error) => {
    // Handle the error here
    console.log("Error:", error.message);
  })
}

const decodemorse = (api, event) =>{
  if (event.body.includes('decodemorse')){
    var bin = event.body.split('decodemorse')[1].trim()
  }

  else{
  var bin = event.body.split('demorse')[1].trim()
  }

    var encode = decodeToMorse(bin)
    api.sendMessage(encode, event.threadID, event.messageID)  .catch((error) => {
    // Handle the error here
    console.log("Error:", error.message);
  })
}


module.exports = {
    encodebin:encodebin,
    decodebin:decodebin,
    encodemorse:encodemorse,
    decodemorse:decodemorse
}