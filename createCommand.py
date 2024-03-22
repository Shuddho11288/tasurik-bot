import json

REQUIREMENTS = [
    'NAME',
    'DESCRIPTION',
    'USAGE',
    'CATEGORY',
    'AUTHOR',
    'VERSION',
    'PERMISSION'
]

class CreateCommand:

    def __init__(self):

        self.requirements = REQUIREMENTS

        self.config = {}


    def startInput(self):

        for requirement in self.requirements:

            value = input('Enter ' + requirement + ': ')

            self.config[requirement.lower()] = value

    def createFile(self):

        self.code = 'const config = '

        self.code += json.dumps(self.config, indent=4)

        self.code += '\n'

        self.code += '''
const run = async (api, event) => {

    let result = "Pong!"

    api.sendMessage(result, event.threadID, event.messageID)

}

const handle = async (api, event) => {
    return
}
'''

        self.code += '\n'

        self.code += 'module.exports = {run,config,handle}'

        with open('./cmdsNew/' + self.config['name'] + '.js', 'x') as f:

            f.write(self.code)

        print('File created successfully!✅')
              
        return

if __name__ == '__main__':

    createCommand = CreateCommand()

    createCommand.startInput()

    createCommand.createFile()