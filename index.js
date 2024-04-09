require('dotenv').config();
const login = require("fb-chat-api-temp");

const gtf = require("./cmds/guessthefootballer");

const database = require("./cmds/database");

const dig = require("./cmds/dig");

const fs = require("fs");

const profanity = require("./cmdsNew/profanity");



console.log(JSON.parse(require("./env.json")["appState"]));

let appState =[
    {
        "domain": ".facebook.com",
        "expirationDate": 1741948227.163322,
        "hostOnly": false,
        "httpOnly": true,
        "name": "ps_l",
        "path": "/",
        "sameSite": "lax",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "0"
    },
    {
        "domain": ".facebook.com",
        "expirationDate": 1747214228.76252,
        "hostOnly": false,
        "httpOnly": true,
        "name": "datr",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "kQcVZk6ooy75id1VJm7ml73z"
    },
    {
        "domain": ".facebook.com",
        "expirationDate": 1720430781.467188,
        "hostOnly": false,
        "httpOnly": true,
        "name": "fr",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "1HGiXvpPvoYMSI7HP.AWXmaLN4brJzEAXp9y2JnrTZFDw.BmFQm9..AAA.0.0.BmFQm9.AWX0gHGfu2s"
    },
    {
        "domain": ".facebook.com",
        "expirationDate": 1744190781.467117,
        "hostOnly": false,
        "httpOnly": true,
        "name": "xs",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "40%3AY9PqNhVN4lppQA%3A2%3A1712654223%3A-1%3A14454%3A%3AAcV9IfrwP-AVnpmm5bv9LxAfAYAb-7k6YqAMQEGnrg"
    },
    {
        "domain": ".facebook.com",
        "expirationDate": 1744190781.466958,
        "hostOnly": false,
        "httpOnly": false,
        "name": "c_user",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "61552181213388"
    },
    {
        "domain": ".facebook.com",
        "hostOnly": false,
        "httpOnly": false,
        "name": "presence",
        "path": "/",
        "sameSite": null,
        "secure": true,
        "session": true,
        "storeId": null,
        "value": "C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1712654283654%2C%22v%22%3A1%7D"
    },
    {
        "domain": ".facebook.com",
        "expirationDate": 1713259082,
        "hostOnly": false,
        "httpOnly": false,
        "name": "dpr",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "1.25"
    },
    {
        "domain": ".facebook.com",
        "expirationDate": 1741948227.163172,
        "hostOnly": false,
        "httpOnly": true,
        "name": "ps_n",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "0"
    },
    {
        "domain": ".facebook.com",
        "expirationDate": 1747214224.577031,
        "hostOnly": false,
        "httpOnly": true,
        "name": "sb",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "K9YvZV_ogRvkpMSVCd0MvBTA"
    },
    {
        "domain": ".facebook.com",
        "expirationDate": 1713259082,
        "hostOnly": false,
        "httpOnly": false,
        "name": "wd",
        "path": "/",
        "sameSite": "lax",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "1046x718"
    }
]
const vid = require("./cmds/vid");

var prefixes = database.getDatabase("prefix");

const teach = require("./cmds/teach");

const tasurik = require("./cmds/tasurik");

const play = require("./cmds/play");

const MinimalHelpCommand = require("./cmds/help");

const checkAdmin = require("./cmds/basicTools/checkAdmin");

const dm = require("./cmds/dm");

const permit = require("./cmds/permit");

const userinfo = require("./cmds/userinfo");

const qa = require("./cmds/qa");

const threadinfo = require("./cmds/threadinfo");

const keepON = require("./cmds/keepON");

const resend = require("./cmds/resend");

const unsend = require("./cmds/unsend");

const calculator = require("./cmds/calculator");

const encoder = require("./cmds/encoder");

const translate = require("./cmds/translate");

const nsfw = require("./cmds/nsfw");

const wpm = require("./cmds/wpm");

const repans = require("./cmds/repans");

const evaluate = require("./cmds/eval");

const kick = require("./cmds/kick");

const anagram = require("./cmds/anagram");

const wordguess = require("./cmds/wordguess");

const blacklister = require("./cmds/blacklist");

const troll = require("./cmds/troll");

const gif = require("./cmds/gif");

const meme = require("./cmds/meme");

const weather = require("./cmds/weather");

const fact = require("./cmds/fact");

const quote = require("./cmds/quote");

const setNickname = require("./cmds/setNickname");

const gpt = require("./cmds/gpt");

const ai = require("./cmds/ai");

