const mySecret = require('../env.json')["cricAPI"];
const endpoint = `https://api.cricapi.com/v1/series?apikey=${mySecret}&offset=0`;
const axios = require("axios");
const boldify = require("./boldify");

function boldifyIfPresent(text) {
  return text.replace(/\*\*(.*?)\*\*/g, (match, p1) => boldify(p1));
}
const cricketFixtures = async (api, event) => {
  let data = await axios.get(endpoint);
  i = 0;
  let reply = `*Cricket Fixtures*\n\n`;
  while (i < data.data.data.length && i < 20) {
    let tours = data.data.data;
    let presentationString = "";
    let tour = tours[i];
    presentationString += `* **Tour Name:** ${tour.name}\n`;
    presentationString += `* **Start Date:** ${tour.startDate}\n`;
    presentationString += `* **End Date:** ${tour.endDate}\n`;
    presentationString += `* **Matches:**\n`;
    if (tour.odi > 0) {
      presentationString += `    * ODIs: ${tour.odi}\n`;
    }
    if (tour.t20 > 0) {
      presentationString += `    * T20s: ${tour.t20}\n`;
    }
    if (tour.test > 0) {
      presentationString += `    * Tests: ${tour.test}\n`;
    }
    presentationString += `\n`;
    i++;
    reply += boldifyIfPresent(presentationString);
  }
  api.sendMessage(reply, event.threadID);
};

module.exports = {
  cricketFixtures,
};
