const login = require("fb-chat-api-temp");

const database = require("./database");

console.log(process.env)

const appState = [
    {
        "key": "dbln",
        "value": "%7B%2261552181213388%22%3A%220iAqVOT2%22%7D",
        "domain": "facebook.com",
        "path": "/login/device-based/",
        "hostOnly": false,
        "creation": "2024-01-07T08:31:24.251Z",
        "lastAccessed": "2024-01-07T08:31:24.251Z"
    },
    {
        "key": "sb",
        "value": "IavDZMwOW9d05Iej_AlPCqDR",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-01-07T08:31:24.251Z",
        "lastAccessed": "2024-01-07T08:31:24.251Z"
    },
    {
        "key": "wd",
        "value": "1872x924",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-01-07T08:31:24.251Z",
        "lastAccessed": "2024-01-07T08:31:24.251Z"
    },
    {
        "key": "datr",
        "value": "RjKVZYaD1rLlJsgNF2d-Cg_r",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-01-07T08:31:24.251Z",
        "lastAccessed": "2024-01-07T08:31:24.251Z"
    },
    {
        "key": "c_user",
        "value": "61552181213388",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-01-07T08:31:24.251Z",
        "lastAccessed": "2024-01-07T08:31:24.252Z"
    },
    {
        "key": "xs",
        "value": "24%3A4dKP7KgHDm6thQ%3A2%3A1704276639%3A-1%3A14454%3A%3AAcXPMOsyN0-tJwt6RA8pwCUlc5u4-BTryFV8nq6ROg",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-01-07T08:31:24.252Z",
        "lastAccessed": "2024-01-07T08:31:24.252Z"
    },
    {
        "key": "fr",
        "value": "1UFJj6TOq6pM1K1sj.AWVtfWsUDl4Pyul3J4XRdjtKb9Y.BlmQuX.75.AAA.0.0.BlmQuX.AWURWQKf6_o",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-01-07T08:31:24.252Z",
        "lastAccessed": "2024-01-07T08:31:24.252Z"
    }
]

const vid = require("./vid");

var prefixes = database.getDatabase("prefix");

const teach = require("./teach");

const tasurik = require("./tasurik");

const play = require("./play");

const MinimalHelpCommand = require("./help");

const checkAdmin = require("./basicTools/checkAdmin");

const dm = require("./dm");

const permit = require("./permit");

const userinfo = require("./userinfo");

const qa = require("./qa");

const threadinfo = require("./threadinfo");

const keepON = require("./keepON");

const resend = require("./resend");

const unsend = require("./unsend");

const calculator = require("./calculator");

const encoder = require("./encoder");

const translate = require("./translate");

const nsfw = require("./nsfw");

const wpm = require("./wpm");

const repans = require("./repans");

const evaluate = require("./eval");

const kick = require("./kick");

const anagram = require("./anagram");

const wordguess = require("./wordguess");

const blacklister = require("./blacklist");

const troll = require("./troll");

const gif = require("./gif");

const meme = require("./meme");

const weather = require("./weather");

const fact = require("./fact");

const quote = require("./quote");

const setNickname = require("./setNickname");

const gpt = require("./gpt");

const ai = require("./ai");

const imagine = require("./imagine");

const bard = require("./bard");

const bard2 = require("./bard2");

const herc = require("./herc");

const bored = require("./bored");

const randomapi = require("./randomapi");

const webss = require("./webss");

const say = require("./say");

const balance = require("./balance");

const slap = require("./slap");

const unsplash = require("./unsplash");

const pokedex = require("./pokedex");

const pokeguess = require("./pokeguess");

const quiz = require("./quiz");

const uid = require("./uid");

const adduser = require("./adduser");

const sim = require("./sim");

const zuck = require("./zuck");

const pfp = require("./pfp");

const tweet = require("./tweet");

const fbhack = require("./fbhack");

const cf = require("./cricketFixtures");

const livescore = require("./livescore");

const rainbow = require("./rainbow");

const nsim = require("./nsim");

const remini = require("./4k");

const triggered = require("./triggered");

const trash = require("./trash");

const deletepic = require("./delete");

const asciiart = require("./asciiart");

const lyrics = require("./lyrics");

const liner = require("./liner");

const gemini = require("./gemini");

const neko = require("./neko");



keepON();

let apii;

