const database = require("./database");
let lastDailyTaken = database.getDatabase("lastDailyTaken");
const checkAdmin = require("./basicTools/checkAdmin");
const boldify = require("./boldify");
let lastWorkInvoked = {};
function stringifyNumber(num) {
    const [integer, decimals] = num.toString().split(".");
    if (decimals) {
        return BigInt(integer).toString() + "." + BigInt(decimals).toString();
    }
    return BigInt(integer).toString();
}

let lastStealInvoked = {};
let lastInvestInvoked = {};
let lastBegInvoked = {};

let rob_queue = {};
let rob_target = {};
const shop = (api, event) => {
  let shop = { bankspace: 2000 };
  api.sendMessage(
    `️ [SHOP] ️\n\n️ 1.Banknote: ${shop["banknote"]} $`,
    event.threadID,
    event.messageID,
  );
};

const getBal = (id) => {
  dbase = database.getDatabase("economyBalance");
  console.log(dbase);
  if (!Object.keys(dbase).includes(id)) {
    return 0;
  }
  return Number(dbase[id]);
};

const getBank = (id) => {
  dbase = database.getDatabase("economyBank");
  if (!Object.keys(dbase).includes(id)) {
    return 0;
  }
  return Number(dbase[id]);
};

const setBank = (id, amount) => {
  dbase = database.getDatabase("economyBank");
  dbase[id] = amount;
  database.setDatabase("economyBank", dbase);
};

const getBankSpace = (id) => {
  dbase = database.getDatabase("economyBankSpace");
  if (!Object.keys(dbase).includes(id)) {
    return 10000;
  }
  return Number(dbase[id]);
};
const setBankSpace = (id, amount) => {
  dbase = database.getDatabase("economyBankSpace");
  dbase[id] = amount;
  database.setDatabase("economyBankSpace", dbase);
};
const setBal = (id, money) => {
  dbase = database.getDatabase("economyBalance");
  dbase[id] = money;
  database.setDatabase("economyBalance", dbase);
};

const buyBankSpace = (api, event) => {
  let quantity = Number(event.body.split(" ")[1]);
  if (isNaN(quantity)) {
    quantity = 1;
  }
  let buy = { bankspace: 2000 };
  let money = getBal(event.senderID);
  if (money < buy["bankspace"] * quantity || buy["bankspace"] * quantity< 0) {
    api.sendMessage(
      `️ [BUY] ️\n\n️ You don't have enough money to buy this item.\nBANK SPACE PRICE = 2000$\nEach Bank Space = 1000$`,
      event.threadID,
      event.messageID,
    );
  } else {
    api.sendMessage(
      `️ [BUY] ️\n\n️ You have bought ${quantity} bankspace for ${
        buy["bankspace"] * quantity
      } $. (EACH BANK SPACE IS EQUALS TO 1000$)`,
      event.threadID,
      event.messageID,
    );

    setBankSpace(
      event.senderID,
      quantity * 1000 + getBankSpace(event.senderID),
    );
    setBal(event.senderID, getBal(event.senderID) - 2000 * quantity);
  }
};

const balance = async (api, event) => {
  console.log(event);
  if (Object.keys(event.mentions).length != 0) {
    let d = await api.getUserInfo(Object.keys(event.mentions)[0]);
    console.log(d);
    let name = d[Object.keys(event.mentions)[0]]["name"];
    let wallet = getBal(Object.keys(event.mentions)[0]);
    let bank = getBank(Object.keys(event.mentions)[0]);
    api.sendMessage(
      `[BALANCE] ${name}'s balance:\n\nWallet: ${stringifyNumber(wallet.toFixed(
        2,
      ))}$\nBank: ${bank.toFixed(2)}$/${getBankSpace(
        Object.keys(event.mentions)[0],
      )}$`,
      event.threadID,
      event.messageID,
    );
  } else {
    let wallet = getBal(event.senderID);
    let bank = getBank(event.senderID);
    api.sendMessage(
      `[BALANCE] Your balance:\n\nWallet: ${wallet.toFixed(
        2,
      )}$\nBank: ${bank.toFixed(2)}$/${getBankSpace(event.senderID)}$`,
      event.threadID,
      event.messageID,
    );
  }
};

