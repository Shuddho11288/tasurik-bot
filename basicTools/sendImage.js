const axios = require("axios");
const fs = require("fs");





const sendImage = async (api, event, url, mode = "png") => {
  let isokay = true;
  let response = null;
  let path =
    __dirname + `/cache/${event.senderID}${process.hrtime.bigint()}.png`;
  if (mode != "png") {
    path = path.replace(".png", "." + mode);
  }
  console.log(path);
  if (url) {
    try {
      // Fetch the image as a stream
      response = await axios({
        method: "GET",
        url: url,
        responseType: "arraybuffer",
      });

      fs.writeFileSync(path, response.data);
      response = fs.createReadStream(path);
    } catch (error) {
      isokay = false;
      console.error("Error sending message with image:", error);
    }
    if (isokay) {
      // Send the message with the image stream as an attachment
      api
        .sendMessage(
          {
            attachment: response,
          },
          event.threadID,
        )
        .then((...val) => {
          fs.unlinkSync(path);
        })
        .catch((err) => {
          console.log(err);
          api.sendMessage("Error sending message with image:", event.threadID);
        });
    }
  } else {
    api.sendMessage(
      "Sorry, could not fetch the image at this time.",
      event.threadID,
      event.messageID,
    );
  }
};

const sendImageWithMessage = async (api, event, msg, url) => {
  let isokay = true;
  let response = null;
  let path =
    __dirname + `/cache/${event.senderID}${process.hrtime.bigint()}.png`;
  console.log(path);
  if (url) {
    try {
      // Fetch the image as a stream
      response = await axios({
        method: "GET",
        url: url,
        responseType: "arraybuffer",
      });

      fs.writeFileSync(path, response.data);
      response = fs.createReadStream(path);
    } catch (error) {
      isokay = false;
      console.error("Error sending message with image:", error);
    }
    if (isokay) {
      // Send the message with the image stream as an attachment
      await api
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
          event.messageID,
        )
        .then((...val) => {
          console.log("working");
          fs.unlinkSync(path);
        })
        .catch((err) => {
          console.log(err);
          api.sendMessage("Error sending message with image:", event.threadID);
        });
    }
  } else {
    api.sendMessage(
      "Sorry, could not fetch the image at this time.",
      event.threadID,
      event.messageID,
    );
  }
};

const sendImageBuffer = async (api, event, img) => {
  const buffer = Buffer.from(img, "base64");

  const outputPath =
    __dirname + `/cache/${event.senderID}${process.hrtime.bigint()}.gif`;

  sharp(buffer, { animated: true }).toFile(outputPath, async (err, info) => {
    if (err) {
      console.error(err);
    } else {
      response = fs.createReadStream(outputPath);
      await api.sendMessage(
        {
          attachment: response,
        },
        event.threadID,
        () => {
          console.log("ok");
          fs.unlinkSync(outputPath);
        },
        event.messageID,
      );
    }
  });
};

const sendBulkImage = async (api, event, imgurllist) => {
  let isokay = true;
  let streamList = [];
  let pathList = [];
  for (let i = 0; i < imgurllist.length; i++) {
    let path =
      __dirname + `/cache/${event.senderID}${process.hrtime.bigint()}.png`;
    console.log(path);
    if (imgurllist[i]) {
      try {
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
      } catch {
        isokay = false;
        console.error("Error sending message with image:", error);
      }
    }
  }
  if (isokay) {
    // Send the message with the image stream as an attachment
    await api
      .sendMessage(
        {
          body: "Here are your images",
          attachment: streamList,
        },
        event.threadID,
        () => {
          console.log("ok");
          for (let i = 0; i < pathList.length; i++) {
            fs.unlinkSync(pathList[i]);
          }
        },
        event.messageID,
      )
      .then((...val) => {
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
