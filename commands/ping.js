/*jshint esversion: 8 */

module.exports = {
  run: async (message, args, client) => {
    /*
        message.channel.send("Time Right now:")
        message.channel.send(Date.now())
        message.channel.send("Message time created:")
        message.channel.send(message.createdTimestamp)
    */
    message.channel.send(
      `Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${
        client.ws.ping
      }ms`
    );
  },
};