const work = async (api, event) => {
  if (lastWorkInvoked[event.senderID] != undefined) {
    if (lastWorkInvoked[event.senderID] > Date.now()) {
      api.sendMessage(
        `[WORK] You can work again in ${Math.ceil(
          (lastWorkInvoked[event.senderID] - Date.now()) / 1000,
        )} seconds`,
        event.threadID,
        event.messageID,
      );
      return;
    }
  }
  let workSuccess = [true, false][Math.floor(Math.random() * 2)];
  let highWork = [true, false, false, false, true, false][
    Math.floor(Math.random() * 6)
  ];
  if (workSuccess) {
    let money = Math.floor(Math.random() * 100);
    if (highWork) {
      money = Math.floor(Math.random() * 1000);
    }

    api.sendMessage(
      `[WORK] You worked and earned ${money} $`,
      event.threadID,
      event.messageID,
    );
    setBal(event.senderID, getBal(event.senderID) + money);
    lastWorkInvoked[event.senderID] = Date.now() + 1000 * 60 * 1;
  } else {
    api.sendMessage(
      `[WORK] You fall victim to an untoldable accident (while doing sus stuff) and died. Your wallet is empty now!`,
      event.threadID,
      event.messageID,
    );
    lastWorkInvoked[event.senderID] = Date.now() + 1000 * 60 * 1;
    setBal(event.senderID, 0);
  }
};

const steal = async (api, event) => {
  //steal cooldown check
  if (lastStealInvoked[event.senderID] != undefined) {
    if (lastStealInvoked[event.senderID] > Date.now()) {
      api.sendMessage(
        `[STEAL] You can steal again in ${Math.ceil(
          (lastStealInvoked[event.senderID] - Date.now()) / 1000,
        )} seconds`,
        event.threadID,
        event.messageID,
      );
      return;
    }
  }
  // Minimum money check
  if (getBal(event.senderID) < 200) {
    api.sendMessage(
      `[STEAL] You don't have enough money to steal. You need at least 200$ to steal`,
      event.threadID,
      event.messageID,
    );
    return;
  }
  let targetID = Object.keys(event.mentions)[0];
  if (targetID == undefined) {
    api.sendMessage(
      `[STEAL] You need to mention someone to steal from`,
      event.threadID,
      event.messageID,
    );
    return;
  }

  let stealSuccess = [true, false][Math.floor(Math.random() * 2)];
  if (stealSuccess) {
    let MaximumMoney = getBal(targetID);
    let money = Math.floor(Math.random() * MaximumMoney);
    api.sendMessage(
      `[STEAL] You stole ${money} $ from ${event.mentions[targetID]}`,
      event.threadID,
      event.messageID,
    );
    setBal(event.senderID, getBal(event.senderID) + money);
    setBal(targetID, getBal(targetID) - money);
    lastStealInvoked[event.senderID] = Date.now() + 1000 * 60 * 3;
  } else {
    let lossMoney = Math.floor(Math.random() * getBal(event.senderID));
    api.sendMessage(
      `[STEAL] You were caught and paid ${lossMoney} $ as fine`,
      event.threadID,
      event.messageID,
    );
    setBal(event.senderID, getBal(event.senderID) - lossMoney);
    setBal(targetID, getBal(targetID) + lossMoney);

    lastStealInvoked[event.senderID] = Date.now() + 1000 * 60 * 3;
  }
};

const deposit = async (api, event) => {
  let bankSpace = getBankSpace(event.senderID);
  let money = Number(event.body.split(" ")[1]);
  if (event.body.includes("all")) {
    money = getBal(event.senderID);
  } else if (event.body.includes("max")) {
    money = bankSpace - getBank(event.senderID);
    if (money > getBal(event.senderID)) {
      money = getBal(event.senderID);
    } else {
      money = money;
    }
  } else if (money == undefined || isNaN(money) || money < 0) {
    api.sendMessage(
      `[DEPOSIT] You need to specify an amount to deposit`,
      event.threadID,
      event.messageID,
    );
    return;
  }
  if (money > getBal(event.senderID)) {
    api.sendMessage(
      `[DEPOSIT] You don't have enough money to deposit`,
      event.threadID,
    );
    return;
  }
  if (bankSpace < money + getBank(event.senderID)) {
    api.sendMessage(
      `[DEPOSIT] You don't have enough space in your bank to deposit`,
      event.threadID,
    );
    return;
  }
  setBal(event.senderID, getBal(event.senderID) - money);
  setBank(event.senderID, getBank(event.senderID) + money);
  api.sendMessage(
    `[DEPOSIT] You deposited ${money.toFixed(2)} $ into your bank account`,
    event.threadID,
    event.messageID,
  );
};

