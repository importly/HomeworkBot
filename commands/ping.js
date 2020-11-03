module.exports = {
    run: async(message, args, client) => {
        message.channel.send(`Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${(client.ws.ping)}ms`);
    }
}