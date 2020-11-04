/*jshint esversion: 8 */

module.exports = {
    run: async(message, args, client) => {
		client.user.setActivity(args[1], { type: args[0]});
    }
};