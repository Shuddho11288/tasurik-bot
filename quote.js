const boldify = require('./boldify')
const axios = require('axios')
const quote = (api, event)=>{
  query = event.body.split('quote')[1]
  console.log(query)
  if (query == ''){
    const url = 'https://api.quotable.io/quotes/random'
    axios.get(url).then((response)=>{
      const quote = response.data[0]
      const author = quote['author']
      const quote_text = boldify(quote['content'])
      api.sendMessage(`Here is a random quote for you:\n\n${quote_text}\n- ${author}`, event.threadID, event.messageID)
    
  })
    
}
  else{
    const url = `https://api.quotable.io/search/quotes?query=${query.trim().replaceAll(' ', '+')}&fields=content&limit=100`
    console.log(url)
    axios.get(url).then((response)=>{
      let total = response.data.count
      if (total == 0){
        api.sendMessage(`No quotes found for ${query}`, event.threadID, event.messageID)
        return
      }
      const quote = response.data.results[Math.floor(Math.random() * total)]
      
      const author = quote['author']
      const quote_text = boldify(quote['content'])
      api.sendMessage(`Here is a random quote for you:\n\n${quote_text}\n- ${author}`, event.threadID, event.messageID)
    
  })
  }
}

module.exports = quote