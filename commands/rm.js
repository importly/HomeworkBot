/*jshint esversion: 8 */

const Discord = require('discord.js');
var fs = require('fs');
var path = require('path');

module.exports = {
    run: async(message, args, client) => {
    var data = require("../homeworkData.json");

    const send = new Discord.MessageEmbed().setTitle('Removed');

    if (data[args[0]]) {
        delete data[args[0]];
    }

    fs.writeFile('homeworkData.json', JSON.stringify(data), (err) => {
        if (err) throw err;
        message.channel.send(send);
    });
    //message.channel.send(JSON.stringify(data))
    }
};