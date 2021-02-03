/*jshint esversion: 8 */
const { Client, Collection } = require("discord.js");
const { MAX_PACKET_SIZE } = require("opusscript");

module.exports = class extends Client {
  constructor(config) {
    super();
    this.handler = {
      player: null,
    };
    this.sniper = new Collection();
  }
};
