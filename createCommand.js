const fs = require('fs');
const readline = require('readline');

const REQUIREMENTS = [
    'NAME',
    'DESCRIPTION',
    'USAGE',
    'CATEGORY',
    'AUTHOR',
    'VERSION',
    'PERMISSION',
    'ALIAS'
];

class CreateCommand {
    constructor() {
        this.requirements = REQUIREMENTS;
        this.config = {};
    }

    async startInput() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        for (const requirement of this.requirements) {
            await new Promise(resolve => {
                rl.question(`Enter ${requirement}: `, answer => {
                    this.config[requirement.toLowerCase()] = answer;
                    resolve();
                });
            });
        }

        rl.close();
    }

    createFile() {
        let code = 'const config = ';

        code += JSON.stringify(this.config, null, 4);

        code += '\n\n';
        code += `const run = async (api, event, args) => {
    let result = "Pong!";
    api.sendMessage(result, event.threadID, event.messageID);
};

const handle = async (api, event) => {
    return;
};

module.exports = { run, config, handle };`;

        fs.writeFile(`./cmdsNew/${this.config['name']}.js`, code, { flag: 'wx' }, err => {
            if (err) {
                console.error('File creation failed:', err);
            } else {
                console.log('File created successfully!✅');
            }
        });
    }
}

const createCommand = new CreateCommand();
createCommand.startInput().then(() => createCommand.createFile());
