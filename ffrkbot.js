console.log(`WTF`);
const Commando = require('discord.js-commando');
const fs = require('fs');
const path = require('path');

const configPath = 'config.json';

const configFile = fs.readFileSync(configPath);
const config = JSON.parse(configFile);
const token = config.token;

const owner = config.owner;

const client = new Commando.Client({
  owner: owner,
  disableEveryone: true,
  commandPrefix: ',',
});


client.once('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
  client.user.setGame(',help');
});

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['ffrk', 'FFRK-related commands'],
  ])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, 'commands'));

client.login(token);


const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);