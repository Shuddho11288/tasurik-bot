const apiURLend =
  "https://memegeneratorapi.tasawarshuddho.repl.co/rainbow?imgurl=";
const sendImage = require("../basicTools/sendImage");
const rainbow = (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = encodeURIComponent(url);
  sendImage.sendImageWithMessage(
    api,
    event,
    "Fie Fie!",
    "https://image.thum.io/get/width/1920/fullpage/noanimate/viewportWidth/700/viewportHeight/700" +
      apiURLend +
      url +
      `&session=brefuy${process.hrtime.bigint()}rtgebiu`,
  );
};

module.exports = {
  rainbow,
};
