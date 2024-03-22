// const randomWords = require('random-words');
const boldify = require('./boldify')

const database = require('./database')
let wpm_queue = {}

let randqueue = {}

var wpm_words = {
    "a": ["able", "acid", "aged", "aide", "ally", "amen", "amid", "aqua", "arch", "army", "atom", "aunt", "auto", "away", "axis", "ajar", "askew", "azure", "alias", "amber", "apple", "argue", "angel", "acute", "afire", "amigo", "avert", "amuse", "acute", "agile", "apply", "audio", "album", "agree", "adore", "admit", "actor", "alert", "adapt", "adorn", "arrow", "atone", "awake", "arise", "alley", "altar", "afoot", "agony", "ample"],
    "b": ["baby", "bold", "bark", "bend", "bias", "blew", "bond", "brag", "bull", "bury", "bail", "buzz", "bash", "bass", "bent", "belt", "bite", "blue", "brim", "bulk", "burn", "bike", "bone", "bank", "boil", "bold", "band", "beam", "book", "both", "blur", "base", "ball", "brave", "badge", "blind", "block", "blend", "bloom", "bribe", "broad", "belly", "beast", "birth", "beard", "burst", "blaze", "blood", "bread"],
    "c": ["cake", "calm", "come", "code", "cute", "curl", "cast", "cube", "clay", "crew", "coal", "cage", "care", "card", "cave", "cane", "coat", "chat", "cure", "crow", "cope", "clam", "crop", "crop", "clap", "chef", "cell", "cage", "call", "calf", "cuff", "crop", "clip", "cork", "chop", "chew", "cheek", "child", "crane", "crime", "crisp", "crown", "carry", "carve", "crack", "creek", "curse"],
    "d": ["dare", "dear", "deep", "dock", "duel", "dawn", "dash", "debt", "doom", "dive", "desk", "dart", "disc", "dust", "duty", "damp", "dice", "dark", "drum", "door", "dine", "dual", "dome", "dear", "dead", "dirt", "dusk", "dose", "doll", "dish", "deer", "dare", "deed", "drift", "drain", "dream", "drown", "drown", "donor", "douse", "diary", "drain", "daisy", "deity", "duvet", "diver"],
    "e": ["each", "eager", "easy", "else", "edit", "edge", "even", "emit", "evil", "euro", "east", "echo", "emir", "envy", "epic", "earn", "endure", "elder", "elbow", "email", "equal", "erase", "error", "earth", "eight", "empty", "entry", "equip", "event", "every", "exact", "erase", "exist", "evoke", "extra", "eagle", "earth", "emote", "enjoy", "essay", "elite", "elixir", "evoke", "exalt", "earth", "eager", "entire"],
    "f": ["face", "fall", "feel", "find", "fame", "fuel", "fast", "fold", "fool", "fury", "fish", "fear", "fade", "fame", "fair", "fuel", "fume", "fuse", "flag", "flex", "free", "fade", "foul", "fact", "film", "feet", "foam", "fist", "fund", "flea", "fold", "fool", "foal", "frown", "flame", "flour", "forge", "fable", "frost", "flask", "fudge", "frown", "fruit", "flash", "fairy", "flock", "flour"],
    "g": ["gain", "gale", "gold", "good", "game", "glow", "gale", "gulp", "gear", "gush", "gulf", "golf", "gift", "goat", "grip", "girl", "gong", "gone", "glad", "grey", "gaze", "gaze", "guts", "grit", "gush", "glow", "gold", "glove", "gloom", "grief", "guard", "guess", "grain", "grape", "guilt", "grace", "green", "guard", "grief", "glide", "giant", "genre", "glory", "groom", "grace"],
    "h": ["hall", "hang", "hate", "help", "heal", "high", "heat", "hood", "hope", "hurt", "hail", "harm", "half", "hill", "home", "huge", "hair", "hero", "haze", "hold", "hate", "heal", "hint", "hush", "hush", "hymn", "hope", "horse", "heart", "horror", "happy", "hurry", "haste", "heaven", "hidden", "humble", "husky", "hatch", "human", "honor", "hobby", "hotel", "hunter", "haste"],
    "i": ["idea", "inch", "iron", "isle", "itch", "into", "icon", "item", "ink", "iron", "isle", "itch", "info", "ice", "idle", "indeed", "infer", "input", "image", "ideal", "insect", "invent", "ignore", "invite", "innovate", "imagine", "important", "integrate", "instigate", "inspire", "industry", "intention", "illuminated", "illustrate", "indicate", "interview", "interaction", "interact", "influence", "international", "intellect", "investment", "implementation", "immigration"],
  
    "j": ["join", "just", "jolt", "jazz", "jump", "jade", "jest", "jinx", "jazz", "jury", "jive", "joke", "jeep", "juke", "jack", "jaws", "jerk", "jeer", "jive", "juice", "jail", "jive", "jewel", "judge", "jolly", "joust", "jumbo", "jelly", "juicy", "jaguar", "jumble", "junior", "jacket", "journey", "jungle", "jigsaw", "justice", "journal", "janitor", "junction", "jaded", "joyful", "joystick", "joint", "jasmine", "judgment", "jackpot", "jocular"],
    "k": ["kind", "kite", "keep", "kiss", "kill", "kale", "knee", "kite", "knot", "king", "kick", "kite", "knee", "kelp", "keen", "know", "kiss", "knit", "kale", "kite", "knot", "knob", "knee", "kite", "knot", "knack", "kiosk", "kitty", "koala", "kudos", "knead", "kudos", "kangaroo", "knowledge", "keyhole", "kettle", "karaoke", "kingdom", "knuckle", "keyboard", "knight", "keystone", "kangaroo", "ketchup", "kiwi", "kindle", "kibbles"],
    "l": ["love", "lazy", "loud", "long", "lust", "lean", "lake", "luck", "lead", "lamp", "lend", "lime", "lion", "lend", "lure", "list", "lost", "lady", "lazy", "life", "loud", "luck", "lunch", "leak", "lend", "last", "lawn", "left", "link", "lend", "like", "latch", "leap", "lucky", "lunar", "lively", "lizard", "luggage", "liberty", "laughter", "luminous", "lighter", "literature", "logistic", "likeness", "lighthouse"],
    "m": ["make", "mild", "much", "mind", "moss", "mate", "maze", "moon", "mask", "muse", "mold", "move", "meat", "mail", "mute", "mud", "math", "melt", "mend", "mist", "moss", "mild", "mule", "magic", "mirth", "mound", "music", "medal", "maze", "mole", "mold", "moat", "march", "merry", "magma", "museum", "morning", "magnetic", "medicine", "monster", "mechanic", "manipulate", "manifest", "merchandise", "melodic", "mystical"],
    "n": ["name", "neat", "near", "need", "nest", "note", "nail", "noon", "navy", "nine", "nose", "name", "noble", "nerve", "newt", "nope", "nice", "null", "nail", "neat", "nose", "neon", "nurse", "night", "nod", "noir", "nap", "noun", "nick", "nail", "nod", "neat", "nerd", "napkin", "noodle", "novel", "narrow", "nothing", "nature", "narrative", "navigate", "nurturing", "nautical", "narrator", "newsletter", "nutshell", "narrate"],
    "o": ["open", "oval", "only", "once", "over", "oath", "ocean", "obey", "oxen", "onto", "ouch", "oboe", "orbit", "omen", "oily", "odor", "oven", "old", "opera", "oval", "ocean", "ounce", "order", "onion", "organ", "opera", "outfit", "often", "offend", "outcry", "optimal", "obsolete", "overture", "occupy", "omission", "overcome", "overload", "outspoken", "outstanding", "original", "opulent", "overtake", "orchestra", "outlet", "obstacle"],
    "p": ["pure", "pink", "pick", "push", "pace", "poll", "paid", "plow", "plan", "play", "pear", "peak", "pile", "palm", "path", "part", "pale", "park", "peak", "pill", "port", "pass", "pack", "pool", "pity", "park", "pace", "proud", "puppy", "pouch", "panic", "proof", "pause", "plate", "pride", "plain", "plumb", "plunge", "puzzle", "precious", "parade", "palace", "placid", "profound", "perceive", "persist", "prestige"],
    "q": ["quit", "quiz", "quad", "quay", "quiz", "quit", "quest", "quack", "quilt", "quick", "quiet", "quart", "quota", "quake", "queen", "quill", "quail", "quote", "quilt", "quiz", "quiet", "quack", "quarry", "query", "quarter", "quality", "quaint", "quantum", "quicksand", "quickest", "quiver", "question", "quotation", "quicksilver", "quandary", "qualified", "quarrel", "qualification", "quintessential", "quietness", "quizzical", "quasar", "quiver", "quarterly", "quibble"],
    "r": ["race", "read", "road", "roof", "rest", "rush", "rake", "rose", "ring", "rare", "rock", "rust", "rain", "rich", "room", "rule", "rant", "riot", "risk", "roar", "rave", "robe", "rise", "real", "rear", "root", "rope", "rare", "ring", "rank", "reap", "rival", "radius", "radiant", "rescue", "radiate", "radiation", "refrigerate", "recurrent", "regional", "revolution", "reputation", "rhythm", "relationship", "reliable", "relieve"],
    "s": ["seek", "star", "song", "safe", "soar", "silk", "salt", "sail", "shed", "sage", "soil", "sell", "same", "sand", "slow", "surf", "sane", "seed", "spin", "seal", "self", "silk", "salt", "soul", "sour", "seat", "size", "ship", "sane", "soar", "star", "smile", "scope", "shock", "secure", "storage", "seamless", "serenity", "sensation", "significant", "substantial", "symmetrical", "sophisticated", "supplementary", "spiritual", "sustainable"],
    "t": ["tell", "tiny", "time", "take", "tape", "twin", "town", "tale", "team", "tide", "task", "toll", "tame", "talk", "tune", "tomb", "trim", "tell", "twin", "tide", "tiny", "tame", "trip", "toll", "trap", "track", "tune", "tear", "taste", "tangle", "turbine", "terrific", "tangible", "transform", "temperature", "transport", "tremendous", "technology", "territory", "telecommunication", "tolerance", "triangle", "testimonial", "thorough", "theoretical", "tornado"],
    "u":[ "us", "use", "unit", "urge", "ugly", "undo", "urn", "user", "unit", "used", "utah", "ulna", "usher", "ulcer", "unfit", "ultra", "unzip", "upend", "upton", "union", "unpin", "umami", "unary", "unite", "urine", "urban", "urged", "upset", "upend", "usher", "uncle", "umbra", "unarm", "ultra", "usage", "utile", "usual", "udder", "uncut", "upend", "usher", "ultra", "unzip", "ulna", "union", "usury", "ugly", "urgent", "usual", "usher", "unfit", "unzip", "unarm", "usher", "urn", "urban", "ulna", "usage", "usher", "ultra", "us", "use", "unit", "urge", "ugly", "undo", "urn", "user", "unit", "used", "utah", "ulna", "usher", "ulcer", "unfit", "ultra", "unzip", "upend", "upton", "union", "unpin", "umami", "unary", "unite", "urine", "urban", "urged", "upset", "upend", "usher", "uncle", "umbra", "unarm", "ultra", "usage", "utile", "usual", "udder", "uncut", "upend", "usher", "ultra", "unzip", "ulna", "union", "usury", "ugly", "urgent", "usual", "usher", "unfit", "unzip", "unarm", "usher"],
    "v": ["vast", "vote", "very", "view", "vile", "vest", "vase", "vibe", "volt", "vain", "veil", "vase", "vote", "veal", "vent", "visa", "vex", "vast", "vibe", "very", "vest", "vane", "void", "vamp", "vigor", "vivid", "vessel", "verse", "village", "vocal", "vulnerable", "vanguard", "vagabond", "validate", "vividly", "volunteer", "vigilant", "victorious", "vehement", "vexation", "veritable", "vortex", "venerable", "venture", "voracious", "vibrant", "valiant"],
    "w": ["wave", "wage", "wise", "wisp", "warm", "wish", "wait", "west", "wild", "wall", "wane", "wore", "warm", "wrist", "will", "wolf", "want", "wilt", "wage", "wise", "west", "will", "waft", "wash", "weed", "wane", "wane", "walk", "wash", "widen", "waste", "wonder", "whisper", "weather", "water", "welfare", "wondrous", "witty", "wonderful", "willing", "wholesome", "warrior", "workshop", "wrestle", "worship", "wavelength"],
    "x": ["x-ray", "xeno", "xerox", "xmas", "xenon", "xerography", "xenophobe", "xenophile", "xerophyte", "xylitol", "xerophilous", "xylophone", "xerarch", "xerotic", "xenobiotic", "xenogenesis", "xeric", "xerophytic", "xanthic", "xenophobia", "xenogamy", "xanadu", "xiphoid", "xanthous", "xenogeny", "xenophile", "xerography", "xenocracy", "xylol", "xenon", "xenophile", "xerophyte", "xenogenesis", "xerarch", "xenophobe", "xenon", "xylitol", "xerophilous", "xylophone", "xenobiotic", "xenogenic", "xenophobe", "xenobiotic", "xerophilous", "xenophile", "xenogamy", "xanadu"],
    "y": ["year", "yawn", "yell", "yard", "yoga", "yacht", "yam", "yawn", "yard", "yarn", "yell", "youth", "yield", "yodel", "yummy", "yeah", "yawn", "yacht", "yogurt", "yolk", "yesterday", "yonder", "yearning", "yuletide", "yawning", "yearbook", "yummy", "yearly", "yelling", "yachting", "yuppie", "yellow", "yearn", "yell", "yacht", "yawn", "yarn", "yummy", "yield", "yogurt", "yoke", "yell", "yard", "yawn", "yeah"],
    "z": ["zero", "zone", "zing", "zoom", "zest", "zeal", "zoo", "zinc", "zen", "zap", "zeal", "zest", "zero", "zany", "zest", "zoo", "zeal", "zoom", "zinc", "zone", "zing", "zero", "zest", "zip", "zone", "zero", "zeal", "zenith", "zoology", "zigzag", "zeppelin", "zealous", "zephyr", "zircon", "zombie", "zucchini", "zebra", "zestful", "zeitgeist", "zodiac", "zillion", "zoologist", "zilch", "zigzag", "zest"],
  }

  


