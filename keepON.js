

const keepON = () => {
  const express = require('express');
  const app = express();
  const port = 3000;
  app.get('/', (req, res) => {
    res.send(`        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Glassmorphic Bot</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap">
            <style>
                body {
                    background-image: url('https://source.unsplash.com/1920x1080/?dark+sky+nature');
                    background-size:cover;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    margin: 0;
                    font-family: 'Roboto', sans-serif;
                }

                .glass-container {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    backdrop-filter: blur(10px);
                    padding: 20px;
                    text-align: center;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    font-size: 24px;
                    font-weight: 700;
                }

                a {
                    text-decoration: none;
                    color: #4e6bff;
                }

                a:hover {
                    text-decoration: underline;
                }
            </style>
        </head>
        <body>
            <div class="glass-container">
                <h1>Bot is on!</h1>
                <p>Connect with us on <a href="https://www.facebook.com/profile.php?id=61552181213388" target="_blank">Facebook</a></p>
            </div>
        </body>
        </html>`);

  });
  
  app.get("/cron", (req, res) => {
  // the code you want to run

  res.sendStatus(200) // sends an "OK" response
})

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}
const http = require('http');

const keepAlive = () => {
  setInterval(() => {
    http.get('http://tasurik.glitch.me/');
    console.log('ok sus')
  }, 60000); // Send a request every 1 minute
};

keepAlive();



module.exports = keepON;