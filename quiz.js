const quizURL = 'https://opentdb.com/api.php?amount=1&encode=url3986&type=boolean&difficulty='
const axios = require('axios')
const database = require('./database')
let quiz_queue = {}

const quiz = async (api,event)=>{
  let url = quizURL
  if (['easy','medium', 'hard'].includes(event.body.split('quiz')[1].trim())){
    url += event.body.split('quiz')[1].trim()
    
  }
  else{
    url = quizURL + 'easy'
  }
  let response = await axios.get(url)
  let quiz = response.data.results[0]
  let ques = quiz.question
  let ans = quiz.correct_answer
  quiz_queue[event.senderID] = ans
  api.sendMessage(decodeURIComponent(ques)+'\n\n Write True or False only!',event.threadID,event.messageID)
  
}

const handle_quiz = async (api, event)=>{
  if (!Object.keys(quiz_queue).includes(event.senderID)){
    return
  }
  if (event.body.toLowerCase() == quiz_queue[event.senderID].toLowerCase()){
    let leaderboard = database.getDatabase('quiz_queue')
    leaderboard[event.senderID] = Object.keys(leaderboard).includes(event.senderID)?1:leaderboard[event.senderID] + 1
    database.setDatabase('quiz_queue',leaderboard)
      
    api.sendMessage('Correct!',event.threadID,event.messageID)
  }
  else{
    api.sendMessage('Wrong! It is actually '+quiz_queue[event.senderID],event.threadID,event.messageID)
  }
  delete quiz_queue[event.senderID]
}

const quiz_leaderboard = async (api, event)=>{

  let leaderboard = database.getDatabase('quiz_queue')
  let leaderboard_list = Object.entries(leaderboard).sort((a,b)=>b[1]-a[1])
  let leaderboard_msg = 'Quiz Leaderboard\n\n'
  for (let i = 0; i < leaderboard_list.length; i++){
    leaderboard_msg += `${i+1}. ${leaderboard_list[i][0]} : ${leaderboard_list[i][1]}\n`
  }
  api.sendMessage(leaderboard_msg,event.threadID,event.messageID)
}
module.exports = {
  quiz,
  handle_quiz,
  quiz_leaderboard
}