const withdraw = async (api, event) => {
  if (event.body.includes("all")) {
    let money = getBank(event.senderID);
    setBank(event.senderID, getBank(event.senderID) - money);
    setBal(event.senderID, getBal(event.senderID) + money);
    api.sendMessage(
      `[WITHDRAW] You withdrew ${money.toFixed(2)} $ from your bank account`,
      event.threadID,
      event.messageID,
    );
    return;
  }
  let money = Number(event.body.split(" ")[1]);
  if (money == undefined || isNaN(money) || money < 0) {
    api.sendMessage(
      `[WITHDRAW] You need to specify an amount to withdraw`,
      event.threadID,
      event.messageID,
    );
    return;
  }
  if (money > getBank(event.senderID)) {
    api.sendMessage(
      `[WITHDRAW] You don't have enough money in your bank account to withdraw`,
      event.threadID,
    );
    return;
  }
  setBal(event.senderID, getBal(event.senderID) + money);
  setBank(event.senderID, getBank(event.senderID) - money);
  api.sendMessage(
    `[WITHDRAW] You withdrew ${money.toFixed(2)} $ from your bank account`,
    event.threadID,
    event.messageID,
  );
};

const beg = async (api, event) => {
  //beg cooldown
  if (lastBegInvoked[event.senderID] != undefined) {
    if (lastBegInvoked[event.senderID] > Date.now()) {
      api.sendMessage(
        `[BEG] You can beg again in ${Math.ceil(
          (lastBegInvoked[event.senderID] - Date.now()) / 1000,
        )} seconds`,
        event.threadID,
        event.messageID,
      );
      return;
    }
  }
  let begSuccess = true;
  let begMoney = Math.floor(Math.random() * 30);
  if (begSuccess) {
    api.sendMessage(
      `[BEG] You begged and received ${begMoney} $`,
      event.threadID,
      event.messageID,
    );
    setBal(event.senderID, getBal(event.senderID) + begMoney);
    lastBegInvoked[event.senderID] = Date.now() + 1000 * 5;
  }
};

const invest = (api, event) => {
  //invest cooldown check
  if (lastInvestInvoked[event.senderID] != undefined) {
    if (lastInvestInvoked[event.senderID] > Date.now()) {
      api.sendMessage(
        `[INVEST] You can invest again in ${Math.ceil(
          (lastInvestInvoked[event.senderID] - Date.now()) / 1000,
        )} seconds`,
        event.threadID,
        event.messageID,
      );
      return;
    }
  }

  let money = event.body.split(" ")[1];
  if (event.body.includes("all")) {
    money = Number(getBal(event.senderID));
  } else if (money == undefined || isNaN(Number(money)) || isNaN(money)) {
    api.sendMessage(
      `[INVEST] You need to specify the amount of money you want to invest`,
      event.threadID,
      event.messageID,
    );
    return;
  }
  if (Number(money) > getBal(event.senderID)) {
    api.sendMessage(
      `[INVEST] You don't have enough money to invest`,
      event.threadID,
      event.messageID,
    );
    return;
  }
  if (Number(money) < 500) {
    api.sendMessage(
      `[INVEST] You need to invest at least 500 $`,
      event.threadID,
      event.messageID,
    );
    return;
  }
  let investSuccess = [true, false][Math.floor(Math.random() * 2)];
  if (checkAdmin.isAdmin(event.senderID)) {
    investSuccess = true;
  }
  if (investSuccess) {
    let moneyl = ((Math.floor(Math.random() * 5) + 1) * money) / 10;
    api.sendMessage(
      `[INVEST] You got ${moneyl.toFixed(2)} $`,
      event.threadID,
      event.messageID,
    );
    setBal(event.senderID, getBal(event.senderID) + moneyl);
    //invest cooldown set
    lastInvestInvoked[event.senderID] = Date.now() + 1000 * 60 * 1;
  } else {
    let lossMoney = Math.floor(money / 4);
    lossMoney = Math.floor(
      Math.floor(Math.random() * lossMoney.toFixed(2)) + 1,
    );
    api.sendMessage(
      `[INVEST] You lost ${lossMoney.toFixed(2)} $`,
      event.threadID,
      event.messageID,
    );
    setBal(event.senderID, getBal(event.senderID) - lossMoney.toFixed(2));
    lastInvestInvoked[event.senderID] = Date.now() + 1000 * 60 * 1;
  }
};

