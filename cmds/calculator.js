const math = require('mathjs');
function isStringValid(inputString) {
  const validCharacters = '1234567890+-*/%^! ().';
  for (let i = 0; i < inputString.length; i++) {
    if (validCharacters.indexOf(inputString[i]) === -1) {
      return false;
    }
  }
  return true;
}


const  calc = async (api, event) =>{

  exp = event.body.split('calc')[1]
  await api.sendMessage('Calculating '+exp, event.threadID)

  exp = exp.replace('x','*')
  exp = exp.replace('÷', '/')
  exp = exp.replace('×', '*')
  exp = exp.replace('^', '**')
  exp = exp.replace('PI', '3.1416')
  if (isStringValid(exp)) {
    try{
      api.sendMessage('Result: '+eval(exp), event.threadID, event.messageID).catch((error) => {
        // Handle the error here
        console.log("Error:", error.message);
      })
    }
    catch(err){
      api.sendMessage('Error: '+err, event.threadID, event.messageID).catch((error) => {
        // Handle the error here
        console.log("Error:", error.message);
      })
    }


  } else {
    console.log('The string contains invalid characters.');
    api.sendMessage('Invalid characters.', event.threadID, event.messageID)
  }

} 

module.exports = {calc: calc}