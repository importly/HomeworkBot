/*jshint esversion: 8 */

const Discord = require("discord.js");
var fs = require("fs");
var path = require("path");

module.exports = {
  run: async (message, args, client) => {
    if (!message.member.voice.channel)
      return message.channel.send("Please join a voice channel.");
    if (message.guild.me.voice.channel) {
      if (message.member.voice.channel !== message.guild.me.voice.channel) {
        return message.channel.send(
          "Error, the bot is already connected to another music channel or a song is playing."
        );
      }
    }
    if (message.client.handler.player) {
			message.client.handler.player.end();
			message.client.handler.player = null;
			return message.channel.send("Stoped");
    } else {
      return message.channel.send("No, music playing");
    }
  },
};
