const sendImage = require("../basicTools/sendImage");
const fbhack = async (api, event) => {
  const link =
    "https://memegeneratorapi.tasawarshuddho.repl.co/fbhack?name=UNAME&imgurl=IMGURL_API";
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = encodeURIComponent(url);
  let info = await api.getUserInfo(targetID);
  let username = encodeURIComponent(info[targetID].name);
  if (Object.keys(event.mentions).length>0){
    username= encodeURIComponent(event.mentions[targetID].replace("@",""))
  }

  let nurl =
    "https://image.thum.io/get/width/1920/fullpage/noanimate/viewportWidth/600/viewportHeight/1200/" +
    link

      .replace("UNAME", username)
      .replace("IMGURL_API", url)
 +
    `&session=brefuy${process.hrtime.bigint()}rtgebiu`;
  console.log(nurl);
  sendImage.sendImage(api, event, nurl);
};
module.exports = { fbhack };
