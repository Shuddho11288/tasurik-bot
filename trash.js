const DIG = require("discord-image-generation");
const axios = require("axios");
const sendImage = require("../basicTools/sendImage");

async function unshortenUrl(shortUrl) {
  try {
    const response = await axios.head(shortUrl, { maxRedirects: 10 });
    console.log(response.request.res.responseUrl);
    return response.request.res.responseUrl;
  } catch (error) {
    console.error("Error while unshortening URL:", error.message);
    return null;
  }
}
const trash = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Trash().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};

module.exports = {
  trash,
};
