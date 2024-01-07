const mySecret = process.env["cricAPI"];
const endpoint = `https://api.cricapi.com/v1/currentMatches?apikey=${mySecret}&offset=0`;
const axios = require("axios");
const boldify = require("./boldify");

function boldifyIfPresent(text) {
  return text.replace(/\*\*(.*?)\*\*/g, (match, p1) => boldify(p1));
}
const livescore = async (api, event) => {
  let data = await axios.get(endpoint);
  i = 0;
  let reply = `**Live Score**\n\n`;
  while (i < data.data.data.length && i < 20) {
    let tours = data.data.data;
    let presentationString = "";
    let match = tours[i];  
    console.log(match);
    presentationString += `**API Response:** Success\n`;
    presentationString += `**Matches:**\n`;
      presentationString += `* **Name:** ${match.name}\n`;
      presentationString += `* **Match Type:** ${match.matchType}\n`;
      presentationString += `* **Teams:** ${match.teams.join(" vs. ")}\n`;
      presentationString += `* **Date:** ${match.date}\n`;
      presentationString += `* **Venue:** ${match.venue}\n`;
      presentationString += `* **Status:** ${match.status}\n`;
      presentationString += `* **Score:**\n`;
      match.score.forEach((inning) => {
        presentationString += `    * ${inning.inning}: ${inning.r} runs, ${inning.w} wickets, ${inning.o} overs\n`;
      });
      presentationString += `\n`;
   
    i++;
    console.log(presentationString);
    reply += boldifyIfPresent(presentationString);
  }
  api.sendMessage(reply, event.threadID);
};

module.exports = {
  livescore,
};
