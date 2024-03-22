const axios = require('axios');

const headers = {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-GB,en;q=0.9,en-US;q=0.8',
    'Content-Type': 'multipart/form-data', // Don't need to specify boundary with FormData
    'Cookie': '_ga=GA1.1.2001258762.1709456072; cf_clearance=phU4xrRYRzUDKaOfnmLTEwOemc27TGNaUYyAUppB7pI-1709456095-1.0.1.1-Qb5slTNysbAxmfcXsZMQh0NBPYTBdrjV8kwCAKH04tSjvC6kHpdIpfoyImas22_n0nqf1tuurMceZdbXtUZ1qQ; _ga_J5ZX291DQ9=GS1.1.1709456071.1.1.1709456095.0.0.0; __gads=ID=4b1ddd8225e779f0:T=1709456096:RT=1709456096:S=ALNI_MYBld521Y-iKeqWjcmnugNn2VOH_Q; __gpi=UID=00000d22a18e9e46:T=1709456096:RT=1709456096:S=ALNI_MZ53oorve_Cy4sP0AP8YWeAc_O4nQ; __eoi=ID=70a3d73430a2c77c:T=1709456096:RT=1709456096:S=AA-AfjZlZh7qR1gB4tCn1PFhVBZ1; FCNEC=%5B%5B%22AKsRol8h-pkx1Up95hjlIodOmca4vn4hUeHRmUx4G6zXSmPT6-ROQ5I9KEpRgC7XMu9qUB63B3Wyyts3CnlcGrR9nncl0RE4t5Z-vaQ1Hw-KZEb1Xlw_59L8mGWxyXH522OrmuSCGaS0lRC_3ejE9LUEPVCjnbB49g%3D%3D%22%5D%5D; ',
    'Dnt': '1',
    'Origin': 'https://chatgbt.one',
    'Referer': 'https://chatgbt.one/',
    'Sec-Ch-Ua': '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
    'Sec-Ch-Ua-Mobile': '?0',
    'Sec-Ch-Ua-Platform': '"Windows"',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0',
};



// for (let i = 0; i < 10000; i++) {
//     axios.post('https://chatgbt.one/wp-admin/admin-ajax.php', formData, { headers })
//     .then(response => {
//         console.log('Response:', response.data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// }


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
          },
          
      });
      console.log(response);

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



// const convertToChatDetails = (json) => {
//     const decodedJson = JSON.parse(JSON.stringify(json)); // Deep clone the JSON object
//     const result = decodedJson.map((item) => {
//       return {
//         human: item.human + " " + item.ai,
//         ai: item.ai,
//       };
//     });
//     return result;
//   };

//   const inputJson = [
//     { human: "Hi", ai: "Hello! How can I assist you today?" },
//     { human: "I'm good", ai: "That's great to hear." },
//   ];
  
//   const convertedJson = convertToChatDetails(inputJson);

//   console.log(convertedJson)

//     axios.post('https://chatgbt.one/wp-admin/admin-ajax.php', formData, { headers })
//     .then(response => {
//         console.log('Response:', response.data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

const chatgbt = async (prompt) => {
  const _wpnonce = await getHeader()
  const formData = new FormData();
formData.append('_wpnonce', _wpnonce);
formData.append('post_id', '7');
formData.append('url', 'https://chatgbt.one');
formData.append('action', 'wpaicg_chat_shortcode_message');
formData.append('message', prompt);
formData.append('bot_id', '0');
    const l = await axios.post('https://chatgbt.one/wp-admin/admin-ajax.php', formData, { headers })
    return l.data
}

const main = async () => {
  const response = await chatgbt('hi! Who are you? ')
  console.log(response)
}

const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  let prompt = req.query.prompt;
  let resy = await chatgbt(prompt)
  res.send(resy)
})
app.listen(3000)