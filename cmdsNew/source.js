const config = {
  name: "source",
  description: "get source of a command",
  usage: "-source <command name>",
  category: "⚙️ Utils",
  author: "Tasawar Ahmed Shuddho",
  version: "1.0.0",
  permission: "all",
};
const pathi = require('path');
const fs = require('fs');
const run = async (api, event) => {
  let command = event.body.split('source')[1].trim()
  let path = pathi.resolve(__dirname , './'+command+'.js')
  let secondaryPath = pathi.resolve(__dirname , '../cmds/'+command+'.js')
  console.log(secondaryPath)
  if (fs.existsSync(path)){
    
  }
  else if (fs.existsSync(secondaryPath)){
    path = secondaryPath
  }
  else {
    console.log(path)
    api.sendMessage('Command not found', event.threadID, event.messageID);
    return;
  }
  // let stream = fs.createReadStream(path);
  // api.sendMessage({ attachment: stream }, event.threadID, event.messageID)

  api.sendMessage(
    fs.readFileSync(path, 'utf8'),
    event.threadID,
    event.messageID
  );
};

const handle = async (api, event) => {
  return;
};

module.exports = { run, config, handle };
