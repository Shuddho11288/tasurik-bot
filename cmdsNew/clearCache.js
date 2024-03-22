const config = {
  name: "clearCache",
  description: "Clear the cache folder!",
  usage: "-clearCache",
  category: "🤖 Bot Admin Only",
  author: "Tasawar Ahmed Shuddho",
  version: "1.0.0",
  permission: "admin",
  alias: "cc|clearcache|emptycache|cacheclear|cacheClear",
};

const fs = require("fs");

const pathi = require("path");

const run = async (api, event) => {
  var result = "Cleared the cache folder! ✅\nDetailed Info:";

  let path = pathi.resolve(__dirname, "../cmds/basicTools/cache");

  if (fs.existsSync(path)) {
    fs.readdir(path, (err, files) => {
      if (err) {
        console.log(err);
      }

      for (const file of files) {
        if (file.endsWith(".png") || file.endsWith(".gif") || file.endsWith(".jpg")) {
            
          let line =
          "Deleted " +
          file +
          " from the cache folder. Time: " +
          process.hrtime.bigint();
            result += `\n${line}`;
          fs.unlinkSync(path + "/" + file);

        }
      }
      api.sendMessage(result, event.threadID, event.messageID);
    });
  }


};

const handle = async (api, event) => {
  return;
};

module.exports = { run, config, handle };
