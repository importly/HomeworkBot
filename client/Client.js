/*jshint esversion: 8 */
const { Client } = require('discord.js');

module.exports = class extends Client {
	constructor(config) {
		super();
		this.handler = {
			player : null,
		};
	}
};