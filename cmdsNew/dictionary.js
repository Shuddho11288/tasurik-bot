const config = {
    "name": "dictionary",
    "description": "Use dictionary to get a detailed desciption on a word!",
    "usage": "-dictionary <word>",
    "category": "🔠 Language",
    "author": "Tasawar Ahmed Shuddho",
    "version": "1.0.0",
    "permission": "all",
    "alias": "dict|describe"
}
const axios = require('axios');
const fs = require('fs');
const { promisify } = require('util');

const boldify = require('./boldify').boldify
const run = async (api, event, args) => {
    const response = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/hello');
    const entry = response.data[0]; // Assuming there's only one entry for the word "hello"

    let msg = `**Word**: ${entry.word}\n\n`;
    msg += "**Phonetics**:\n";
    entry.phonetics.forEach(phonetic => {
        msg += `${phonetic.text ? phonetic.text : ''}\n`;
    });

    msg += "\n**Meanings**:\n";
    entry.meanings.forEach(meaning => {
        msg += `${meaning.partOfSpeech}:\n`;
        meaning.definitions.forEach(definition => {
            msg += `- **Definition**: ${definition.definition}\n`;
            if (definition.example) {
                msg += `  Example: ${definition.example}\n`;
            }
        });
        msg += "\n";
    });

    let attachmentURL = entry.phonetics[0].audio;

    const audioStreams = [];
    if (attachmentURL) {
        const stream = await axios.get(attachmentURL, { responseType: 'stream' });
        audioStreams.push(stream.data);
    }

    api.sendMessage({ body: msg, attachment: audioStreams }, event.threadID, () => {
        audioStreams.forEach(async streamDeletePromise => {
            await streamDeletePromise;
        });
    }, event.messageID);
};

const handle = async (api, event) => {
    return;
};

module.exports = { run, config, handle };