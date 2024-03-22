const config = {
    "name": "animeguessleaderboard",
    "description": "Get the anime guess leaderboard",
    "usage": "-animeguessleaderboard",
    "category": "🎉 Fun Commands",
    "author": "Tasawar Ahmed Shuddho",
    "version": "1.0.0",
    "permission": "all"
}
const boldify = require('./boldify').boldify
const database = require('../cmds/database');

const run = async (api, event, args) => {
    let nwpm_queue = database.getDatabase("anime_queue");
    let reply = boldify("Here is the GTF leaderboard:\n\n");
    const sortedData = Object.fromEntries(
      Object.entries(nwpm_queue).sort(([, a], [, b]) => b - a),
    );
  
    let i = 0;
    for (const [key, value] of Object.entries(sortedData)) {
      var user_name = await api.getUserInfo(key);
      //console.log(user_name)
      let h = boldify("RANK:" + (i + 1) + " " + user_name[key].name);
      reply += `${h}: ${value}\n`;
      i++;
      if (i == 5) {
        break;
      }
    }
    api.sendMessage(reply, event.threadID, event.messageID);
};

const handle = async (api, event) => {
    return;
};

module.exports = { run, config, handle };