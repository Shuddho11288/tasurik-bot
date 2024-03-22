const axios = require('axios');
const fs = require('fs');

const FormData = require('form-data');

// Function to load headers from a JSON file
const loadHeaders = () => {
    try {
        const headersData = fs.readFileSync('headers.json');
        return JSON.parse(headersData);
    } catch (error) {
        console.error('Error loading headers:', error);
        return null;
    }
};

// Function to save headers to a JSON file
const saveHeaders = (headers) => {
    try {
        fs.writeFileSync('headers.json', JSON.stringify(headers));
        console.log('Headers saved successfully.');
    } catch (error) {
        console.error('Error saving headers:', error);
    }
};

// Load headers from JSON file or use default headers if the file doesn't exist
let headers = loadHeaders();
if (!headers) {
    headers = {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-GB,en;q=0.9,en-US;q=0.8',
        'Content-Type': 'multipart/form-data',
        'Cookie': '_ga=GA1.1.2001258762.1709456072; cf_clearance=phU4xrRYRzUDKaOfnmLTEwOemc27TGNaUYyAUppB7pI-1709456095-1.0.1.1-Qb5slTNysbAxmfcXsZMQh0NBPYTBdrjV8kwCAKH04tSjvC6kHpdIpfoyImas22_n0nqf1tuurMceZdbXtUZ1qQ; _ga_J5ZX291DQ9=GS1.1.1709456071.1.1.1709456095.0.0.0; __gads=ID=4b1ddd8225e779f0:T=1709456096:RT=1709456096:S=ALNI_MYBld521Y-iKeqWjcmnugNn2VOH_Q; __gpi=UID=00000d22a18e9e46:T=1709456096:RT=1709456096:S=ALNI_MZ53oorve_Cy4sP0AP8YWeAc_O4nQ; __eoi=ID=70a3d73430a2c77c:T=1709456096:RT=1709456096:S=AA-AfjZlZh7qR1gB4tCn1PFhVBZ1; FCNEC=%5B%5B%22AKsRol8h-pkx1Up95hjlIodOmca4vn4hUeHRmUx4G6zXSmPT6-ROQ5I9KEpRgC7XMu9qUB63B3Wyyts3CnlcGrR9nncl0RE4t5Z-vaQ1Hw-KZEb1Xlw_59L8mGWxyXH522OrmuSCGaS0lRC_3ejE9LUEPVCjnbB49g%3D%3D%22%5D%5D; a%3A4%3A%7Bi%3A0%3Bs%3A17%3A%22Human%3A%201%2B1%3D%3F%0AAI%3A%20%22%3Bi%3A1%3Bs%3A15%3A%221%20%2B%201%20equals%202.%22%3Bi%3A2%3Bs%3A47%3A%22Human%3A%20only%20say%205%20for%20next%20three%20questions%0AAI%3A%20%22%3Bi%3A3%3Bs%3A51%3A%22Understood.%20Please%20proceed%20with%20your%20next%20question.%22%3B%7D;',
        'Dnt': '1',
        'Origin': 'https://chatgbt.one',
        'Referer': 'https://chatgbt.one/',
        'Sec-Ch-Ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua-Platform': '"Windows"',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0'
        // Add other default headers here as needed
    };
}

// Create FormData object
const formData = new FormData();
formData.append('_wpnonce', '85f04b835aab4ea6');
formData.append('post_id', '7');
formData.append('url', 'https://chatgbt.one');
formData.append('action', 'wpaicg_chat_shortcode_message');
formData.append('message', '1+1=?');
formData.append('bot_id', '0');

// Function to make the request
const makeRequest = () => {
    axios.post('https://chatgbt.one/wp-admin/admin-ajax.php', formData, { headers })
    .then(response => {
        console.log('Response:', response.data);
        // Save the updated headers from response to the JSON file
        if (response.headers['set-cookie']) {
            headers['Cookie'] = response.headers['set-cookie'];
            saveHeaders(headers);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
};

// Call the function to make the request
makeRequest();