function getWordList(letter) {
  if (wpm_words.hasOwnProperty(letter)) {
    return wpm_words[letter];
  } else {
    // Generate a list of 40 mixed words
    const allWords = Object.values(wpm_words).reduce((acc, val) => acc.concat(val), []);
    const mixedWords = [];
    while (mixedWords.length < 40) {
      const randomWord = allWords[Math.floor(Math.random() * allWords.length)];
      if (!mixedWords.includes(randomWord)) {
        mixedWords.push(randomWord);
      }
    }
    return mixedWords;
  }
}




function randomWords(options, letter) {
  const words =getWordList(letter)

  const { min, max } = options;
  const wordCount = Math.floor(Math.random() * (max - min + 1)) + min;

  const randomText = [];
  for (let i = 0; i < wordCount; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    randomText.push(words[randomIndex]);
  }

  return randomText;
}




// Function to calculate WPM
function calculateWPM(wordsTyped, timeSeconds, realText) {
  let wordsCorrect = 0
  let charactersCorrect = 0
  for (let i=0;i<wordsTyped.length;i++){
    if (realText[i] == wordsTyped[i]){
      wordsCorrect += 1
      charactersCorrect += realText[i].length
    }
  }
  const wordsPerMinute = (wordsCorrect / timeSeconds) * 60;
  const charactersPerMinute = (charactersCorrect / timeSeconds) * 60;
  return [wordsPerMinute, charactersPerMinute];
}

