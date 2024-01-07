const axios = require('axios');

// Function to send a message with an image attachment
async function sendMessageWithImage(api, event) {

  let msg = event.body.split('troll')[1]
  let top = msg.split('|')[0]
  let bottom = msg.split('|')[1]
  let imageUrl = `http://apimeme.com/meme?meme=Troll-Face&top=${top}&bottom=${bottom}`
  try {
    // Fetch the image as a stream
    const response = await axios({
      method: 'GET',
      url: imageUrl,
      responseType: 'stream',
    });

    // Send the message with the image stream as an attachment
    api.sendMessage(
      {
        body: 'Here:',
        attachment: response.data,
      },
      event.threadID
    );
  } catch (error) {
    console.error('Error sending message with image:', error);
  }
}


module.exports = {
  troll: sendMessageWithImage
}