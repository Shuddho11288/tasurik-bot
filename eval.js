const fs = require('fs')

const  evall = async (api, event) =>{
  if (event.body.includes('evaljs')){
    exp = event.body.split('evaljs')[1]
  }
  else{
    exp = event.body.split('eval')[1]
  }

  await api.sendMessage('Evaluating your js oneline code '+exp, event.threadID)

  exp = exp.replace('x','*')
  exp = exp.replace('÷', '/')
  exp = exp.replace('×', '*')
  exp = exp.replace('^', '**')
  exp = exp.replace('PI', '3.1416')


  console.log(exp)

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


} 

module.exports = {eval: evall}