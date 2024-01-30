const boldify = require("./boldify");

const helpDict = {
  "🤖 Bot Admin Only": {
    getAppState:
      "Returns the app state of this ID! It is programmable\nSyntax: -getAppState",
    permit:
      " It permits the users to append the ID to the whitelist of teaching the bot \nSyntax: -permit <@Mention>",
    dm: "Nothing just you can dm others through it!\nSyntax: -dm <@Mention>|<Message>",
    resetResend: "Resets the resend database of the bot\nSyntax: -resetResend",
    blacklist:
      "Blacklists the user from using the bot\nSyntax: -blacklist <@Mention>",
    unblacklist:
      "Unblacklists the user from using the bot\nSyntax: -unblacklist <@Mention>",
  },
  "🫂 Group Commands": {
    kick: "Kicks the user from the group\nSyntax: -kick <@Mention>",
    setNickname:
      "Sets the nickname of the user\nSyntax: -setNickname <@Mention>|<New Nickname>",
    sim: "Enables simsimi mode in the chat.\nSyntax: -sim",
    adduser: "Adds the user to the group.\nSyntax: -adduser <@Mention>",
  },
  "▶️ Yt Commands": {
    vid: "It downloads the YouTube video and sends it to the chat.\nSyntax: -vid <search query>",
    play: "It plays audio from the YouTube video and sends it to the chat.\nSyntax: -play <search query>",
  },
  "💬 ChatBot": {
    tasurik:
      "A mixture of self database and simsimi.vn. A very funny command and currently most popular. \nSyntax: -tasurik <message>",
    teach:
      "By getting permission from the admin you can use this command to teach the bot ;).\nSyntax: -teach <question>|<answer>",
    repans:
      "It is a better version of teach.\nSyntax: -repans <simsimi answer>|<new answer>",
  },
  "🥴 simsimi": {
    nsim: "It is a simsimi bot which is able to talk with you.\nSyntax: -nsim <message>",
    nteach:
      "It is a simsimi bot which is able to talk with you.\nSyntax: -nteach <question>|<answer>",
  },
  "🎉 Fun Commands": {
    anagram:
      "Lets see your intelligence on anagram! Use this command for the challenge to identify a country's name.\nSyntax: -anagram",
    wordguess:
      "Lets see your intelligence on word guess! Use this command for the challenge to identify a word.\nSyntax: -wordguess",
    anagramleaderboard:
      "Shows the top 5 players with the most anagrams solved.\nSyntax: -anagramleaderboard",
    wpm: "you can test your typing speed using this command.\nSyntax: -wpm <your practicing letter(optional)> <word limit (optional)>",
    wpmleaderboard:
      "Shows the top 5 players with the most wpm.\nSyntax: -wpmleaderboard",
    wordguesschampionship:
      "It is the command to start Word guess competition in a group!\nSyntax: -wordguesschampionship <rounds>",
    bored:
      "It will send you a random way to spend your boring time\nSyntax: -bored",
  },
  "🫎 Pokemon": {
    pokedex:
      "It shows the info of the pokemon\nSyntax: -pokedex <pokemon name|pokemon dex number>",
    pokeguess:
      "It is a guessing game where you have to guess the pokemon name.\nSyntax: -pokeguess <pokemon name>",
    pokeguessleaderboard:
      "Shows the top 5 players with the most pokemon guesses.\nSyntax: -pokeguessleaderboard",
  },
  "🤨 Quiz": {
    quiz: "It is a quiz game where you have to answer the questions.\nSyntax: -quiz",
    quizleaderboard:
      "Shows the top 5 players with the most quizes.\nSyntax: -quizleader",
  },
  "😹 Meme Generator": {
    troll: "It is a troll command.\nSyntax: -troll <top Text>|<bottom Text>",
    gif: "It sends a gif to the chat.\nSyntax: -gif <search query>",
    meme: "It sends a meme to the chat.\nSyntax: -meme",
    slap: "It slaps the mentioned user.\nSyntax: -slap <@Mention>",
  },
  "💵 Economy Game": {
    balance: "Shows your balance.\nSyntax: -balance <mention (optional)>",
    beg: "Beg for money.\nSyntax: -beg",
    work: "Work for money. You may die and lose your all $ in your wallet\nSyntax: -work",
    give: "Gives the mentioned user some money.\nSyntax: -give <amount> <@Mention> ",
    invest: "Invests the money in a halal bank.\nSyntax: -invest <amount>",
    steal:
      "Steals the money from the mentioned user.\nSyntax: -steal <@Mention>",
    deposit: "Deposits the money in your bank.\nSyntax: -deposit <amount>",
    withdraw: "Withdraws the money from your bank.\nSyntax: -withdraw <amount>",
    daily: "Collects your daily reward.\nSyntax: -daily",
    buybankspace: "Buys bank space.\nSyntax: -buyBankSpace <amount>",
    walletboard:
      "Shows the top 5 players with the most money in their wallet.\nSyntax: -walletboard",
    bankboard:
      "Shows the top 5 players with the most money in their bank.\nSyntax: -bankboard",
    rob: "Robs the mentioned user. Actually stealing from bank but you have to go through a anagram challenge\nSyntax: -rob <@Mention>",
  },
  "🏏 Cricket": {
    livescore: "Shows the live score of  cricket matches.\nSyntax: -livescore",
    cricketFixtures:
      "Shows the fixtures of cricket matches.\nSyntax: -cricketFixtures",
  },
  "ℹ️ Info": {
    userinfo:
      "Returns the user info of the mentioned user.\nSyntax: -userinfo <@Mention>",
    weather:
      "Returns the weather of the mentioned city.\nSyntax: -weather <city name>",
    fact: "It sends a random fact to the chat.\nSyntax: -fact",
    quote:
      "It sends a random quote to the chat.\nSyntax: -quote <your query(optional)>",
    uid: "It sends the uid of the replied user.\nSyntax: -uid <@Mention>",
  },
  "📡 Bot Basic": {
    unsend:
      "It unsends a message sent by the user.\nSyntax: -unsend\nNB: You have to reply to the very message you want to get deleted!",
    resend:
      "It is a command that decides for resending the message you deleted.\nSyntax: -resend <on-off>",
    nsfw: "It switches the nsfw.\nSyntax: -nsfw",
    count: "It counts the number of messages in the chat.\nSyntax: -count",
  },

  "👨‍💻 Programming": {
    evaljs: "It evaluates the javascript code.\nSyntax: -evaljs <code>",
  },
  "🅰️ AI": {
    gpt: "It is an AI assistant.\nSyntax: -gpt <question>",
    ai: "It is an AI assistant.\nSyntax: -ai <question>",

    bard: "Use google bard to generate answer.\nSyntax: -bard <prompt>",
    bard2:
      "Use google bard to generate answer.(Currently under development)\nSyntax: -bard2 <prompt>",
    herc: "Use  herc to generate answer. You may add v3 or beta in your prompt to change ai model (/herc hi v3)\nSyntax: -herc <prompt>",
    gpt4: "Use gpt4 to generate answer.\nSyntax: -gpt4 <prompt>",
    palm: "Use palm to generate answer.\nSyntax: -palm <prompt>",
    liner: "Use liner to generate answer.\nSyntax: -liner <prompt>",
    gemini: "Use gemini to generate answer.\nSyntax: -gemini <prompt>",
  },
  "🖼️ AI Image Generator": {
    imagineherc:
      "Generate image using AI and herc.\nSyntax: -imagineherc <prompt>",
    dalle: "Generate image using Dall-E.\nSyntax: -dalle <prompt>",
    imagine:
      "Generate image using AI.(Deprecated use imagineherc or dalle instead\nSyntax: -imagine <prompt>",
    prodia: "Generate image using ProDia.\nSyntax: -prodia <prompt>",
    lexica: "Generate image using Lexica.\nSyntax: -lexica <prompt>",
    "4k": "Generate 4k image.\nSyntax: -4k",
  },

  "🧮 Calculator": {
    calc: "It is a calculator that can do basic calculations.\nSyntax: -calc <calculation>",
  },
  "㊙️ Secret Message": {
    decodebin:
      "It decodes the bin codes sent by the user.\nSyntax: -decodebin <bin code>",
    encodebin:
      "It encodes the string into binary sent by the user.\nSyntax: -encodebin <string>",
    encodemorse:
      "It encodes the string into morse code sent by the user.\nSyntax: -encodemorse <string>",
    decodemorse:
      "It decodes the morse code sent by the user.\nSyntax: -decodemorse <morse code>",
  },
  "📷 Image Edit": {
    zuck: "Create tweet from zuckerburg.\nSyntax: -zuck <text>",
    tweet:
      "Create tweet from twitter.\nSyntax: -tweet <text> <mention|optional>",
    fbhack: "Fake fb login.\nSyntax: -fbhack <@mention>",
    rainbow:
      "Create rainbow effect to one's profile picture.\nSyntax: -rainbow <@mention>",
  },
  "🥴 DIG": {
    blur: "Create blur effect to one's profile picture.\nSyntax: -blur <@mention>",
    gay: "Create gay effect to one's profile picture.\nSyntax: -gay <@mention>",
    greyscale:
      "Create greyscale effect to one's profile picture.\nSyntax: -greyscale <@mention>",
    invert:
      "Create invert effect to one's profile picture.\nSyntax: -invert <@mention>",
    sepia:
      "Create sepia effect to one's profile picture.\nSyntax: -sepia <@mention>",
    blink:
      "Create blink effect to one's profile picture.\nSyntax: -blink <@mention>",
    triggered:
      "Create triggered effect to one's profile picture.\nSyntax: -triggered <@mention>",
    ad: "Create ad effect to one's profile picture.\nSyntax: -ad <@mention>",
    affect:
      "Create affect effect to one's profile picture.\nSyntax: -affect <@mention>",
    batslap:
      "Create batslap effect to one's profile picture.\nSyntax: -batslap <@mention>",
    beautiful:
      "Create beautiful effect to one's profile picture.\nSyntax: -beautiful <@mention>",
    bed: "Create bed effect to one's profile picture.\nSyntax: -bed <@mention>",
    bobross:
      "Create bobross effect to one's profile picture.\nSyntax: -bobross <@mention>",
    clown:
      "Create clown effect to one's profile picture.\nSyntax: -clown <@mention>",
    confusedstonk:
      "Create confusedstonk effect to one's profile picture.\nSyntax: -confusedstonk <@mention>",
    deepfry:
      "Create deepfry effect to one's profile picture.\nSyntax: -deepfry <@mention>",
    delete:
      "Create delete effect to one's profile picture.\nSyntax: -delete <@mention>",
    discordblack:
      "Create discordblack effect to one's profile picture.\nSyntax: -discordblack <@mention>",
    discordblue:
      "Create discordblue effect to one's profile picture.\nSyntax: -discordblue <@mention>",
    doublestonk:
      "Create doublestonk effect to one's profile picture.\nSyntax: -doublestonk <@mention>",
    facepalm:
      "Create facepalm effect to one's profile picture.\nSyntax: -facepalm <@mention>",
    heartbreaking:
      "Create heartbreaking effect to one's profile picture.\nSyntax: -heartbreaking <@mention>",
    hitler:
      "Create hitler effect to one's profile picture.\nSyntax: -hitler <@mention>",
    jail: "Create jail effect to one's profile picture.\nSyntax: -jail <@mention>",
    karaba:
      "Create karaba effect to one's profile picture.\nSyntax: -karaba <@mention>",
    kiss: "Create kiss effect to one's profile picture.\nSyntax: -kiss <@mention>",
    lisapresentation:
      "Create lisapresentation effect to one's profile picture.\nSyntax: -lisapresentation <@mention>",
    mikkelsen:
      "Create mikkelsen effect to one's profile picture.\nSyntax: -mikkelsen <@mention>",
    mms: "Create mms effect to one's profile picture.\nSyntax: -mms <@mention>",
    notstonk:
      "Create notstonk effect to one's profile picture.\nSyntax: -notstonk <@mention>",
    podium:
      "Create podium effect to one's profile picture.\nSyntax: -podium <@mention>",
    poutine:
      "Create poutine effect to one's profile picture.\nSyntax: -poutine <@mention>",
    rip: "Create rip effect to one's profile picture.\nSyntax: -rip <@mention>",
    snyder:
      "Create snyder effect to one's profile picture.\nSyntax: -snyder <@mention>",
    spank:
      "Create spank effect to one's profile picture.\nSyntax: -spank <@mention>",
    stonk:
      "Create stonk effect to one's profile picture.\nSyntax: -stonk <@mention>",
    tatoo:
      "Create tatoo effect to one's profile picture.\nSyntax: -tatoo <@mention>",
    thomas:
      "Create thomas effect to one's profile picture.\nSyntax: -thomas <@mention>",
    trash:
      "Create trash effect to one's profile picture.\nSyntax: -trash <@mention>",
    wanted:
      "Create wanted effect to one's profile picture.\nSyntax: -wanted <@mention>",
    circle:
      "Create circle effect to one's profile picture.\nSyntax: -circle <@mention>",
    color:
      "Create color effect to one's profile picture.\nSyntax: -color <@mention>",
    denoise:
      "Create denoise effect to one's profile picture.\nSyntax: -denoise <@mention>",
    mirror:
      "Create mirror effect to one's profile picture.\nSyntax: -mirror <@mention>",
  },
  "🛜 API Related": {
    translate:
      "It translates the text sent by the user.\nSyntax: -translate <lang>|<text>",
    randomAPI: "It sends a random API.\nSyntax: -randomAPI",
    webss:
      "It sends a screenshot of the website sent by the user.\nSyntax: -webss <url>",
    say: "It sends a voice message of the text sent by the user.\nSyntax: -say <text>",
    unsplash: "It sends a image from unsplash.\nSyntax: -unsplash <query>",
    lyrics:
      "It sends the lyrics of the song sent by the user.\nSyntax: -lyrics <song name>",
  },
  "😶‍🌫️ Neko Commands": {
    neko: "Use nekobot api for generating neko\nSyntax: -neko",
    waifu: "Use nekobot api for generating waifu\nSyntax: -waifu",
    husbando: "Use nekobot api for generating husbando\nSyntax: -husbando",
    kitsune: "Use nekobot api for generating kitsune\nSyntax: -kitsune",
    lurk: "Use nekobot api for generating lurk\nSyntax: -lurk",
    shoot: "Use nekobot api for generating shoot\nSyntax: -shoot",
    sleep: "Use nekobot api for generating sleep\nSyntax: -sleep",
    shrug: "Use nekobot api for generating shrug\nSyntax: -shrug",
    stare: "Use nekobot api for generating stare\nSyntax: -stare",
    wave: "Use nekobot api for generating wave\nSyntax: -wave",
    poke: "Use nekobot api for generating poke\nSyntax: -poke",
    smile: "Use nekobot api for generating smile\nSyntax: -smile",
    peck: "Use nekobot api for generating peck\nSyntax: -peck",
    wink: "Use nekobot api for generating wink\nSyntax: -wink",
    blush: "Use nekobot api for generating blush\nSyntax: -blush",
    smug: "Use nekobot api for generating smug\nSyntax: -smug",
    tickle: "Use nekobot api for generating tickle\nSyntax: -tickle",
    yeet: "Use nekobot api for generating yeet\nSyntax: -yeet",
    think: "Use nekobot api for generating think\nSyntax: -think",
    highfive: "Use nekobot api for generating highfive\nSyntax: -highfive",
    feed: "Use nekobot api for generating feed\nSyntax: -feed",
    bite: "Use nekobot api for generating bite\nSyntax: -bite",
    bored: "Use nekobot api for generating bored\nSyntax: -bored",
    nom: "Use nekobot api for generating nom\nSyntax: -nom",
    yawn: "Use nekobot api for generating yawn\nSyntax: -yawn",
    facepalm: "Use nekobot api for generating facepalm\nSyntax: -facepalm",
    cuddle: "Use nekobot api for generating cuddle\nSyntax: -cuddle",
    kick: "Use nekobot api for generating kick\nSyntax: -kick",
    happy: "Use nekobot api for generating happy\nSyntax: -happy",
    hug: "Use nekobot api for generating hug\nSyntax: -hug",
    baka: "Use nekobot api for generating baka\nSyntax: -baka",
    pat: "Use nekobot api for generating pat\nSyntax: -pat",
    nod: "Use nekobot api for generating nod\nSyntax: -nod",
    nope: "Use nekobot api for generating nope\nSyntax: -nope",
    kiss: "Use nekobot api for generating kiss\nSyntax: -kiss",
    dance: "Use nekobot api for generating dance\nSyntax: -dance",
    punch: "Use nekobot api for generating punch\nSyntax: -punch",
    handshake: "Use nekobot api for generating handshake\nSyntax: -handshake",
    slap: "Use nekobot api for generating slap\nSyntax: -slap",
    cry: "Use nekobot api for generating cry\nSyntax: -cry",
    pout: "Use nekobot api for generating pout\nSyntax: -pout",
    handhold: "Use nekobot api for generating handhold\nSyntax: -handhold",
    thumbsup: "Use nekobot api for generating thumbsup\nSyntax: -thumbsup",
    laugh: "Use nekobot api for generating laugh\nSyntax: -laugh",
  },
};

