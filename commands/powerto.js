/*jshint esversion: 8 */
module.exports = {
  run: async (message, args, client) => {
		message.channel.send(parseInt(args[0]) ** parseInt(args[1]));
	},
};
