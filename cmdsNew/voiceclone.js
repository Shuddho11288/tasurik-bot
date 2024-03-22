const config = {
    name: "clonevoice",
    description: "Clone a voice using voice cloning service",
    usage: "-clonevoice <prompt>",
    category: "⚙️ Utils",
    author: "Tasawar Ahmed Shuddho",
    version: "1.0.0",
    permission: "all",
    alias: "voiceclone",
  isReplyCommand: true,

};

const axios = require("axios");
const fs = require("fs");
const { promisify } = require("util");
const { pipeline } = require("stream");
const { createWriteStream } = require("fs");
const streamPipeline = promisify(pipeline);

const run = async (api, event, args = []) => {
    api.sendMessage(
        "Please wait while we clone the voice! ⏳",
        event.threadID,
        event.messageID
    );

    let audioUrl = event.messageReply.attachments[0].url;

    try {
        const response = await axios({
            method: "GET",
            url: audioUrl,
            responseType: "arraybuffer",
        });

        const base64Audio = Buffer.from(response.data).toString("base64");

        const clonedVoiceResponse = await axios.post('https://bilalsardar-voice-cloning.hf.space/run/predict', {
            "data": [
                args.join(" "),
                { "name": "voice.aac", "data": "data:audio/wav;base64," + base64Audio },
                { "name": "voice.aac", "data": "data:audio/wav;base64," + base64Audio },
            ]
        });

        const clonedVoiceUrl = 'https://bilalsardar-voice-cloning.hf.space/file=' + clonedVoiceResponse.data.data[0].name;
        let d = await axios.get(clonedVoiceUrl, {
            responseType: "arraybuffer",
        });

        let path = __dirname + `/cache/${event.senderID}.wav`;
        
        fs.writeFileSync(path, Buffer.from(d.data));

        api.sendMessage(
            {
                body: "Here is your cloned voice!",
                attachment: fs.createReadStream(path),
            },
            event.threadID, ()=>{
                fs.unlinkSync(path);
            }, event.messageID
        );
    } catch (error) {
        console.error("Error cloning voice:", error);
    }
};

const handle = async (api, event) => {
    return;
};

module.exports = { run, config, handle };
