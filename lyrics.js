const boldify = require("./boldify");
const apiEndPoint = "https://song-api-six.vercel.app/song/";
const axios = require("axios");
// Function to beautify the song information
function beautifySongInfo(songInfo) {
  const { about, lyrics } = songInfo;

  const formattedAbout = `
${boldify("Title:")} ${about.title}
${boldify("Artist:")} ${about.artist}
${boldify("Genius URL:")} ${about.url}
${boldify("Image URL:")} ${about.image || "N/A"}
`;

  // You can add additional formatting as needed
  const formattedLyrics = `
${boldify("Lyrics:")}
${lyrics}
`;

  return `${formattedAbout}\n${formattedLyrics}`;
}
const lyrics = async (api, event) => {
  const songName = encodeURIComponent(event.body.split("lyrics")[1].trim());
  console.log(songName);
  console.log(apiEndPoint + songName)
  const song = await axios.get(apiEndPoint + songName);
  let msg = boldify("Here is what I found on google:");
  msg += beautifySongInfo(song.data);
  api.sendMessage(msg, event.threadID, event.messageID);
};

module.exports = {
  lyrics,
};