// Function to calculate accuracy
function calculateAccuracy(userText, randomText) {
    const minLength = Math.max(userText.split(' ').length, randomText.split(' ').length);
    let correctChars = 0;

    for (let i = 0; i < minLength; i++) {
        if (userText.split(' ')[i] === randomText.split(' ')[i]) {
            correctChars++;
        }
    }

    const accuracy = (correctChars / minLength) * 100;
    return accuracy;
}

// Async function to start the timer
async function startTimer(senderID) {
  console.log('Start typing...');

  let startTime = Date.now();

  wpm_queue[senderID] = startTime

}

// Async function to stop the timer and calculate WPM and accuracy
async function stopTimer(userTypedText, startTime, senderID) {

  const endTime = Date.now();
  const timeSeconds = ((endTime - startTime) / 1000)-2;
  const wordsTyped = userTypedText.split(' ');

  const wpm = calculateWPM(wordsTyped, timeSeconds, randqueue[senderID].split(' '));
  const accuracy = calculateAccuracy(userTypedText, randqueue[senderID]);


  return [`Your typing speed is:\n ${wpm[0]*accuracy/100} WPM \n ${wpm[1]*accuracy/100} CPM.

Your accuracy is ${accuracy.toFixed(2)}%.`.toString(),wpm[0]*accuracy/100]
}