const imagine = require("./cmds/imagine");

const bard = require("./cmds/bard");

const bard2 = require("./cmds/bard2");

const herc = require("./cmds/herc");

const bored = require("./cmds/bored");

const randomapi = require("./cmds/randomapi");

const webss = require("./cmds/webss");

const say = require("./cmds/say");

const balance = require("./cmds/balance");

const slap = require("./cmds/slap");

const unsplash = require("./cmds/unsplash");

const pokedex = require("./cmds/pokedex");

const pokeguess = require("./cmds/pokeguess");

const quiz = require("./cmds/quiz");

const uid = require("./cmds/uid");

const adduser = require("./cmds/adduser");

const sim = require("./cmds/sim");

const zuck = require("./cmds/zuck");

const pfp = require("./cmds/pfp");

const tweet = require("./cmds/tweet");

const fbhack = require("./cmds/fbhack");

const cf = require("./cmds/cricketFixtures");

const livescore = require("./cmds/livescore");

const rainbow = require("./cmds/rainbow");

const nsim = require("./cmds/nsim");

const remini = require("./cmds/4k");

const triggered = require("./cmds/triggered");

const trash = require("./cmds/trash");

const deletepic = require("./cmds/delete");

const asciiart = require("./cmds/asciiart");

const lyrics = require("./cmds/lyrics");

const liner = require("./cmds/liner");

const gemini = require("./cmds/gemini");

const neko = require("./cmds/neko");

const quizfootballer = require("./cmds/quizfootballer");

keepON();

var apila = null;
var eventla = null;
// check cmdsNew Folder for all handle commands
console.log("LOADING HANDLE COMMANDS: 🔃");
var handleCommands = [];

for (const file of fs.readdirSync("./cmdsNew")) {
  if (!file.endsWith(".js")) continue;
  const command = require(`./cmdsNew/${file}`);

  if (command.handle) {
    handleCommands.push(command.handle);
  }
}

console.log("LOADED HANDLE COMMANDS ✅");

let apii;

