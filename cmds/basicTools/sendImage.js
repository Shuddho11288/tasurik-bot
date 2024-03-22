const axios = require("axios");
const fs = require("fs");

const sendImage = async (api, event, url, mode = "png", message="") => {
  let isokay = true;
  let response = null;
  var path =
    __dirname + `/cache/${event.senderID}${process.hrtime.bigint()}.png`;
  if (mode != "png") {
    path = path.replace(".png", "." + mode);
  }
  console.log(path);
  if (url) {

      // Fetch the image as a stream
      response = await axios({
        method: "GET",
        url: url,
        responseType: "arraybuffer",
      });

      fs.writeFileSync(path, response.data);
      response = fs.createReadStream(path);

    if (isokay) {
      // Send the message with the image stream as an attachment

      details = {
        attachment: response,
      }
      if (message!= "") {
        details.body = message
      }
      api
        .sendMessage(
          details,
          event.threadID,
          ()=>{
            fs.unlinkSync(path)
          },
          event.messageID
        )

        .finally((err) => {
          console.log(err);
          fs.unlinkSync(path);
          api.sendMessage("Error sending message with image:", event.threadID);
        });
    }
  } else {
    fs.unlinkSync(path);
    api.sendMessage(
      "Sorry, could not fetch the image at this time.",
      event.threadID,
      event.messageID
    );
  }
};

const sendImageWithMessage = async (api, event, msg, url, ext = ".png") => {
  let isokay = true;
  let response = null;
  let path =
    __dirname + `/cache/${event.senderID}${process.hrtime.bigint()}.png`;
  if (ext != ".png") {
    path =
      __dirname + `/cache/${event.senderID}${process.hrtime.bigint()}${ext}`;
  }
  console.log(path);
  if (url) {

      // Fetch the image as a stream
      response = await axios({
        method: "GET",
        url: url,
        responseType: "arraybuffer",
      });

      fs.writeFileSync(path, response.data);
      response = fs.createReadStream(path);

    if (isokay) {
      // Send the message with the image stream as an attachment
      api
        .sendMessage(
          {
            body: msg,
            attachment: response,
          },
          event.threadID,
          () => {
            console.log("ok");
            fs.unlinkSync(path);
          },
          event.messageID
        )

        .finally((err) => {
          console.log(err);
          fs.unlinkSync(path);
          api.sendMessage("Error sending message with image:", event.threadID);
        });
    }
  } else {
    api.sendMessage(
      "Sorry, could not fetch the image at this time.",
      event.threadID,
      event.messageID
    );
  }
};
const { promisify } = require("util");
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);
const sendImageBuffer = async (api, event, img, ext = ".gif") => {
    const buffer = Buffer.from(img, "base64");
    let outputPath = __dirname + `/cache/${event.senderID}${process.hrtime.bigint()}.gif`;
    if (ext != ".gif") {
      outputPath = __dirname + `/cache/${event.senderID}${process.hrtime.bigint()}.png`;
    }
    await writeFileAsync(outputPath, buffer);
    const response = fs.createReadStream(outputPath);
    await api
      .sendMessage(
        {
          attachment: response,
        },
        event.threadID,
        () => {
          console.log("ok");
          fs.unlinkSync(outputPath);
        },
        event.messageID
      )
      .finally((err) => {
        fs.unlinkSync(path);
        sendImageBuffer(api, event, img, ".png");
      });
};
const sendBulkImage = async (api, event, imgurllist, msg='Here are your images:', mentions) => {
  let isokay = true;
  let streamList = [];
  let pathList = [];
  for (let i = 0; i < imgurllist.length; i++) {
    let path =
      __dirname + `/cache/${event.senderID}${process.hrtime.bigint()}.png`;
    console.log(path);
    if (imgurllist[i]) {

        // Fetch the image as a stream
        let response = await axios({
          method: "GET",
          url: imgurllist[i],
          responseType: "arraybuffer",
        });
        fs.writeFileSync(path, response.data);
        response = fs.createReadStream(path);
        streamList.push(response);
        pathList.push(path);

    }
  }
  if (isokay) {
    // Send the message with the image stream as an attachment
    await api
      .sendMessage(
        {
          body: msg,
          mentions: mentions,
          attachment: streamList,
        },
        event.threadID,
        () => {
          console.log("ok");
          for (let i = 0; i < pathList.length; i++) {
            fs.unlinkSync(pathList[i]);
          }
        },
        event.messageID
      )
      .finally((...val) => {
        fs.unlinkSync(pathList[i]);
      });
  }
};
module.exports = {
  sendImage,
  sendImageWithMessage,
  sendImageBuffer,
  sendBulkImage,
};
