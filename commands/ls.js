/*jshint esversion: 8 */

const Discord = require("discord.js");
var fs = require("fs");
var path = require("path");

module.exports = {
  run: async (message, args, client) => {
    var data = require("../homeworkData.json");

    const send = new Discord.MessageEmbed().setTitle("Current Homework");

    for (var i in data) {
      console.log(i);
      send.addField(
        i,
        "Due date: " + data[i].date + " " + " Description: " + data[i].desc
      );
    }

    message.channel.send(send);
  },
};
