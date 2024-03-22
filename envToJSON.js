const fs = require('fs')

const envdata = fs.readFileSync('.env', 'utf8')

const lines = envdata.split('\n')

const obj = {}

for (const line of lines) {
    const [key, value] = line.split('/=(.*)/s')
    console.log(key)
    console.log(value)
    obj[key] = value
}
obj['appState'] = JSON.stringify([
    {
        "key": "dbln",
        "value": "%7B%2261552181213388%22%3A%22wj9eNHzT%22%7D",
        "domain": "facebook.com",
        "path": "/login/device-based/",
        "hostOnly": false,
        "creation": "2024-02-04T06:05:34.100Z",
        "lastAccessed": "2024-02-04T06:05:34.100Z"
    },
    {
        "key": "ps_l",
        "value": "0",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-02-04T06:05:34.100Z",
        "lastAccessed": "2024-02-04T06:05:34.100Z"
    },
    {
        "key": "ps_n",
        "value": "0",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-02-04T06:05:34.100Z",
        "lastAccessed": "2024-02-04T06:05:34.100Z"
    },
    {
        "key": "sb",
        "value": "P9q4ZZ5Qm_YyNY1qqm4-vbeY",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-02-04T06:05:34.100Z",
        "lastAccessed": "2024-02-04T06:05:34.100Z"
    },
    {
        "key": "datr",
        "value": "P9q4ZZoSCssH9je8cr4vPB16",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-02-04T06:05:34.100Z",
        "lastAccessed": "2024-02-04T06:05:34.100Z"
    },
    {
        "key": "dpr",
        "value": "1.25",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-02-04T06:05:34.100Z",
        "lastAccessed": "2024-02-04T06:05:34.100Z"
    },
    {
        "key": "wd",
        "value": "1872x924",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-02-04T06:05:34.100Z",
        "lastAccessed": "2024-02-04T06:05:34.100Z"
    },
    {
        "key": "c_user",
        "value": "61552181213388",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-02-04T06:05:34.100Z",
        "lastAccessed": "2024-02-04T06:05:34.100Z"
    },
    {
        "key": "xs",
        "value": "23%3ARKyaKfFppmnhVw%3A2%3A1706960402%3A-1%3A14454%3A%3AAcVIJpCrzOUrSwGYIHROrpo28bOweP0j63yNQsSQVA",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-02-04T06:05:34.100Z",
        "lastAccessed": "2024-02-04T06:05:34.100Z"
    },
    {
        "key": "fr",
        "value": "1ZpcdFkuAHk85xLwO.AWU8cwl2sj3FPxPGrKBABJJdo0U.Blvykn.Y0.AAA.0.0.Blvykn.AWUmFIOIdm0",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-02-04T06:05:34.100Z",
        "lastAccessed": "2024-02-04T06:05:34.100Z"
    },
    {
        "key": "presence",
        "value": "C%7B%22t3%22%3A%5B%5D%2C%22utc3%22%3A1707026733435%2C%22v%22%3A1%7D",
        "domain": "facebook.com",
        "path": "/",
        "hostOnly": false,
        "creation": "2024-02-04T06:05:34.100Z",
        "lastAccessed": "2024-02-04T06:05:34.100Z"
    }
])
fs.writeFileSync('env.json', JSON.stringify(obj, null, 2))