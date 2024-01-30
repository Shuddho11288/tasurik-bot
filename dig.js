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
  sendImage.sendImageBuffer(api, event, img);
};





const gay = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Gay().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const greyscale = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Greyscale().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const invert = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Invert().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const sepia = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Sepia().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const blink = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Blink().getImage(url);
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
  sendImage.sendImageBuffer(api, event, img);
};





const affect = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Affect().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const batslap = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Batslap().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const beautiful = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Beautiful().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const bed = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Bed().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const bobross = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Bobross().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const clown = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Clown().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const confusedstonk = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.ConfusedStonk().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const deepfry = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Deepfry().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const deletepic = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Delete().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const discordblack = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.DiscordBlack().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const discordblue = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.DiscordBlue().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const doublestonk = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.DoubleStonk().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const facepalm = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Facepalm().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const heartbreaking = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Heartbreaking().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const hitler = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Hitler().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const jail = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Jail().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const karaba = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Karaba().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const kiss = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Kiss().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const lisapresentation = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.LisaPresentation().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const mikkelsen = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Mikkelsen().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const mms = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Mms().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const notstonk = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.NotStonk().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const podium = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Podium().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const poutine = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Poutine().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const rip = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Rip().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const snyder = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Snyder().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const spank = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Spank().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const stonk = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Stonk().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const tatoo = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Tatoo().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const thomas = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Thomas().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const trash = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Trash().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const wanted = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Wanted().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const circle = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Circle().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const color = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Color().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const denoise = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Denoise().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};





const mirror = async (api, event) => {
  const apiURL =
    "https://graph.facebook.com/USER_ID/picture?width=1920&height=1919&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";        
  let targetID = Object.keys(event.mentions)[0] || event.senderID;
  let url = apiURL.replace("USER_ID", targetID);
  url = await unshortenUrl(url);
  let img = await new DIG.Mirror().getImage(url);
  console.log(img);
  sendImage.sendImageBuffer(api, event, img);
};



module.exports = {
  blur, gay, greyscale, invert, sepia, blink, triggered, ad, affect, batslap, beautiful, bed, bobross, clown, confusedstonk, deepfry, deletepic, discordblack, discordblue, doublestonk, facepalm, heartbreaking, hitler, jail, karaba, kiss, lisapresentation, mikkelsen, mms, notstonk, podium, poutine, rip, snyder, spank, stonk, tatoo, thomas, trash, wanted, circle, color, denoise, mirror
};