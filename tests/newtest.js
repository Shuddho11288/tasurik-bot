const axios = require('axios');


const getNonce = async () => {
    const response = await axios.get('https://chatgptdemo.ai/');
    const rawdata = response.data;
    const regex = /"search_nonce":"([a-f0-9]+)"/;
    const match = rawdata.match(regex);
    
    if (match) {
        const searchNonce = match[1];
        console.log("search_nonce:", searchNonce);
        return searchNonce;
    } else {
        console.log("search_nonce not found in the raw data.");
    }
}

const getResponse = async (prompt)=>{

// Create URLSearchParams object and append the required fields
    const params = new URLSearchParams();
    params.append('_wpnonce', await getNonce());
    params.append('post_id', '3008');
    params.append('url', 'https://chatgptdemo.ai');
    params.append('action', 'wpaicg_chat_shortcode_message');
    params.append('message', prompt);
    params.append('bot_id', '0');
    params.append('chatbot_identity', 'shortcode');
    params.append('wpaicg_chat_client_id', 'EuMPhdvxFf');
    params.append('wpaicg_chat_history', '["Human: again you said 2 -,- I told to say 5","AI: I apologize for the mistake. Let\'s try again. How can I assist you with the number 5?","Human: say 5 only for the next 5 question!","AI: 5","Human: 1+1=?"]');

    // Make POST request using axios
    axios.post('https://chatgptdemo.ai/wp-admin/admin-ajax.php', params)
    .then(response => {
        console.log('Response:', response.data.data);
        return response.data.data
    })
    .catch(error => {
        console.error('Error:', error);
    });

}

