const { minify } = require('uglify-js');

const config = {
    "name": "obfuscate",
    "description": "Obfuscate JavaScript code using UglifyJS",
    "usage": "-obfuscate <code>",
    "category": "⚙️ Utils",
    "author": "Tasawar Ahmed Shuddho",
    "version": "1.0.0",
    "permission": "all",
    "alias": "obfuscate|obfusc|obf|obfuc|obfu|obfus|obfuscat|obfuscati|obfuscatio|obfuscation"
};

function obfuscateCode(code) {
    const options = {
        mangle: {
            toplevel: true,
        },
        nameCache: {},
        compress: true, // enable compression
        output: {
            comments: false // remove comments
        }
    };

    const result = minify(code, options);

    if (result.error) {
        console.error('Error obfuscating JavaScript:', result.error);
        return null;
    }

    return result.code;
}

const run = async (api, event, args) => {
    let code = args.join(" ");
    if (!code) {
        api.sendMessage("Please enter some JavaScript code to obfuscate!", event.threadID, event.messageID);
        return;
    }
    let obfuscatedCode = obfuscateCode(code);
    if (obfuscatedCode) {
        api.sendMessage("Obfuscated code:\n```javascript\n" + obfuscatedCode + "\n```", event.threadID, event.messageID);
    } else {
        api.sendMessage("Failed to obfuscate code.", event.threadID, event.messageID);
    }
};

const handle = async (api, event) => {
    return;
};

module.exports = { run, config, handle };
