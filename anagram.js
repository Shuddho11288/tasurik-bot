const countryList = require("country-list");

const database = require("./database");

const boldify = require("./boldify");

const anagramWords = countryList.getNames();

let anagram_queue = {};

const shuffleLetters = (word) => {
  let shuffledWord = word
    .split("")
    .sort((a, b) => 0.5 - Math.random())
    .join("");
  return shuffledWord;
};

const anagram = (api, event) => {
  let word = anagramWords[Math.floor(Math.random() * anagramWords.length)];

  anagram_queue[event.senderID] = word;

  console.log(word);

  shuffledWord = shuffleLetters(word);

  api.sendMessage(
    `Your anagram is (Remember its a country!): \n${shuffledWord}`,
    event.threadID,
    event.messageID,
  );
};

const anagramleaderboard = async (api, event) => {
  let nwpm_queue = database.getDatabase("anagram_queue");
  let reply = boldify("Here is the anagram leaderboard:\n\n");
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
const handle_anagram = async (api, event) => {
  if (anagram_queue[event.senderID]) {
    if (
      event.body.toLowerCase() == anagram_queue[event.senderID].toLowerCase()
    ) {
      delete anagram_queue[event.senderID];
      dbase = database.getDatabase("anagram_queue");
      dbase[event.senderID] == undefined
        ? (dbase[event.senderID] = 1)
        : (dbase[event.senderID] = dbase[event.senderID] + 1);
      database.setDatabase("anagram_queue", dbase);
      await api.sendMessage(`Correct!`, event.threadID, event.messageID);
    } else {
      let w = anagram_queue[event.senderID];
      delete anagram_queue[event.senderID];
      await api.sendMessage(
        `Wrong! The correct name would be ${w}`,
        event.threadID,
        event.messageID,
      );
    }
  }
};

module.exports = {
  anagram: anagram,
  handle_anagram: handle_anagram,
  anagramleaderboard: anagramleaderboard,
};
