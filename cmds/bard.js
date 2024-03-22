const bardURL = require('../env.json')["Bardapiurl"];
const palmURL = require('../env.json')["bardURL"];
const boldify = require("./boldify");
const axios = require("axios");

function boldifyIfPresent(text) {
  return text.replace(/\*\*(.*?)\*\*/g, (match, p1) => boldify(p1));
}

function beautifyApiResponse(apiResponse) {
  let firstChoiceContent = apiResponse.choices[0].content.join("\n");
  let images = apiResponse.images.map((image) => `${image}`);
  let links = apiResponse.links.map((link) => `${link}`);
  let formattedMessage = `
${boldify("Response: ")}
${boldifyIfPresent(firstChoiceContent)}

`;
  if (images.length > 0) {
    formattedMessage += `\n\n${boldify("Images: ")}\n${images.join("\n")}`;
  }

  if (links.length > 0) {
    formattedMessage += `\n\n${boldify("Links: ")}\n${links.join("\n")}`;
  }
  return formattedMessage;
}

const bard = async (api, event, opening = false) => {
  if (opening == false) {
    api.sendMessage(
      "Generating response from google bard",
      event.threadID,
      event.messageID,
    );
  }

  let prompt = event.body.split("bard")[1];
  if (prompt == "") {
    prompt = "Hi Bard";
  } else {
    prompt = encodeURIComponent(prompt);
  }

  let fullurl = bardURL.replace("hello", prompt).replace("1", event.senderID);
  try {
    let response = await axios.get(fullurl);
    let result = response.data["Bard"]["message"];
    console.log(result);
    api.sendMessage(result, event.threadID, event.messageID);
  } catch {
    bard(api, event, true);
  }
  if (false) {
    console.log("error happened");
    bard(api, event, true);
  } else {
    
  }
};

const palm = async (api, event) => {
  api.sendMessage(
    "Generating response from google palm",
    event.threadID,
    event.messageID,
  );
  let prompt = event.body.split("palm")[1];
  if (prompt == "") {
    prompt = "Hi Palm";
  } else {
    prompt = encodeURIComponent(prompt);
  }

  let fullurl = palmURL + prompt;
  let response = await axios.get(fullurl);
  console.log(response.data);
  api.sendMessage(response.data, event.threadID, event.messageID);
};

module.exports = {
  bard: bard,
  palm: palm,
};
