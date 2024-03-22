const axios = require('axios');
const FormData = require('form-data');

async function sendMessage(prompt) {
    try {
        const formData = new FormData();
        formData.append('_wpnonce', '8d3953173c');
        formData.append('post_id', '22');
        formData.append('url', 'https://chatgptt.me');
        formData.append('action', 'wpaicg_chat_shortcode_message');
        formData.append('message', prompt);
        formData.append('bot_id', '0');

        const headers = {
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-GB,en;q=0.9,en-US;q=0.8',
            'Content-Length': formData.getLengthSync(),
            'Content-Type': `multipart/form-data; boundary=${formData.getBoundary()}`,
            'Cookie': 'cf_clearance=B8SwE6d094DqjA6Hx8r70CzQhCCQBkRCItnvjAPTUxw-1709379644-1.0.1.1-gqdNSbiPCjmCF3GmrhgfUavzmMfRdKH66j4yKpteZAb5sBB1UKGoCsxZjkfrfgVAOxWW44GUsqgMNmiQJeQeiw; _ga_LY09KRK0QW=GS1.1.1709379644.1.0.1709379644.0.0.0; _ga=GA1.1.1561150818.1709379645; wpaicg_chat_client_id=t_25998a9265adbef155bdfa41713531; wpaicg_conversation_url_shortcode=d1aa9b6e0633d04b06792870ecc60345; d1aa9b6e0633d04b06792870ecc60345=;',
            'Dnt': '1',
            'Origin': 'https://chatgptt.me',
            'Referer': 'https://chatgptt.me/',
            'Sec-Ch-Ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
            'Sec-Ch-Ua-Arch': '"x86"',
            'Sec-Ch-Ua-Bitness': '"64"',
            'Sec-Ch-Ua-Full-Version': '"122.0.2365.59"',
            'Sec-Ch-Ua-Full-Version-List': '"Chromium";v="122.0.6261.70", "Not(A:Brand";v="24.0.0.0", "Microsoft Edge";v="122.0.2365.59"',
            'Sec-Ch-Ua-Mobile': '?0',
            'Sec-Ch-Ua-Model': '""',
            'Sec-Ch-Ua-Platform': '"Windows"',
            'Sec-Ch-Ua-Platform-Version': '"15.0.0"',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0'
        };

        const response = await axios.post('https://chatgptt.me/wp-admin/admin-ajax.php', formData, { headers });
        console.log(response.headers)
        console.log(response.data.data); // Assuming you want to log the response data
    } catch (error) {
        console.error('Error sending message:', error);
    }
}

    sendMessage('who are you?');


