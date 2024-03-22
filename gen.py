# temp = '''
# const config = {
#     "name": "v1",
#     "description": "Use v1 to generate image",
#     "usage": "-hercv1 <prompt>",
#     "category": "🖼️ AI Image Generator",
#     "author": "Tasawar Ahmed Shuddho",
#     "version": "1.0.0",
#     "permission": "all"
# }
# const {generateImage} = require('./hercv3')
# const sendImage = require('../cmds/basicTools/sendImage');
# const run = async (api, event, args) => {
#     let prompt = args.join(" ");
#     console.log(prompt)

#     if (!prompt) {
#         api.sendMessage("Please enter a prompt!", event.threadID, event.messageID);
#         return;
#     }
#     let loadingmsg = `Generating image with prompt: ${prompt}\n`

#     api.sendMessage(loadingmsg, event.threadID, event.messageID);
#     let result =await generateImage(prompt, 'v1')

#     console.log(result)

#     let msg = `Your prompt: ${prompt}\nYour Model: v1\nYour Image: (see below)`;


#     //sendImage.sendImageWithMessage(api, event, result.url, msg, ".png");

#     sendImage.sendImage(api, event, result.url, ".png", msg);
    
# };

# const handle = async (api, event) => {
#     return;
# };

# module.exports = { run, config, handle };

# '''

# for x in '"v3" | "v1" | "v2" | "v2-beta" | "lexica" | "prodia" | "simurg" | "animefy" | "raava" | "shonin"'.split(" | "):
#     x = x.replace("\"", "")
#     temp2 = temp.replace("v1", x)
#     print(temp2)
#     with open('./cmdsNew/' + x + '.js', 'w') as f:
#         f.write(temp2)

temp = '''const config = {
    "name": "v1",
    "description": "Generate message using AI, namely v1",
    "usage": "-v1 <prompt>",
    "category": "🅰️ AI",
    "author": "Tasawar Ahmed Shuddho",
    "version": "1.0.0",
    "permission": "all"
}

const { Hercai } = require('hercai');
const herc = new Hercai();
const generateChat = async (prompt, model) => {
    
    let result = await herc.question({
        content: prompt,
        model: model,
    });
    return result;
}
const run = async (api, event, args) => {
    let model = 'v1'
    let prompt = args.join(" ");
    console.log(prompt)
    if (!prompt) {
        api.sendMessage("Please enter a prompt!", event.threadID, event.messageID);
        return;
    }
    let result = await generateChat(prompt, model)

    console.log(result)
    api.sendMessage(result.reply, event.threadID, event.messageID);
};

const handle = async (api, event) => {
    return;
};

module.exports = { run, config, handle };'''

for x in '"v3" | "v3-32k" | "turbo" | "turbo-16k" | "gemini"'.split(" | "):
    x = x.replace("\"", "")
    temp2 = temp.replace("v1", x)
    print(temp2)
    with open('./cmdsNew/' + x + '.js', 'w') as f:
        f.write(temp2)