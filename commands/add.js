/*jshint esversion: 8 */

const Discord = require("discord.js");
let fs = require("fs");
let path = require("path");

module.exports = {
  run: async (message, args, client) => {
    let data = require("../homeworkData.json");
    if (args[0] && args[1] && args[2]) {
      data[args[0]] = { date: args[1].trim(), desc: args[2].trim() };
      fs.writeFile("homeworkData.json", JSON.stringify(data), (err) => {
        if (err) throw err;
        message.channel.send(new Discord.MessageEmbed().setTitle("Added"));
      });
    } else {
      message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("Not formated correctly")
          .addField(
            ".add <homework name>, <due date mm/dd/yyyy>, <description>",
            "^Format^"
          )
      );
    }
  },
};