const give = (api, event) => {
  let targetID = Object.keys(event.mentions)[0];
  if (targetID == undefined) {
    api.sendMessage(
      `[GIVE] You need to mention someone to give $ to and the syntax is -give <amount> <@mention>`,
      event.threadID,
      event.messageID,
    );
    return;
  }
  let money = event.body.split(" ")[1];
  if (Number.isInteger(Number(money))) {
    if (Number(money) > getBal(event.senderID) || Number(money) < 0) {
      api.sendMessage(
        `[GIVE] You don't have enough money to give`,
        event.threadID,
        event.messageID,
      );
      return;
    }
    money = Number(money);
    api.sendMessage(
      `[GIVE] You gave ${money} $ to ${event.mentions[targetID]}`,
      event.threadID,
      event.messageID,
    );
    setBal(event.senderID, getBal(event.senderID) - money);
    setBal(targetID, getBal(targetID) + money);
  } else {
    api.sendMessage(
      `[GIVE] You need to specify the amount of money you want to give`,
      event.threadID,
      event.messageID,
    );
  }
};

const daily = async (api, event) => {
  let timediff = Date.now() / 1000 - lastDailyTaken[event.senderID];
  if (timediff < 86400) {
    let remainingTimeInMilliseconds = (86400 - timediff) * 1000;

    // Convert milliseconds to hours, minutes, and seconds
    const remainingTimeInHours = Math.floor(
      remainingTimeInMilliseconds / (1000 * 60 * 60),
    );
    const remainingTimeInMinutes = Math.floor(
      (remainingTimeInMilliseconds % (1000 * 60 * 60)) / (1000 * 60),
    );
    const remainingTimeInSeconds = Math.floor(
      (remainingTimeInMilliseconds % (1000 * 60)) / 1000,
    );

    api.sendMessage(
      `[DAILY] You can take your daily reward in ${remainingTimeInHours} hours, ${remainingTimeInMinutes} minutes and ${remainingTimeInSeconds} seconds`,
      event.threadID,
      event.messageID,
    );
  } else {
    let dailyReward = Math.floor(Math.random() * 1000);
    api.sendMessage(
      `[DAILY] You got ${dailyReward} $`,
      event.threadID,
      event.messageID,
    );
    setBal(event.senderID, getBal(event.senderID) + dailyReward);
    lastDailyTaken[event.senderID] = Date.now() / 1000;
    database.setDatabase("lastDailyTaken", lastDailyTaken);
  }
};

const walletboard = async (api, event) => {
  let economybal = database.getDatabase("economyBalance");
  let economybank = database.getDatabase("economyBank");

  let reply = boldify("Here is the wallet leaderboard:\n\n");
  const sortedData = Object.fromEntries(
    Object.entries(economybal).sort(([, a], [, b]) => b - a),
  );

  let i = 0;
  for (const [key, value] of Object.entries(sortedData)) {
    var user_name = await api.getUserInfo(key);
    //console.log(user_name)
    let h = boldify("RANK:" + (i + 1) + " " + user_name[key].name);
    reply += `${h}: ${value.toFixed(2)}$\n`;
    i++;
    if (i == 5) {
      break;
    }
  }
  api.sendMessage(reply, event.threadID, event.messageID);
};

