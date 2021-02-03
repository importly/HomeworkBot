/*jshint esversion: 8 */

const Discord = require("discord.js");
var fs = require("fs");
var path = require("path");
const config = require("./config.json");
const Client = require("./client/Client");
const client = new Client();
var commands = {};

fs.readdir("./commands", (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }
  files.forEach((file, index) => {
    console.log(file, index);
    commands[file.replace(".js", "")] = require("./commands/" + file);
  });
});

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", (message) => {
  if (message.author.id == client.user.id) return;
  if (message.content.startsWith(config.prefix)) {
    const disposablemessage = message.content
      .slice(config.prefix.length)
      .trim();
    const command = disposablemessage.split(/ +/)[0];
    const args = disposablemessage.slice(command.length).trim().split(/,+/);
    if (commands[command]) {
      console.log(command, args);
      commands[command].run(message, args, client);
    }
  }
});

client.on("messageDelete", (message) => {
  client.sniper.set(message.channel.id, {
    content:message.content,
    author:message.author.username,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null,
  });
  console.log(client.sniper.get(message.channel.id));
});

client.login(config.key);