const startApp = () => {
  apii = login({ appState: appState }, (err, api) => {
    apila = api;
    if (err) console.log(err);

    api.setOptions({ listenEvents: true });

    var listenEmitter = api.listenMqtt(async (err, event) => {
      if (err) {
        console.log(err);
        process.exit();
      }
      

      console.log(event);

      switch (event.type) {
        case "message":
          eventla = event;
          const blacklisted = database.getDatabase("blacklisted");
          if (blacklisted[event.senderID] == true) {
            //api.sendMessage("You are blacklisted from using this bot. If you think it is a mistake please contact with the admin!", event.threadID, event.messageID)
            break;
          }

          if (sim.isSimOn(event)) {
            sim.simsimi(api, event);
          }
          wpm.handleWpm(api, event);

          wordguess.handleChampionship(api, event);

          gtf.handleGuessTheFootballer(api, event);

          anagram.handle_anagram(api, event);

          wordguess.handle_wordguess(api, event);

          pokeguess.handlepokeguess(api, event);

          balance.handle_rob(api, event);

          quiz.handle_quiz(api, event);

          quizfootballer.handlefootballerquiz(api, event);

          resend.saveForResend(api, event);

          // check all handle

          handleCommands.forEach((handle) => {
            handle(api, event);
          });

          let msg = event.body;

          if (Object.keys(prefixes).includes(event.threadID)) {
            //msg = msg.replace(prefixes[event.threadID], "-");
            msg = msg.replace("!", "-");
          }

          let args = event.body.split(" ").slice(1);


            let data = await profanity.check_profanity(msg)
            if (data.isProfane) {
              if (!nsfw.checkNSFW(api, event)){
                console.log(data)
                api.sendMessage('⚠️ Profanity Detected! Please do not use those words in the chat! And I will also not execute your command for this!', event.threadID, event.messageID)
                return
              }

            }
          


          console.log(msg);
          if (msg.startsWith("-vid")) {
            vid.vid(api, event);
          } else if (
            fs.existsSync(
              __dirname +
                "/cmdsNew/" +
                msg.split(" ")[0].replace("-", "") +
                ".js"
            ) &&
            msg.startsWith("-")
          ) {
            if (
              require(__dirname +
                "/cmdsNew/" +
                msg.split(" ")[0].replace("-", "") +
                ".js").config.permission == "all"
            ) {
              require(__dirname +
                "/cmdsNew/" +
                msg.split(" ")[0].replace("-", "") +
                ".js").run(api, event, args);
            } else if (
              require(__dirname +
                "/cmdsNew/" +
                msg.split(" ")[0].replace("-", "") +
                ".js").config.permission == "grpadmin"
            ) {
              if (await checkAdmin.isGrpAdmin(api, event)) {
                require(__dirname +
                  "/cmdsNew/" +
                  msg.split(" ")[0].replace("-", "") +
                  ".js").run(api, event, args);
              } else {
                api.sendMessage(
                  "Sorry! The command can only be invoked by the Group Admins!",
                  event.threadID
                );
              }
            } else if (
              require(__dirname +
                "/cmdsNew/" +
                msg.split(" ")[0].replace("-", "") +
                ".js").config.permission == "admin"
            ) {
              if (checkAdmin.isAdmin(event.senderID)) {
                require(__dirname +
                  "/cmdsNew/" +
                  msg.split(" ")[0].replace("-", "") +
                  ".js").run(api, event, args);
              } else {
                api.sendMessage(
                  "Sorry! The command can only be invoked by the Bot Admins!",
                  event.threadID,
                  event.messageID
                );
              }
            }
          } else if (msg.startsWith("-gpt4")) {
            herc.gpt4(api, event);
          } else if (msg.startsWith("-gpt")) {
            gpt.gpt(api, event);
          } else if (msg.startsWith("-ai")) {
            ai.ai(api, event);
          } else if (msg == "-sim") {
            sim.sim(api, event);
          } else if (msg.startsWith("-adduser")) {
            if (await checkAdmin.isGrpAdmin(api, event)) {
              adduser.adduser(api, event);
            } else {
              api.sendMessage(
                "Sorry! The command can only be invoked by the bot admin!",
                event.threadID
              );
            }
          } else if (msg.startsWith("-herc")) {
            if (msg.includes("v3")) {
              herc.aiharcbetav3(api, event);
            } else if (msg.includes("beta")) {
              herc.aiharcbeta(api, event);
            } else {
              herc.aiherc(api, event);
            }
          } else if (msg.startsWith("-bard2")) {
            bard2.bard(api, event);
            //api.sendMessage("This feature is currently disabled.", event.threadID, event.messageID)
          } else if (msg.startsWith("-gtfleaderboard")) {
            gtf.gtfleaderboard(api, event);
          } else if (msg.startsWith("-gtf")) {
            gtf.guessFootballer(api, event);
          } else if (msg.startsWith("-quizfootballer")) {
            quizfootballer.quizfootballer(api, event);
          } else if (msg.startsWith("-bard")) {
            bard2.bard(api, event);
            //api.sendMessage("This feature is currently disabled.", event.threadID, event.messageID)
          } else if (msg.startsWith("-liner")) {
            liner.liner(api, event);
            //api.sendMessage("This feature is currently disabled.", event.threadID, event.messageID)
          } else if (msg.startsWith("-gemini")) {
            gemini.gemini(api, event);
            //api.sendMessage("This feature is currently disabled.", event.threadID, event.messageID)
          } else if (msg.startsWith("-palm")) {
            bard.palm(api, event);
          } else if (msg.startsWith("-nsim")) {
            nsim.nsim(api, event);
          } else if (msg.startsWith("-nteach")) {
            nsim.nteach(api, event);
          } else if (msg.startsWith("-imagineherc")) {
            imagine.imagineHerc(api, event);
          } else if (msg.startsWith("-dalle")) {
            imagine.imagineHerc(api, event, "v3");
          } else if (msg.startsWith("-balance") || msg.startsWith("-bal")) {
            balance.balance(api, event);
          } else if (msg.startsWith("-work")) {
            balance.work(api, event);
          } else if (msg.startsWith("-steal")) {
            balance.steal(api, event);
          } else if (msg.startsWith("-invest")) {
            balance.invest(api, event);
          } else if (msg.startsWith("-give")) {
            balance.give(api, event);
          } else if (msg.startsWith("-daily")) {
            balance.daily(api, event);
          } else if (msg.startsWith("-deposit") || msg.startsWith("-dep")) {
            balance.deposit(api, event);
          } else if (msg.startsWith("-withdraw") || msg.startsWith("-with")) {
            balance.withdraw(api, event);
          } else if (msg == "-beg") {
            balance.beg(api, event);
          } else if (
            msg.startsWith("-buybankspace") ||
            msg.startsWith("-buybank")
          ) {
            balance.buyBankSpace(api, event);
          } else if (msg.startsWith("-rob")) {
            balance.rob(api, event);
          } else if (msg == "-walletboard") {
            balance.walletboard(api, event);
          } else if (msg == "-bankboard") {
            balance.bankboard(api, event);
          } else if (msg.startsWith("-pokedex")) {
            pokedex.pokedex(api, event);
          } else if (msg == "-pokeguess") {
            pokeguess.pokeguess(api, event);
          } else if (msg == "-pokeguessleaderboard") {
            pokeguess.pokeguessleaderboard(api, event);
          } else if (msg.startsWith("-quiz")) {
            quiz.quiz(api, event);
          } else if (msg == "-pokeguessleaderboard") {
            quiz.quiz_leaderboard(api, event);
          } else if (msg.startsWith("-lexica")) {
            imagine.imagineHerc(api, event, "lexica");
          } else if (msg.startsWith("-blur")) {
            dig.blur(api, event);
          } else if (msg.startsWith("-gay")) {
            dig.gay(api, event);
          } else if (msg.startsWith("-greyscale")) {
            dig.greyscale(api, event);
          } else if (msg.startsWith("-invert")) {
            dig.invert(api, event);
          } else if (msg.startsWith("-sepia")) {
            dig.sepia(api, event);
          } else if (msg.startsWith("-blink")) {
            dig.blink(api, event);
          } else if (msg.startsWith("-triggered")) {
            dig.triggered(api, event);
          } else if (msg.startsWith("-ad")) {
            dig.ad(api, event);
          } else if (msg.startsWith("-affect")) {
            dig.affect(api, event);
          } else if (msg.startsWith("-batslap")) {
            dig.batslap(api, event);
          } else if (msg.startsWith("-beautiful")) {
            dig.beautiful(api, event);
          } else if (msg.startsWith("-bed")) {
            dig.bed(api, event);
          } else if (msg.startsWith("-bobross")) {
            dig.bobross(api, event);
          } else if (msg.startsWith("-clown")) {
            dig.clown(api, event);
          } else if (msg.startsWith("-confusedstonk")) {
            dig.confusedstonk(api, event);
          } else if (msg.startsWith("-deepfry")) {
            dig.deepfry(api, event);
          } else if (msg.startsWith("-delete")) {
            dig.deletepic(api, event);
          } else if (msg.startsWith("-discordblack")) {
            dig.discordblack(api, event);
          } else if (msg.startsWith("-discordblue")) {
            dig.discordblue(api, event);
          } else if (msg.startsWith("-doublestonk")) {
            dig.doublestonk(api, event);
          } else if (msg.startsWith("-facepalm")) {
            dig.facepalm(api, event);
          } else if (msg.startsWith("-heartbreaking")) {
            dig.heartbreaking(api, event);
          } else if (msg.startsWith("-hitler")) {
            dig.hitler(api, event);
          } else if (msg.startsWith("-jail")) {
            dig.jail(api, event);
          } else if (msg.startsWith("-karaba")) {
            dig.karaba(api, event);
          } else if (msg.startsWith("-kiss")) {
            dig.kiss(api, event);
          } else if (msg.startsWith("-lisapresentation")) {
            dig.lisapresentation(api, event);
          } else if (msg.startsWith("-mikkelsen")) {
            dig.mikkelsen(api, event);
          } else if (msg.startsWith("-mms")) {
            dig.mms(api, event);
          } else if (msg.startsWith("-notstonk")) {
            dig.notstonk(api, event);
          } else if (msg.startsWith("-podium")) {
            dig.podium(api, event);
          } else if (msg.startsWith("-poutine")) {
            dig.poutine(api, event);
          } else if (msg.startsWith("-rip")) {
            dig.rip(api, event);
          } else if (msg.startsWith("-snyder")) {
            dig.snyder(api, event);
          } else if (msg.startsWith("-spank")) {
            dig.spank(api, event);
          } else if (msg.startsWith("-stonk")) {
            dig.stonk(api, event);
          } else if (msg.startsWith("-tatoo")) {
            dig.tatoo(api, event);
          } else if (msg.startsWith("-thomas")) {
            dig.thomas(api, event);
          } else if (msg.startsWith("-trash")) {
            dig.trash(api, event);
          } else if (msg.startsWith("-wanted")) {
            dig.wanted(api, event);
          } else if (msg.startsWith("-circle")) {
            dig.circle(api, event);
          } else if (msg.startsWith("-color")) {
            dig.color(api, event);
          } else if (msg.startsWith("-denoise")) {
            dig.denoise(api, event);
          } else if (msg.startsWith("-mirror")) {
            dig.mirror(api, event);
          } else if (msg.startsWith("-prodia")) {
            imagine.imagineHerc(api, event, "prodia");
          } else if (msg.startsWith("-imagine")) {
            imagine.imagine(api, event);
          } else if (msg.startsWith("-unsplash")) {
            unsplash.unsplash(api, event);
          } else if (msg.startsWith("-webss")) {
            webss.webss(api, event);
          } else if (msg.startsWith("-slap")) {
            slap.slap(api, event);
          } else if (msg.startsWith("-zuck")) {
            zuck.zuck(api, event);
          } else if (msg.startsWith("-pfp")) {
            pfp.pfp(api, event);
          } else if (msg.startsWith("-tweet")) {
            tweet.tweet(api, event);
          } else if (msg.startsWith("-fbhack")) {
            fbhack.fbhack(api, event);
          } else if (msg == "-neko") {
            neko.neko(api, event);
          } else if (msg == "-waifu") {
            neko.waifu(api, event);
          } else if (msg == "-husbando") {
            neko.husbando(api, event);
          } else if (msg == "-kitsune") {
            neko.kitsune(api, event);
          } else if (msg == "-lurk") {
            neko.lurk(api, event);
          } else if (msg == "-shoot") {
            neko.shoot(api, event);
          } else if (msg == "-sleep") {
            neko.sleep(api, event);
          } else if (msg == "-shrug") {
            neko.shrug(api, event);
          } else if (msg == "-stare") {
            neko.stare(api, event);
          } else if (msg == "-wave") {
            neko.wave(api, event);
          } else if (msg == "-poke") {
            neko.poke(api, event);
          } else if (msg == "-smile") {
            neko.smile(api, event);
          } else if (msg == "-peck") {
            neko.peck(api, event);
          } else if (msg == "-wink") {
            neko.wink(api, event);
          } else if (msg == "-blush") {
            neko.blush(api, event);
          } else if (msg == "-smug") {
            neko.smug(api, event);
          } else if (msg == "-tickle") {
            neko.tickle(api, event);
          } else if (msg == "-yeet") {
            neko.yeet(api, event);
          } else if (msg == "-think") {
            neko.think(api, event);
          } else if (msg == "-highfive") {
            neko.highfive(api, event);
          } else if (msg == "-feed") {
            neko.feed(api, event);
          } else if (msg == "-bite") {
            neko.bite(api, event);
          } else if (msg == "-bored") {
            neko.bored(api, event);
          } else if (msg == "-nom") {
            neko.nom(api, event);
          } else if (msg == "-yawn") {
            neko.yawn(api, event);
          } else if (msg == "-facepalm") {
            neko.facepalm(api, event);
          } else if (msg == "-cuddle") {
            neko.cuddle(api, event);
          } else if (msg == "-kick") {
            neko.kick(api, event);
          } else if (msg == "-happy") {
            neko.happy(api, event);
          } else if (msg == "-hug") {
            neko.hug(api, event);
          } else if (msg == "-baka") {
            neko.baka(api, event);
          } else if (msg == "-pat") {
            neko.pat(api, event);
          } else if (msg == "-nod") {
            neko.nod(api, event);
          } else if (msg == "-nope") {
            neko.nope(api, event);
          } else if (msg == "-kiss") {
            neko.kiss(api, event);
          } else if (msg == "-dance") {
            neko.dance(api, event);
          } else if (msg == "-punch") {
            neko.punch(api, event);
          } else if (msg == "-handshake") {
            neko.handshake(api, event);
          } else if (msg == "-slap") {
            neko.slap(api, event);
          } else if (msg == "-cry") {
            neko.cry(api, event);
          } else if (msg.startsWith("-botoff")) {
            require("./cmds/botoff").botoff(api, event);
          } else if (msg == "-pout") {
            neko.pout(api, event);
          } else if (msg == "-handhold") {
            neko.handhold(api, event);
          } else if (msg == "-thumbsup") {
            neko.thumbsup(api, event);
          } else if (msg == "-laugh") {
            neko.laugh(api, event);
          } else if (msg.startsWith("-cricketFixtures")) {
            cf.cricketFixtures(api, event);
          } else if (msg.startsWith("-livescore")) {
            livescore.livescore(api, event);
          } else if (msg.startsWith("-say")) {
            say.say(api, event);
          } else if (msg.startsWith("-fact")) {
            fact.fact(api, event);
          } else if (msg.startsWith("-quote")) {
            quote(api, event);
          } else if (msg.startsWith("-play")) {
            play.play(api, event);
          } else if (msg.startsWith("-setNickname")) {
            setNickname.setNickname(api, event);
          } else if (msg.startsWith("-setPrefix")) {
            prefixes[event.threadID] = msg.split("-setPrefix")[1].trim();
            database.setDatabase("prefix", prefixes);
            api.sendMessage(
              "Prefix setting was successful",
              event.threadID,
              event.messageID
            );
          } else if (msg == "-help") {
            api.sendMessage(
              MinimalHelpCommand.generateHelpMessage(),
              event.threadID
            );
          } else if (msg.startsWith("-kick")) {
            kick.kick(api, event);
          } else if (msg.startsWith("-help")) {
            let command = msg.split("-help")[1];
            console.log(command);
            if (MinimalHelpCommand.isCommand(command.trim())) {
              api.sendMessage(
                MinimalHelpCommand.displayCommandHelp(command.trim()),
                event.threadID
              );
            } else if (MinimalHelpCommand.isCatagory(command.trim())[0]) {
              catagory = MinimalHelpCommand.displayCatagoryHelp(
                MinimalHelpCommand.isCatagory(command.trim())[1]
              );
              api.sendMessage(catagory, event.threadID);
            } else {
              api.sendMessage(
                MinimalHelpCommand.displayCommandHelp(command.trim()),
                event.threadID
              );
            }
          } else if (msg.startsWith("-teach")) {
            teach.teach(api, event);
          } else if (msg.startsWith("-troll")) {
            troll.troll(api, event);
          } else if (msg.startsWith("-meme")) {
            meme.meme(api, event);
          } else if (msg.startsWith("-weather")) {
            weather.weather(api, event);
          } else if (msg.startsWith("-repans")) {
            repans.repans(api, event);
          } else if (msg.startsWith("-unteach")) {
            teach.unteach(api, event);
          } else if (msg.startsWith("-tasurik")) {
            tasurik.tasurik(api, event);
          } else if (msg.startsWith("-gif ")) {
            gif.gif(api, event);
          } else if (msg.startsWith("-dm")) {
            if (checkAdmin.isAdmin(event.senderID)) {
              dm.dm(api, event);
            } else {
              api.sendMessage(
                "Sorry! The command can only be invoked by the bot admin!",
                event.threadID
              );
            }
          } else if (msg == "-getAppState") {
            if (checkAdmin.isAdmin(event.senderID)) {
              api.sendMessage(
                JSON.stringify(api.getAppState()),
                event.threadID
              );
            }
          } else if (msg.startsWith("-permit")) {
            permit.permit(api, event);
          } else if (msg.startsWith("-unpermit")) {
            permit.unpermit(api, event);
          } else if (msg.startsWith("-wordguesschampionship")) {
            wordguess.wordguesschampionship(api, event);
          } else if (msg.startsWith("-userinfo")) {
            userinfo.userinfo(api, event);
          } else if (msg.startsWith("-qa")) {
            qa.qa(api, event, msg.split("-qa")[1]);
          } else if (msg.startsWith("-threadinfo")) {
            threadinfo.threadinfo(api, event);
          } else if (msg == "Am I admin?") {
            let reply = (await checkAdmin.isGrpAdmin(api, event))
              ? "Yes"
              : "No";
            console.log(reply);
            api.sendMessage(reply, event.threadID);
          } else if (msg == "-resend") {
            if (await checkAdmin.isGrpAdmin(api, event)) {
              resend.resend(api, event);
            } else {
              api.sendMessage(
                "Sorry! The command can only be invoked by the group admin!",
                event.threadID
              );
            }
          } else if (msg.startsWith("-calc") || msg.startsWith("-calculate")) {
            calculator.calc(api, event);
          } else if (msg.startsWith("-eval") || msg.startsWith("-evaljs")) {
            if (checkAdmin.isAdmin(event.senderID)) {
              evaluate.eval(api, event);
            } else {
              api.sendMessage(
                "Sorry! The command can only be invoked by the bot admin!",
                event.threadID
              );
            }
          } else if (msg.startsWith("-encodebin") || msg.startsWith("-ebin")) {
            encoder.encodebin(api, event);
          } else if (msg.startsWith("-decodebin") || msg.startsWith("-debin")) {
            encoder.decodebin(api, event);
          } else if (
            msg.startsWith("-decodemorse") ||
            msg.startsWith("-demorse")
          ) {
            encoder.decodemorse(api, event);
          } else if (
            msg.startsWith("-encodemorse") ||
            msg.startsWith("-emorse")
          ) {
            encoder.encodemorse(api, event);
          } else if (msg == "-resetResend") {
            if (await checkAdmin.isAdmin(event.senderID)) {
              resend.resetResend(api, event);
            } else {
              api.sendMessage(
                "Sorry! The command can only be invoked by the bot admin!",
                event.threadID
              );
            }
          } else if (msg.startsWith("-blacklist")) {
            if (await checkAdmin.isAdmin(event.senderID)) {
              blacklister.blacklist(api, event);
            } else {
              api.sendMessage(
                "Sorry! The command can only be invoked by the bot admin!",
                event.threadID
              );
            }
          } else if (msg.startsWith("-unblacklist")) {
            if (await checkAdmin.isAdmin(event.senderID)) {
              blacklister.unblacklist(api, event);
            } else {
              api.sendMessage(
                "Sorry! The command can only be invoked by the bot admin!",
                event.threadID
              );
            }
          } else if (msg.startsWith("-translate")) {
            translate.translate(api, event);
          } else if (msg == "-nsfw") {
            if (
              (await checkAdmin.isGrpAdmin(api, event)) ||
              event.isGroup == false
            ) {
              nsfw.NSFW(api, event);
            } else {
              api.sendMessage(
                "Sorry! The command can only be invoked by the group admin!",
                event.threadID
              );
            }
          } else if (msg == "-wpmleaderboard") {
            wpm.wpm_leaderboard(api, event);
          } else if (msg == "-bored") {
            bored.bored(api, event);
          } else if (msg == "-randomAPI") {
            randomapi.randomapi(api, event);
          } else if (msg == "-anagramleaderboard") {
            anagram.anagramleaderboard(api, event);
          } else if (msg.startsWith("-lyrics")) {
            lyrics.lyrics(api, event);
          } else if (msg.startsWith("-wpm")) {
            wpm.wpm(api, event);
          } else if (msg.startsWith("-rainbow") || msg.startsWith("-gay")) {
            rainbow.rainbow(api, event);
          } else if (msg.startsWith("-anagram")) {
            anagram.anagram(api, event);
          } else if (msg.startsWith("-trigger")) {
            triggered.triggered(api, event);
          } else if (msg.startsWith("-trash")) {
            trash.trash(api, event);
          } else if (msg.startsWith("-delete")) {
            deletepic.deletepic(api, event);
          } else if (msg.startsWith("-wordguess")) {
            wordguess.wordguess(api, event);
          } else if (msg == "-count") {
            let i = await api.getThreadInfo(event.threadID);
            console.log(Object.keys(i));
            console.log(i.messageCount);
            console.log(i.nicknames);
            i = await i.messageCount;

            await api.sendMessage(
              "Total Messages in this group: " + i,
              event.threadID
            );
          }

          //END OF THE LISTENING PART!
          // check ./cmdsNew file and use loop to get if any of them matches the alias
          else if (msg.startsWith("-")) {
            let done = false
            let cmd = msg.split(" ")[0];
            fs.readdir("./cmdsNew", (err, files) => {
              if (err) {
                throw err
              }
              files.forEach(async (file) => {
                if (file.endsWith(".js")) {
                  let command = require(`./cmdsNew/${file}`);
                  if (!command.config.alias) {
                    return
                  }
                  if (command.config.alias.split("|").includes(cmd.replace('-', ''))) {
                    done = true
                    let permit = command.config.permission;
                    if (permit == "admin" && !checkAdmin.isAdmin(event.senderID)) {
                      api.sendMessage("Sorry! The command can only be invoked by the bot admin!", event.threadID)
                    }
                    else if (permit == "group" && await checkAdmin.isGrpAdmin(api, event)) {
                      api.sendMessage("Sorry! The command can only be invoked by the group admin!", event.threadID)
                      
                    }
                    else{
                      command.run(api, event, args);
                    }
               
                  }
                }
              })
              if (!done) {
                          //END OF THE LISTENING PART!

            api.sendMessage(
              "Command: " +
                event.body.split(" ")[0] +
                " Not Found! Please use -help for all commands!",
              event.threadID
            );
          
              }
            })

          } else {
            console.log(msg);
          }
          break;

        case "message_reply":
          resend.saveForResend(api, event);

          let rmsg = event.body;
          let message = event.body;
          let arguments = message.split(" ").slice(1);
          let command = message.split(" ")[0].replace();
          command = command.substring(1)


          if (Object.keys(prefixes).includes(event.threadID)) {
            rmsg = rmsg.replace(prefixes[event.threadID], "-");
            
          }

          vid.handlevid(api, event);
          play.handleplay(api, event);
           if (fs.existsSync(`./cmdsNew/${command}.js`)) {
            if (require(`./cmdsNew/${command}.js`).config.isReplyCommand == true)  {
              require(`./cmdsNew/${command}.js`).run(api, event, arguments);
              
            }
            

          }

          if (rmsg == "-unsend") {
            unsend.unsend(api, event);
          } else if (rmsg.startsWith("-tasurik")) {
            tasurik.tasurik(api, event);
          } 
          else if (rmsg == "-uid") {
            uid.uid(api, event);
          }  else if (rmsg.startsWith("-asciiart")) {
            asciiart.asciiart(api, event);
          }
          if (sim.isSimOn(event)) {
            sim.simsimi(api, event);
          }

        case "event":
          api.sendMessage(
            event.logMessageBody,
            event.threadID,
            event.messageID
          );
          break;

        case "message_unsend":
          console.log(event);
          resend.handleResend(api, event);
      }
    });
  });
  console.log("App started!");
};

