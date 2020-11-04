/*jshint esversion: 8 */

const Discord = require('discord.js');
var fs = require('fs');
var path = require('path');

module.exports = {
    run: async(message, args,client) => {
        var data = require("../homeworkData.json");
        data[args[0]] = {date : args[1].trim(),desc : args[2].trim()};
        fs.writeFile('homeworkData.json', JSON.stringify(data), (err) => {
            if (err) throw err;
            message.channel.send(new Discord.MessageEmbed().setTitle('Added'));
        });
    }
};