const startTime = async (api, event) => {
  let li = event.body.split('wpm')[1].trim().split(' ')
  let letter = li[0].trim()
  let word_limit = li.length==1? 0: Number(li[1])
  let randomText = ''
  console.log(li)
  console.log(letter)
  console.log(word_limit)
  
  if (word_limit == 0){
     randomText = randomWords({ min: 10, max: 20 }, letter).join(' ');
  }
  else if(word_limit<10){
    api.sendMessage(`Word limit is too low. At least, use 10 words!`,event.threadID,event.messageID)
    return 0

  }
  else{
     randomText = randomWords({ min: word_limit, max: word_limit }, letter).join(' ');
  }

  
  

  randqueue[event.senderID] = randomText

  startTimer(event.senderID)

  console.log(randomText)

  api.sendMessage('Your time starts now! Quick type the following text:\n\n' + boldify(randomText.split(' ').join('ㅤ')), event.threadID, event.messageID)

  





}

const saveWPM = (event, reply)=>{
  dbase = database.getDatabase('user_wpm_queue')
  console.log('start')

    if (!Object.keys(dbase).includes(event.senderID)||Number(dbase[event.senderID]) <= Number(reply[1])){
      dbase[event.senderID] = reply[1]
      database.setDatabase('user_wpm_queue', dbase)
      console.log('done')
    }
  

}

