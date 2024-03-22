const config = {
  name: "tempmail",
  description: "Create a temporary mail",
  usage: "-tempmail",
  category: "📩 Email",
  author: "Tasawar Ahmed Shuddho",
  version: "1.0.0",
  permission: "all",
  alias: "tm|temp|temporarymail|tmail",
};
const axios = require("axios");
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');
async function createAccount() {
  const domain = 'yogirt.com';
  const id = `${uuidv4()}@${domain}`;
  const password = crypto.randomBytes(8).toString('hex');

  const url = 'https://api.mail.tm/accounts';
  const headers = {
    'Accept': 'application/ld+json',
    'Content-Type': 'application/ld+json'
  };
  const data = {
    address: id,
    password: password
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log(response.data);
    return { data: { email: id, pass: password } };
  } catch (error) {
    console.error('Error:', error);
    return {  data: { email:'error', pass: 'error' }  };
  }
}
const run = async (api, event, args) => {
  let data = await createAccount();
  console.log(data);

  let msg =
    "Mail created.✅\n Your temporary mail is: " +
    data.data.email +
    "\nYour temporary password is: " +
    data.data.pass;

  api.sendMessage(msg, event.threadID, event.messageID);
};

const handle = async (api, event) => {
  return;
};

module.exports = { run, config, handle };
