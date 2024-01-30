const DIG = require("discord-image-generation");
const axios = require('axios');
const sendImage = require("./basicTools/sendImage");

async function unshortenUrl(shortUrl) {
  try {
    const response = await axios.head(shortUrl, { maxRedirects: 10 });
    console.log(response.request.res.responseUrl);
    return response.request.res.responseUrl;
  } catch (error) {
    console.error("Error while unshortening URL:", error.message);
    return null;
  }
}

const blur = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Blur().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const gay = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Gay().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const greyscale = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Greyscale().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const invert = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Invert().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const sepia = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Sepia().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const blink = async (api, event) => {
    try{
        var ms = Number(event.body.split('|')[1]) || 100
    }
    catch {
        let ms = 100
    }
    
    const apiURL =
      "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
    let targetID = Object.keys(event.mentions)[0] || event.senderID;
    let url = apiURL.replace("USER_ID", targetID);
    url = await unshortenUrl(url);
    let nurl = await unshortenUrl("https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662".replace("USER_ID", event.senderID))
  
    let img = await new DIG.Blink().getImage(ms, nurl, url);
    console.log(img);
    sendImage.sendImageBuffer(api, event, img);
  };
  





const triggered = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Triggered().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const ad = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Ad().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const affect = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Affect().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const batslap = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Batslap().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const beautiful = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Beautiful().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const bed = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Bed().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const bobross = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Bobross().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const clown = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Clown().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const confusedstonk = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.ConfusedStonk().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const deepfry = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Deepfry().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const deletepic = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Delete().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const discordblack = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.DiscordBlack().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const discordblue = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.DiscordBlue().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const doublestonk = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.DoubleStonk().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const facepalm = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Facepalm().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const heartbreaking = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Heartbreaking().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const hitler = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Hitler().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const jail = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Jail().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const karaba = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Karaba().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const kiss = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Kiss().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const lisapresentation = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.LisaPresentation().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const mikkelsen = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Mikkelsen().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const mms = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Mms().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const notstonk = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.NotStonk().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const podium = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Podium().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const poutine = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Poutine().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const rip = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Rip().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const snyder = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Snyder().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const spank = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let nurl = await unshortenUrl("https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662".replace("USER_ID", event.senderID))
  let img = await new DIG.Spank().getImage( nurl ,url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const stonk = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Stonk().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const tatoo = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Tatoo().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const thomas = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Thomas().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const trash = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Trash().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const wanted = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Wanted().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const circle = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Circle().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const color = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Color().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const denoise = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Denoise().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};





const mirror = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Mirror().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img, 'png');
};



module.exports = {
  blur, gay, greyscale, invert, sepia, blink, triggered, ad, affect, batslap, beautiful, bed, bobross, clown, confusedstonk, deepfry, deletepic, discordblack, discordblue, doublestonk, facepalm, heartbreaking, hitler, jail, karaba, kiss, lisapresentation, mikkelsen, mms, notstonk, podium, poutine, rip, snyder, spank, stonk, tatoo, thomas, trash, wanted, circle, color, denoise, mirror
};