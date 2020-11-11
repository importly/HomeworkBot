//message.channel.startTyping();  message.channel.stopTyping();
/*jshint esversion: 8 */

module.exports = {
    run: async(message, args, client) => {
        message.channel.startTyping();
        setTimeout(function(){
            message.channel.stopTyping();
            message.channel.send(args[1]);
        }, parseInt(args[0]) * 1000);
    }
};