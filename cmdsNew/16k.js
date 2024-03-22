const config = {
    name: "16k",
    description: "Upscale an image using esrgan and modelx4",
    usage: "-16k <url>",
    category: "⚙️ Utils",
    author: "Tasawar Ahmed Shuddho",
    version: "1.0.0",
    permission: "all",
    alias: "upscale|esrgan",
      isReplyCommand: true,
  
  };
  const axios = require("axios");
  const fs = require("fs");
  const { promisify } = require("util");
  const { pipeline } = require("stream");
  const { createWriteStream } = require("fs");
  const streamPipeline = promisify(pipeline);
  
  const run = async (api, event, args = []) => {
    api.sendMessage(
      "Please wait while we upscale your image! It may take up to 3 minutes ⏳",
      event.threadID,
      event.messageID
    );
    let imageUrl = args.join(" ") || event.messageReply.attachments[0].url;
    const response = await axios({
      method: "GET",
      url: imageUrl,
      responseType: "arraybuffer",
    });
  
    let path = __dirname + `/cache/${event.senderID}.png`;
  
    let inputFileName = path;
    let outputFileName = path;
    let fileName = path;
    fs.writeFileSync(fileName, response.data);
    // Download and save the input image
  
    // Read the input image file
    const imageData = fs.readFileSync(inputFileName);
  
    // Convert image data to base64 format
    const base64ImageData = Buffer.from(imageData).toString("base64");
  
    // Prepare data for upscaling
          const data = {
              "data": [
                  
                    `data:image/png;base64,${base64ImageData}`,
              
                  "8x" // Replace this with your choice of upscaler
              ]
          };
  
    // Send request to the upscaling service
    const response2 = await axios.post("https://rifd-face-real-esrgan.hf.space/run/predict", data);
  
    console.log(response2.data);
    let da = response2.data.data[0];
    // save the image
    const base64Data = da.replace(/^data:image\/png;base64,/, "");
  
    // Decode the base64 data
    const buffer = Buffer.from(base64Data, "base64");
  
    // Save the decoded buffer to a file
        fs.unlinkSync(inputFileName);
        const readStream = require('stream').Readable.from(buffer);
        api.sendMessage({attachment: readStream}, event.threadID, event.messageID)
  };
  
  const handle = async (api, event) => {
    return;
  };
  
  module.exports = { run, config, handle };