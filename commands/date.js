/*jshint esversion: 8 */
module.exports = {
  run: async (message, args, client) => {
    message.channel.send(`Date is ${new Date().toISOString().slice(0, 10)}`);
  },
};
