const axios = require('axios');

async function memegetter() {
  try {
    const response = await axios.get(require('../env.json')['memeUrl']);
    const memes = response.data.data.children;
    const randomIndex = Math.floor(Math.random() * 26); // Assuming you want a random meme from the first 26 items
    const imageUrl = memes[randomIndex].data.url;

    return imageUrl;
  } catch (error) {
    console.error('Error fetching meme:', error);
    return null;
  }
}

const meme = async (api, event) => {
  const memeUrl = await memegetter();
  let isokay = true
  let response = null
  if (memeUrl) {
    try {
      // Fetch the image as a stream
      response = await axios({
        method: 'GET',
        url: memeUrl,
        responseType: 'stream',
      });


    } catch (error) {
      isokay = false
      console.error('Error sending message with image:', error);
    }
    if (isokay) {
      // Send the message with the image stream as an attachment
      api.sendMessage(
        {
          body: 'Here:',
          attachment: response.data,
        },
        event.threadID
      );
    }
  } else {
    api.sendMessage('Sorry, could not fetch a meme at this time.', event.threadID, event.messageID);
  }
}


module.exports = {
  meme: meme
}