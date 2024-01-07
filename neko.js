const axios = require("axios");
const sendImage = require("./basicTools/sendImage");

const neko = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "neko";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const waifu = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "waifu";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const husbando = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "husbando";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const kitsune = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "kitsune";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const lurk = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "lurk";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const shoot = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "shoot";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const sleep = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "sleep";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const shrug = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "shrug";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const stare = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "stare";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const wave = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "wave";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const poke = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "poke";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const smile = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "smile";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const peck = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "peck";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const wink = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "wink";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const blush = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "blush";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const smug = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "smug";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const tickle = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "tickle";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const yeet = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "yeet";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const think = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "think";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const highfive = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "highfive";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const feed = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "feed";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const bite = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "bite";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const bored = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "bored";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const nom = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "nom";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const yawn = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "yawn";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const facepalm = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "facepalm";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const cuddle = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "cuddle";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const kick = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "kick";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const happy = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "happy";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const hug = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "hug";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const baka = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "baka";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const pat = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "pat";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const nod = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "nod";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const nope = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "nope";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const kiss = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "kiss";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const dance = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "dance";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const punch = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "punch";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const handshake = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "handshake";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const slap = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "slap";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const cry = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "cry";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const pout = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "pout";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const handhold = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "handhold";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const thumbsup = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "thumbsup";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};

const laugh = async (api, event) => {
  let url = "https://nekos.best/api/v2/" + "laugh";
  let response = await axios.get(url);
  sendImage.sendImage(api, event, response.data.results[0].url, "gif");
};
module.exports = {
  neko,
  waifu,
  husbando,
  kitsune,
  lurk,
  shoot,
  sleep,
  shrug,
  stare,
  wave,
  poke,
  smile,
  peck,
  wink,
  blush,
  smug,
  tickle,
  yeet,
  think,
  highfive,
  feed,
  bite,
  bored,
  nom,
  yawn,
  facepalm,
  cuddle,
  kick,
  happy,
  hug,
  baka,
  pat,
  nod,
  nope,
  kiss,
  dance,
  punch,
  handshake,
  slap,
  cry,
  pout,
  handhold,
  thumbsup,
  laugh,
};
