const apiu =
  "https://image.thum.io/get/width/1920/fullpage/noanimate/viewportWidth/1920/viewportHeight/1920/https://memegeneratorapi.tasawarshuddho.repl.co/asciiimg?imgurl=URL&size=200";
const sendImage = require("../basicTools/sendImage");
const asciiart = (api, event) => {
  let imgurl = encodeURIComponent(event.messageReply.attachments[0].url);
  if (!imgurl) {
    api.sendMessgae(
      "Please reply to an image",
      event.threadID,
      event.messageID,
    );
  }
  let apiurl =
    apiu.replace("URL", imgurl) +
    `&session=brefuy${process.hrtime.bigint()}rtgebiu`;
  sendImage.sendImage(api, event, apiurl);
};

module.exports = {
  asciiart,
};
