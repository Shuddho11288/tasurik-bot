/*
A simple messenger chat app
by Tasawar Ahmed Shuddho
*/

const express = require('express')
const axios = require('axios')
const bot = require('./extension/bot/bot')
const app = express()
const loadMessage = require('./BasicTools/loadMessage')
const sendMessage = require('./BasicTools/sendMessage')

app.get('/', (req, res) => {

    // Send the index.html
    res.sendFile('app.html', { root: __dirname+'/app' })
})

app.get('/default', (req, res) => {
    res.sendFile('app.html', { root: __dirname+'/app' })}
    
    )

const port = 3000

// Make a get request that takes two parameters. 1. username,2.message. Then sends a reply to the sender
app.get('/message', async (req, res) => {
    //let username = req.query.username
    let message = req.query.message
    let s =  await bot.listen(message)
    console.log(s)
    res.json({message:s})
})
app.listen(port, () => {
    console.log(`Investigate app listening on port ${port}`)
    let url = 'http://localhost:3000/'.replace('3000', port)
    console.log(url)
})

app.get('/getMessage', async (req, res) => {
    let id = req.query.id
    let message = loadMessage.loadMessage(id)
    message = loadMessage.jsonTohtml(message)
    //console.log(message)
    res.json({message:message})
    
})

app.get('/getMessageRaw', async (req, res) => {
    let id = req.query.id
    let message = loadMessage.loadMessage(id)

    res.json(message)
})
app.get('/sendMessage', async (req, res) => {
    let id = req.query.id
    let message = req.query.message
    sendMessage.sendMessage(id, message)
    res.json({success:true})
})

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store');
    next();
  });
process.on('uncaughtException', function (err) {
    console.log(err);
})
process.on('unhandledRejection', function (err) {
    console.log(err);
})