const handleWpm = async (api, event) => {
  console.log(wpm_queue)
  if (Object.keys(wpm_queue).includes(event.senderID)) {
    let reply = await stopTimer(event.body, wpm_queue[event.senderID], event.senderID)
    let replyn = reply[0]
    saveWPM(event, reply)
    delete wpm_queue[event.senderID]

    await api.sendMessage(replyn, event.threadID, event.messageID)
  }
}

const wpm_leaderboard = async(api, event)=>{
  let nwpm_queue = database.getDatabase('user_wpm_queue')
  let reply = boldify('Here is the wpm leaderboard:\n\n')
  const sortedData = Object.fromEntries(
    Object.entries(nwpm_queue).sort(([, a], [, b]) => b - a)
  )

  let i = 0
  for (const [key, value] of Object.entries(sortedData)) {
    var user_name = await api.getUserInfo(key)
    //console.log(user_name)
    let h = boldify('RANK:'+(i+1)+' '+user_name[key].name)
    reply += `${h}: ${value.toFixed(2)}\n`
    i++
    if (i == 5){
      break
    }
  }
  api.sendMessage(reply, event.threadID, event.messageID)
}

module.exports = {
  wpm: startTime,
  handleWpm: handleWpm,
  wpm_leaderboard: wpm_leaderboard
}