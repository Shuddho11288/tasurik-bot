const config = {
    name: "loginmail",
    description: "Log in a temporary mail",
    usage: "-loginmail <mail> <pass>",
    category: "📩 Email",
    author: "Tasawar Ahmed Shuddho",
    version: "1.0.0",
    permission: "all",
    alias: "lm|login|loginmail",
  };
  const axios = require("axios");
  const { v4: uuidv4 } = require('uuid');
  const crypto = require('crypto');
  const database = require('../cmds/database');

  const getToken = async (id, pass)=>{

    let data = await axios.post('https://api.mail.tm/token', {
        address: id,
        password: pass
    })
    console.log(data.data)
    return data

}
  const run = async (api, event, args) => {
    let data = await getToken(args[0], args[1]);
    console.log(data);
    let n = database.getDatabase('tempmail')
    n[event.senderID] = {
        address: args[0],
        pass: args[1]
    }
    database.setDatabase('tempmail', n)
  
    let msg =
      "Logged in as " + args[0] + " successfully.✅"
  
    api.sendMessage(msg, event.threadID, event.messageID);
  };
  
  const handle = async (api, event) => {
    return;
  };
  
  module.exports = { run, config, handle };
  