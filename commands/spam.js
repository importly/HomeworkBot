/*jshint esversion: 8 */
module.exports = {
  spam: async (channel, messageTosent, index, limit) => {
    channel.send(messageTosent).then(message => {
			setTimeout(async () => {
				index++;
				if (index >= limit) {
					return;
				}
        await module.exports.spam(channel,messageTosent,index,limit);
			},10);
		});
  },
  run: async (message, args, client) => {
    let i = 0;
    let top = parseInt(args[1]);
    let messagee = args[0];
    let fullstring = "";
    for (let i = 0; i <= top; i++) {
      fullstring = fullstring + messagee + '\n';
      if (fullstring.length >= 2000) {
        message.channel.send(fullstring);
        fullstring = "";
      }
    }
    message.channel.send(fullstring);
    //module.exports.spam(message.channel,messagee,i,top);
  },
};
