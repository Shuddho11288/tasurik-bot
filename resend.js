const database = require("./database.js");
const axios = require("axios");
const fs = require("fs");
const sendImage = require("../basicTools/sendImage");
const isResendON = (threadID) => {
  let dbase = database.getDatabase("resend");

  if (dbase[threadID] == true) {
    return true;
  }
  return false;
};

const resend = (api, event) => {
  if (isResendON(event.threadID)) {
    let dbase = database.getDatabase("resend");

    console.log(dbase);

    dbase[event.threadID] = false;

    database.setDatabase("resend", dbase);

    api.sendMessage("turned resend OFF for this thread", event.threadID);
  } else {
    let dbase = database.getDatabase("resend");

    dbase[event.threadID] = true;

    console.log(dbase);

    database.setDatabase("resend", dbase);

    api.sendMessage("turned resend ON for this thread", event.threadID);
  }
};

const saveForResend = (api, event) => {
  if (isResendON(event.threadID)) {
    let dbase = database.getDatabase("messages");
    let dbaseattachments = database.getDatabase("attachments");
    dbase[event.messageID] = event.body;
    let attachments_ = []
    let attachments = event.attachments
    //console.log(attachments)
    attachments.forEach(async (attachment) => {
      //api.sendMessage(attachment.url, event.threadID)
      attachments_.push(attachment.largePreviewUrl);
      console.log("sus\n");
      console.log(attachments_);
    });
    dbaseattachments[event.messageID] = attachments_;
    database.setDatabase("messages", dbase);
    database.setDatabase("attachments", dbaseattachments);
  }
};

const handleResend = async (api, event) => {
  let e = await api.getMessage(event.threadID, event.messageID);
  console.log(e);
  if (isResendON(event.threadID)) {
    let dbase = database.getDatabase("messages");
    let dbaseattachments = database.getDatabase("attachments");
    let msg = dbase[event.messageID];
    let attachments_ = [];
    if (msg == undefined) {
      msg =
        ":( Sorry could not find the message! Maybe the user has deleted it earlier than the resend setting!";
    }
    if (event.senderID == "61552181213388") {
      console.log("!");
      return 0;
    }
    if (dbaseattachments[event.messageID].length > 0) {
      let attachments = dbaseattachments[event.messageID];

      //console.log(attachments)
      attachments.forEach(async (attachment) => {
        //api.sendMessage(attachment.url, event.threadID)
        attachments_.push(attachment);
        console.log("sus\n");
        console.log(attachments_);
      });
    }

    //api.sendMessage(msg, event.threadID)
    let name = await api.getUserInfo(event.senderID);
    name = name[event.senderID]["name"];
    console.log(name);

    api
      .sendMessage(
        {
          body: "Message unsent by " + name + "\nContent: " + msg,
          mentions: [
            {
              tag: name,
              id: event.senderID,
            },
          ],
        },
        event.threadID,
      )
      .catch((err) => {});
    sendImage.sendBulkImage(api, event, attachments_);
  }
};

const resetResend = async (api, event) => {
  await api.sendMessage("Clearing resend database", event.threadID);
  database.setDatabase("messages", {});
  database.setDatabase("attachments", {});

  api.sendMessage("Cleared resend database successfully!", event.threadID);
};
module.exports = {
  resend: resend,
  isResendON: isResendON,
  saveForResend: saveForResend,
  handleResend: handleResend,
  resetResend: resetResend,
};
