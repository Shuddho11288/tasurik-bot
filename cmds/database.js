const fs = require('fs')

const getDatabase = (datapath='')=>{

    if (datapath == ''){
        
        let data = fs.readFileSync(__dirname + '/database.json')

        return JSON.parse(data)

    }

    else {

        let data = fs.readFileSync(__dirname + '/database.json')

        data = JSON.parse(data)

        if  (Object.keys(data).includes(datapath)){
            
            return data[datapath]
        }

        else{

            return {}
        }
    }

}

const setDatabase = (datapath, val)=>{

    if (datapath == ''){
        
        throw Error('Sorry you cannot change the whole database for security reason!')

    }

    else {

        let data = fs.readFileSync(__dirname + '/database.json')

        data = JSON.parse(data)

        data[datapath] = val

        fs.writeFileSync(__dirname + '/database.json', JSON.stringify(data, null, 2))

        return data

    }
}

module.exports = {

    getDatabase : getDatabase,

    setDatabase : setDatabase

}