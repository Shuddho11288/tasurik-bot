const axios = require("axios");
const nteachurl =
  "https://simsimi.fun/api/v2/?mode=teach&lang=bn&message=QUES&answer=ANSWER";
const nsimurl =
  "https://simsimi.fun/api/v2/?mode=talk&lang=bn&message=MESSAGE&filter=false";

const nsim = async (api, event) => {
  var msg = encodeURIComponent(event.body.split("nsim")[1]);
  var url = nsimurl.replace("MESSAGE", msg);
  var reply = await axios.get(url);
  var replymsg = reply.data.success;
  api.sendMessage(replymsg, event.threadID, event.messageID);
};

const nteach = async (api, event) => {
  if (!event.body.includes("|")) {
    api.sendMessage(
      "Please add Question and Answer and seperate them by |",
      event.threadID,
      event.messageID,
    );
    return;
  }

  var msg = event.body.split("nteach")[1];
  var ques = encodeURIComponent(msg.split("|")[0]);
  var ans = encodeURIComponent(msg.split("|")[1]);
  var url = nteachurl.replace("QUES", ques).replace("ANSWER", ans);
  var reply = await axios.get(url);
  var replymsg = reply.data.success;
  api.sendMessage(replymsg, event.threadID, event.messageID);
};
module.exports = {
  nsim,
  nteach,
};
