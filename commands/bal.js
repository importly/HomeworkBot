/*jshint esversion: 8 */

const Discord = require("discord.js");
let fs = require("fs");
let path = require("path");

module.exports = {
  run: async (message, args, client) => {
    let data = require("../peopleMoney.json");
    let id = message.author.id;
    const sending = new Discord.MessageEmbed().setTitle(message.author.username + " Balance");
    if (data[id]) {
      sending.addField("Wallet", data[id].balance);
    } else {
      data[id] = {};
      data[id].balance = 0;
      sending.addField("Wallet", data[id].balance);
      fs.writeFile("peopleMoney.json", JSON.stringify(data), (err) => {
        if (err) throw err;
      });
    }

    console.log(JSON.stringify(data));

    message.channel.send(sending);
  },
};
