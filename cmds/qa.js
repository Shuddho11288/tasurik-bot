const axios = require('axios');
const cheerio = require('cheerio');

async function answerQuestionWithGoogle(query) {
  try {
    // Format the search query
    const formattedQuery = query.replace(' ', '+');
    const searchURL = `https://www.google.com/search?q=${formattedQuery}`;

    // Send an HTTP GET request to Google
    const response = await axios.get(searchURL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
      }
    });

    if (response.status === 200) {
      // Parse the HTML response
      const $ = cheerio.load(response.data);
      // Extract and return relevant information
      const hgKElcElements = $('.hgKElc');
  console.log(hgKElcElements)
      hgKElcElements.each((index, element) => {
        const data = $(element).text();
        console.log(`Data ${index + 1}: ${data}`);
      });
      const answer = $('div.BNeawe.iBp4i.AP7Wnd').first().text();
      return answer;
    } else {
      return 'Unable to retrieve an answer.';
    }
  } catch (error) {
    console.log(error);
    return 'An error occurred while retrieving the answer.';
  }
}

const qa = (api, event, question) => {
  
  answerQuestionWithGoogle(question)
    .then(answer => {
      api.sendMessage(`Answer: ${answer}`, event.threadID)
    })
    .catch(error => {
      console.log(error);
    });
}

module.exports = {
  qa: qa
}