const bankboard = async (api, event) => {
  let economybal = database.getDatabase("economyBank");

  let reply = boldify("Here is the bank leaderboard:\n\n");
  const sortedData = Object.fromEntries(
    Object.entries(economybal).sort(([, a], [, b]) => b - a),
  );

  let i = 0;
  for (const [key, value] of Object.entries(sortedData)) {
    var user_name = await api.getUserInfo(key);
    //console.log(user_name)
    let h = boldify("RANK:" + (i + 1) + " " + user_name[key].name);
    reply += `${h}: ${value.toFixed(2)}$\n`;
    i++;
    if (i == 5) {
      break;
    }
  }
  api.sendMessage(reply, event.threadID, event.messageID);
};
const countryList = require("country-list");
const anagramWords = countryList.getNames();
const shuffleLetters = (word) => {
  let shuffledWord = word
    .split("")
    .sort((a, b) => 0.5 - Math.random())
    .join("");
  return shuffledWord;
};
const rob = (api, event) => {
  if (getBal(event.senderID) < 500000) {
    api.sendMessage(
      "You don't have enough money to rob someone. At least withdraw 500000$",
      event.threadID,
      event.messageID,
    );
    return;
  }
  // 10 anagram solve for successful rob
  if (Object.keys(event.mentions).length == 0) {
    api.sendMessage(
      `[ROB] You need to mention someone to rob`,
      event.threadID,
      event.messageID,
    );
    return;
  }
  //generate a list of 10 anagrams
  let anagrams = [];
  let msg = `[ROB] Robbing is on the way! Type the anagrams in the chat to rob the bank! (10 anagrams)`;
  for (let i = 0; i < 10; i++) {
    let anagram = anagramWords[Math.floor(Math.random() * anagramWords.length)];
    anagrams.push(anagram);
    msg += `\n${shuffleLetters(anagram)}`;
  }
  console.log(anagrams.join("\n"));

  rob_queue[event.senderID] = anagrams;
  rob_target[event.senderID] = Object.keys(event.mentions)[0];
  api.sendMessage(msg, event.threadID, event.messageID);
};

const handle_rob = async (api, event) => {
  if (Object.keys(rob_queue).includes(event.senderID)) {
    let user_answer = event.body.toLowerCase().split("\n");
    console.log(user_answer);
    let anagrams = rob_queue[event.senderID];
    let target = rob_target[event.senderID];
    let name = await api.getUserInfo(target);
    name = name[target].name;
    let corrected = 0;
    for (let i = 0; i < user_answer.length; i++) {
      if (user_answer[i].toLowerCase().trim() == anagrams[i].toLowerCase().trim()) {
        corrected++;
      }
    }
    if (corrected == 10) {
      let economybal = database.getDatabase("economyBalance");
      let economybank = database.getDatabase("economyBank");
      let rob_amount = Math.floor(Math.random() * economybank[target]);
      economybank[target] -= rob_amount;
      economybal[event.senderID] += rob_amount;
      database.setDatabase("economyBank", economybank);
      database.setDatabase("economyBalance", economybal);
      api.sendMessage(
        `[ROB] You robbed ${rob_amount}$ from ${name}!`,
        event.threadID,
        event.messageID,
      );
      delete rob_queue[event.senderID];
      delete rob_target[event.senderID];
    } else if (corrected > 7) {
      let economybal = database.getDatabase("economyBalance");
      let economybank = database.getDatabase("economyBank");
      let rob_amount = Math.floor(Math.random() * (economybank[target] / 2));
      economybank[target] -= rob_amount;
      economybal[event.senderID] += rob_amount;
      database.setDatabase("economyBank", economybank);
      database.setDatabase("economyBalance", economybal);
      api.sendMessage(
        `[ROB] You robbed ${rob_amount}$ from ${name}!`,
        event.threadID,
        event.messageID,
      );
      delete rob_queue[event.senderID];
      delete rob_target[event.senderID];
    } else {
      let loss_money = 500000;
      let economybal = database.getDatabase("economyBalance");
      let economybank = database.getDatabase("economyBank");
      economybal[target] += loss_money;
      economybal[event.senderID] -= loss_money;
      database.setDatabase("economyBank", economybank);
      database.setDatabase("economyBalance", economybal);
      api.sendMessage(
        `[ROB] You lost ${loss_money}$!`,
        event.threadID,
        event.messageID,
      );
      delete rob_queue[event.senderID];
      delete rob_target[event.senderID];
    }
  }
};
module.exports = {
  balance,
  work,
  steal,
  invest,
  give,
  daily,
  getBank,
  setBank,
  deposit,
  withdraw,
  shop,
  beg,
  buyBankSpace,
  walletboard,
  bankboard,
  rob,
  handle_rob,
};
