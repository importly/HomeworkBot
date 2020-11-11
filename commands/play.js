/*jshint esversion: 8 */
// TODO: Need to work on stop and skip
const Discord = require("discord.js");
var fs = require("fs");
var path = require("path");
const ytdl = require("ytdl-core");

module.exports = {
  run: async (message, args, client) => {
    if (!message.member.voice.channel)
      return message.channel.send("Please join a voice channel.");
    if (message.guild.me.voice.channel)
      if (message.member.voice.channel !== message.guild.me.voice.channel) {
        return message.channel.send(
          "Error, the bot is already connected to another music channel or a song is playing."
        );
      }
    if (!args[0])
      return message.channel.send(
        "Error, please enter a **URL** following the command."
      );
    let validate = await ytdl.validateURL(args[0]);
    if (!validate)
      return message.channel.send(
        "Error, please input a __valid__ url following the command."
      );
    let info = await ytdl.getInfo(args[0]);
    let connection = await message.member.voice.channel.join();
    let dispatcher = await connection.play(
      ytdl(args[0], {
        filter: "audio",
        quality: "highestaudio",
        volume: "0.5",
      })
    );
    let playembed = new Discord.MessageEmbed()
      .setTitle("Now playing:")
      .setDescription(`${info.videoDetails.title}`)
      .setImage(info.videoDetails.thumbnail.thumbnails[4].url);
    message.channel.send(playembed);
  },
};
