/*jshint esversion: 8 */

const Discord = require("discord.js");
var fs = require("fs");
var path = require("path");

module.exports = {
  run: async (message, args, client) => {
    let data = require("../homeworkData.json");

    if (data[args[0]]) {
      message.channel.send(
        new Discord.MessageEmbed()
          .setTitle(args[0])
          .addField(data[args[0]].date, data[args[0]].desc)
      );
    } else {
      message.channel.send(
        new Discord.MessageEmbed().setTitle("Unknown Homework")
      );
    }
  },
};
