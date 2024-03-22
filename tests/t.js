const axios = require('axios');

const getHeader = async () => {
    const userAgents = [
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36'
    ];

    const getRandomUserAgent = () => {
        return userAgents[Math.floor(Math.random() * userAgents.length)];
    };

    try {
        const response = await axios.get('https://chatgbt.one/', {
            withCredentials: true,
            headers: {
                'User-Agent': getRandomUserAgent()
            }
        });

        const headers = response.headers;
        console.log(headers);

        const rawData = response.data;
        const regex = /"search_nonce":"([^"]*)"/;
        const match = rawData.match(regex);

        if (match && match.length > 1) {
            const searchNonce = match[1];
            console.log(searchNonce); // Output: 231533cb03
            return searchNonce;
            //api.sendMessage(`Search nonce: ${searchNonce}`, event.threadID, event.messageID);
        } else {
            console.log('Search nonce not found.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};


