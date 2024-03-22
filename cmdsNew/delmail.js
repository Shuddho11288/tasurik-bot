const config = {
  name: "delmail",
  description: "Delete your temp mail.",
  usage: "-delmail <mail> <pass>",
  category: "📩 Email",
  author: "Tasawar Ahmed Shuddho",
  version: "1.0.0",
  permission: "all",
};

const axios = require("axios");
const database = require('../cmds/database')

const getToken = async (id, pass)=>{

  let data = await axios.post('https://api.mail.tm/token', {
      address: id,
      password: pass
  })
  console.log(data)
  return data

}
const run = async (api, event, args) => {
  let mail = args[0] || database.getDatabase('tempmail')[event.senderID].address
  let pass = args[1] || database.getDatabase('tempmail')[event.senderID].pass
  let token = await getToken(mail, pass)
  console.log(token.data)
  let msg = await axios.delete('https://api.mail.tm/accounts/'+token.data.id, options={
      headers: {
          'Authorization': `Bearer ${token.data.token}`
      }
  })    
  console.log(msg.data)
  api.sendMessage(
    "✅ Your mail has been deleted!",
    event.threadID,
    event.messageID
  );
};

const handle = async (api, event) => {
  return;
};

module.exports = { run, config, handle };