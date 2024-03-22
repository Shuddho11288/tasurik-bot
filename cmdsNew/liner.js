const config = {
    "name": "liner",
    "description": "Use liner ai",
    "usage": "-liner <prompt>",
    "category": "🅰️ AI",
    "author": "Tasawar Ahmed Shuddho",
    "version": "1.0.0",
    "permission": "all",
    "alias": "linerai"
}
const axios = require('axios');
// Request headers
const headers = {
    'Cookie': 'ab180ClientId=d124745c-b8e0-44c9-8712-82056e1571ed; __stripe_mid=ad30335b-6b5e-4340-8ceb-ac91d6b8cc34a0a896; __stripe_sid=18e0d0e2-0b72-4a6c-8859-ee62b3dcfd02c953ea; connect.sid=s%3AZpWUIMuuF7jh09Z7QriboFEE2chRqxxF.VYhAtox3jyd6ECn2tPDci4e4oSNPicTovuHyOJBv4Wo; _ga_9RRDSJXHYC=GS1.1.1709884220.1.1.1709884314.59.0.0; _ga_67C29LFSEM=GS1.1.1709884222.1.1.1709884316.57.0.1264912748; _dd_s=rum=0&expire=null; amp_ac9120=byJG3kKNpv1SoxEYhgl-ki.OTA4MzY3MQ==..1hoeglaf8.1hoegpbgo.1f.3.1i',
    'Content-Type': 'application/json'
};

// Request payload


const run = async (api, event, args) => {
    const data = {
        "spaceId": 18572253,
        "threadId": "57117968",
        "userMessageId": 69370497,
        "userId": 9083671,
        "experimentId": 56,
        "query": " "+args.join(' '),
        "agentId": "@liner",
        "platform": "web",
        "regenerate": false,
        "showReferenceChunks": true
    };
    
    // Make POST request
    axios.post('https://getliner.com/platform/copilot/v3/answer', data, { headers })
        .then(response => {
            let da = response.data.split('\n');
            console.log(da[da.length - 2])
            api.sendMessage(JSON.parse(da[da.length - 2]).answer, event.threadID, event.messageID);
    
        })
    
};

const handle = async (api, event) => {
    return;
};

module.exports = { run, config, handle };