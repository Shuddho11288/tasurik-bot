const sendImage = require("./basicTools/sendImage");
const tweet = async (api, event) => {
  const link =
    "https://memezer-taupe.vercel.app/tweet?t=TEXT&name=UNAME&img=IMG&vanity=VANITY";
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = encodeURIComponent(url);
  let info = await api.getUserInfo(targetID);
  let username = info[targetID].name;
  let text = event.body.split("tweet")[1];
  text = text.replace("@" + username, "");
  text = encodeURIComponent(text);
  vanity = "@" + username.toLowerCase().split(" ").join("_");
  let nurl =
    "https://image.thum.io/get/width/1920/fullpage/noanimate/viewportWidth/700/viewportHeight/700" +
    link
      .replace("TEXT", text)
      .replace("UNAME", username)
      .replace("IMG", url)
      .replace("VANITY", vanity) +
    `&session=brefuy${process.hrtime.bigint()}rtgebiu`;
  console.log(nurl);
  sendImage.sendImage(api, event, nurl);
};
module.exports = { tweet };