function generateHelpMessage() {
  let message = "⎔ Here are the available commands :\n\n";
  let commandCount = 0;
  let catagoryCount = 0;
  for (const [category, commands] of Object.entries(helpDict)) {
    message += ` ❑  〔${boldify(category)}〕\n`;
    catagoryCount++;
    for (const [command, description] of Object.entries(commands)) {
      message += ` ╰━▢ -${command}\n`;
      commandCount++;
    }
    message += "\n";
  }

  message += `\n⎔ There are ${commandCount} commands in total with ${catagoryCount} catagories.`;

  message +=
    "\n⎔ For getting description on a single command use " +
    boldify("-help <command>");
  return message;
}

function displayCommandHelp(command) {
  for (const [category, commands] of Object.entries(helpDict)) {
    if (command in commands) {
      return `-${boldify(command)} : ${commands[command]}`;
    }
  }
  return `Command '${command}' not found.`;
}

function displayCatagoryHelp(catagory) {
  let message = `⎔ Here are the available commands in ${boldify(
    catagory
  )} :\n\n`;
  let commandCount = 0;
  for (const [command, description] of Object.entries(helpDict[catagory])) {
    message += `-${boldify(command)} : ${description}\n\n`;
    commandCount++;
  }
  message += `\n⎔ There are ${commandCount} commands in total.`;
  return message;
}

function isCommand(command) {
  return Object.values(helpDict).includes(command);
}

function isCatagory(cgy) {
  for (const [category, commands] of Object.entries(helpDict)) {
    if (category.includes(cgy)) {
      return [true, category];
    }
  }
  return false;
}

module.exports = {
  generateHelpMessage: generateHelpMessage,
  displayCommandHelp: displayCommandHelp,
  displayCatagoryHelp: displayCatagoryHelp,
  isCommand: isCommand,
  isCatagory: isCatagory,
};
