const mySecret = process.env["4k"];
const axios = require("axios");
const sendImage = require("./basicTools/sendImage");
const remini = async (api, event) => {
  api.sendMessage(
    "✅ Processing Image... Please Wait for a minute.",
    event.threadID,
    event.messageID,
  );
  let imgurl = encodeURIComponent(event.messageReply.attachments[0].url);
  let apif = mySecret + imgurl;
  console.log(apif);
  let res = await axios.get(apif);

  let img = res.data.image_data;
  console.log(img);
  sendImage.sendImage(api, event, img);
};

module.exports = {
  remini,
};