const startApp = () => {
  apii = login({ appState: appState }, (err, api) => {
    if (err) console.log(err);

    api.setOptions({ listenEvents: true });

    var listenEmitter = api.listenMqtt(async (err, event) => {
      if (err) return console.log(err);

      switch (event.type) {
        case "message":
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

          anagram.handle_anagram(api, event);

          wordguess.handle_wordguess(api, event);

          pokeguess.handlepokeguess(api, event);

          balance.handle_rob(api, event);

          quiz.handle_quiz(api, event);

          resend.saveForResend(api, event);

          let msg = event.body;

          if (Object.keys(prefixes).includes(event.threadID)) {
            msg = msg.replace(prefixes[event.threadID], "-");
          }
          console.log(msg);
          if (msg.startsWith("-vid")) {
            vid.vid(api, event);
          } else if (msg.startsWith("-gpt4")) {
            herc.gpt4(api, event);
          } else if (msg.startsWith("-gpt")) {
            gpt.gpt(api, event);
          } else if (msg.startsWith("-ai")) {
            ai.ai(api, event);
          } else if (msg == "-sim") {
            sim.sim(api, event);
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
          } else if (msg.startsWith("-bard")) {
            bard.bard(api, event);
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
              event.messageID,
            );
          } else if (msg == "-help") {
            api.sendMessage(
              MinimalHelpCommand.generateHelpMessage(),
              event.threadID,
            );
          } else if (msg.startsWith("-kick")) {
            kick.kick(api, event);
          } else if (msg.startsWith("-help")) {
            let command = msg.split("-help")[1];
            console.log(command);
            if (MinimalHelpCommand.isCommand(command.trim())) {
              api.sendMessage(
                MinimalHelpCommand.displayCommandHelp(command.trim()),
                event.threadID,
              );
            } else if (MinimalHelpCommand.isCatagory(command.trim())[0]) {
              catagory = MinimalHelpCommand.displayCatagoryHelp(
                MinimalHelpCommand.isCatagory(command.trim())[1],
              );
              api.sendMessage(catagory, event.threadID);
            } else {
              api.sendMessage(
                MinimalHelpCommand.displayCommandHelp(command.trim()),
                event.threadID,
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
                event.threadID,
              );
            }
          } else if (msg == "-getAppState") {
            if (checkAdmin.isAdmin(event.senderID)) {
              api.sendMessage(
                JSON.stringify(api.getAppState()),
                event.threadID,
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
                event.threadID,
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
                event.threadID,
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
                event.threadID,
              );
            }
          } else if (msg.startsWith("-adduser")) {
            if (await checkAdmin.isGrpAdmin(api, event)) {
              adduser.adduser(api, event);
            } else {
              api.sendMessage(
                "Sorry! The command can only be invoked by the bot admin!",
                event.threadID,
              );
            }
          } else if (msg.startsWith("-blacklist")) {
            if (await checkAdmin.isAdmin(event.senderID)) {
              blacklister.blacklist(api, event);
            } else {
              api.sendMessage(
                "Sorry! The command can only be invoked by the bot admin!",
                event.threadID,
              );
            }
          } else if (msg.startsWith("-unblacklist")) {
            if (await checkAdmin.isAdmin(event.senderID)) {
              blacklister.unblacklist(api, event);
            } else {
              api.sendMessage(
                "Sorry! The command can only be invoked by the bot admin!",
                event.threadID,
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
                event.threadID,
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
              event.threadID,
            );
          }

          //END OF THE LISTENING PART!
          else if (msg.startsWith("-")) {
            api.sendMessage(
              "Command: " +
                event.body.split(" ")[0] +
                " Not Found! Please use -help for all commands!",
              event.threadID,
            );
          } else {
            console.log(msg);
          }
          break;

        case "message_reply":
          resend.saveForResend(api, event);

          let rmsg = event.body;

          if (Object.keys(prefixes).includes(event.threadID)) {
            rmsg = rmsg.replace(prefixes[event.threadID], "-");
          }

          vid.handlevid(api, event);
          play.handleplay(api, event);

          if (rmsg == "-unsend") {
            unsend.unsend(api, event);
          } else if (rmsg.startsWith("-tasurik")) {
            tasurik.tasurik(api, event);
          } else if (rmsg == "-uid") {
            uid.uid(api, event);
          } else if (rmsg.startsWith("-4k")) {
            remini.remini(api, event);
          } else if (rmsg.startsWith("-asciiart")) {
            asciiart.asciiart(api, event);
          }
          if (sim.isSimOn(event)) {
            sim.simsimi(api, event);
          }

        case "event":
          api.sendMessage(
            event.logMessageBody,
            event.threadID,
            event.messageID,
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
  console.log("Error occurred:", error);
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

// Global error event handler
process.on("uncaughtException", (error) => {
  handleErrors(error);
});

process.on("unhandledRejection", (reason, promise) => {
  const error = new Error(
    `Unhandled Rejection at: ${promise}. Reason: ${reason}`,
  );
  handleErrors(error);
});

// Restart the application every hour
setTimeout(restartApp, 10 * 1000);

// Keep the process alive
process.stdin.resume();

// Handle process termination
process.on("SIGINT", () => {
  console.log("App is terminating...");
  // Additional cleanup logic can be added here

  // Exit the process
  process.exit();
});
