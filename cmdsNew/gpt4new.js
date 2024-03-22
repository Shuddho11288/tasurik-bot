const config = {
  name: "gpt4new",
  description: "New chat gpt 4! Full Credit Goes to the developer of the bot!",
  usage: "-gpt4new <prompt>",
  category: "🅰️ AI",
  author: "Tasawar Ahmed Shuddho",
  version: "1.0.0",
  permission: "all",
  alias: "ai4|chatgpt4|chat4|cg4|cgpt4",
};
const axios = require("axios");

async function getChatbotResponse(prompt) {
  try {
    // Make GET request to fetch HTML
    const response = await axios.get("https://gpt4free.io/chat/");
    const htmlString = response.data;

    // Extract nonce value from HTML
    const regex = /restNonce&#34;:&#34;([a-zA-Z0-9]+)/;
    const match = htmlString.match(regex);

    if (match) {
      const nonce = match[1];

      // Define the request payload
      const payload = {
        botId: "default",
        customId: null,
        session: "N/A",
        chatId: "xehqfzweqec",
        contextId: 1781,
        messages: [],
        newMessage: prompt,
        newFileId: null,
        stream: true,
      };

      // Define the headers
      const headers = {
        Accept: "text/event-stream",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-GB,en;q=0.9,en-US;q=0.8",
        "Content-Type": "application/json",
        Dnt: "1",
        Origin: "https://gpt4free.io",
        Referer: "https://gpt4free.io/chat/",
        "Sec-Ch-Ua":
          '"Chromium";v="122", "Not(A:Brand";v="24", "Microsoft Edge";v="122"',
        "Sec-Ch-Ua-Mobile": "?0",
        "Sec-Ch-Ua-Platform": '"Windows"',
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0",
        "X-Wp-Nonce": nonce,
      };

      // Make the POST request
      const chatbotResponse = await axios.post(
        "https://gpt4free.io/wp-json/mwai-ui/v1/chats/submit",
        payload,
        { headers }
      );

      // Extract the relevant part of the response
      const responseData =
        chatbotResponse.data.split("\n\n")[
          chatbotResponse.data.split("\n\n").length - 2
        ];
      return responseData;
    } else {
      throw new Error("No match found for nonce.");
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

const run = (api, event, args) => {
  api.sendMessage(
    "Loading response from GPT4! ⏳...",
    event.threadID,
    event.messageID
  );
  let prompt = args.join(" ");

  getChatbotResponse(prompt).then((response) => {
    console.log(response);
    const jsonData = response.replace("data: ", "");

    const data = JSON.parse(JSON.parse(jsonData).data);
    const success = data.success;
    const reply = data.reply;
    const usage = data.usage;

    console.log(success);
    console.log(reply);
    console.log(usage);

    api.sendMessage(reply, event.threadID, event.messageID);
  });
};

const handle = async (api, event) => {
  return;
};

module.exports = { run, config, handle };
