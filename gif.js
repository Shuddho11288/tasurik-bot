const axios = require('axios');
const cheerio = require('cheerio');

async function getGif(query) {
  try {
    const response = await axios.get(`https://tenor.com/search/${query}-gifs`);
    const $ = cheerio.load(response.data);


    const gifUrl = $('link').eq(2).attr('href');

    console.log(gifUrl);
    return gifUrl;
  } catch (error) {
    console.error('Error getting GIF:', error);
    return null;
  }
}

const gif = (api, event) => {
  const query = event.body.split(' ').slice(1).join(' ')
  if (!query) {
    api.sendMessage('Please provide a search query.', event.threadID, event.messageID);
    return;
  }
  getGif(query).then(async gifUrl => {
      if (gifUrl) {
        try {
          // Fetch the image as a stream
          const response = await axios({
            method: 'GET',
            url: gifUrl,
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
      else {
        api.sendMessage('Sorry, I couldn\'t find a GIF for that.', event.threadID, event.messageID)
      }
    })}

module.exports = {
  gif: gif
}