const handleErrors = (error) => {
  console.error("Error occurred:", error); // Using console.error for clarity

  // Log the error details to the console
  console.log("Error details:", error.stack || error.message || error);

  // Send error messages using api.sendMessage if available
  if (apila && apila.sendMessage) {
    let errorMessage = `
      An error occurred ❌:\n
      Error Name: ${error.name || "Unknown"}\n
      Error Message: ${error.message || "No message provided"}\n
      Stack Trace: ${error.stack || "No stack trace available"}
    `;

    // Extract additional details based on error type
    if (error.isAxiosError) {
      // Axios error
      errorMessage += `
        Axios Error Details:
         - Request: ${error.config.method.toUpperCase()}
        - Status: ${error.response ? error.response.status : "N/A"}
        - Data: ${error.response ? JSON.stringify(error.response.data) : "N/A"}

      `;
    } else if (error instanceof Error) {
      // Standard Error object
      errorMessage += `
        Error Details:
        - Name: ${error.name || "N/A"}
        - Message: ${error.message || "N/A"}
      `;
    } else if (typeof error === "object") {
      // Other types of objects
      errorMessage += `
        Object Details:
        - Type: ${typeof error}
        - Object: ${JSON.stringify(error)}
      `;
    } else {
      // Other types of errors or values
      errorMessage += `
        Unknown Error Details:
        - Type: ${typeof error}
        - Value: ${error}
      `;
    }

    console.log(errorMessage);
    errorMessage = errorMessage.split(".").join("•");
    errorMessage+='If you want to report this error, please contact the developer: Tasawar Ahmed Shuddho.\nHis Facebook id: https://www.facebook.com/profile.php?id=100088054962292'


    // Send error message
    apila
      .sendMessage(errorMessage, "6997238410394984")
      .then(() => console.log("Error message sent successfully"))
      .catch((err) => console.error("Error sending message:", err));

    // Optionally, send error message to specific thread
    if (eventla!=null) {
      apila
        .sendMessage(errorMessage, eventla.threadID, eventla.messageID)
        
       
    }
  }

  // Additional error handling logic can be added here
};

const restartApp = () => {
  console.log("Restarting app...");
  //apii.logout()
  apii.stopListening();
  // Additional cleanup logic before restarting can be added here
  startApp();
  setTimeout(restartApp, 10 * 1000); // Restart every hour (60 minutes * 60 seconds * 1000 milliseconds)
};

// Start the application
startApp();
var cron = require("node-cron");
cron.schedule("* * * * *", () => {
  console.log("running a task at the start of every hour");
  //function logic goes here
});
// Global error event handler
process.on("uncaughtException", (error) => {
  handleErrors(error);
});

process.on("unhandledRejection", (reason, promise) => {
  handleErrors(reason);
});

// Restart the application every hour
setTimeout(restartApp, 10 * 1000);

// Keep the process alive
process.stdin.resume();
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Handle process termination
process.on("SIGINT", () => {
  console.log("App is terminating...");
  // Additional cleanup logic can be added here

  // Exit the process
  process.exit();
});

setTimeout(() => {
  process.exit();
}, getRandomInt(3600 * 1000, 3700 * 1000));
