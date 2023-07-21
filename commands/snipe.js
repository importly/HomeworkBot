/*jshint esversion: 8 */

const {Discord,Collection,MessageEmbed} = require("discord.js");
let fs = require("fs");
let path = require("path");

module.exports = {
  run: async (message, args, client) => {
      if (client.sniper.has(message.channel.id)) {
        let stuff = client.sniper.get(message.channel.id);
        let sendr = new MessageEmbed();
        sendr.setTitle("I got you " + stuff.author);
        sendr.addField("The deleted message was", stuff.content);
        if (stuff.image) {
            message.channel.send(stuff.image);
        }
        message.channel.send(sendr);
      }else{
        message.channel.send("Rip, I guess I don't have the message");
      }
  }
};


