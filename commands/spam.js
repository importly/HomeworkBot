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
    if (!top) {
      return;
    }
    if (top >= 500) {
      return;
    }
    let messagee = args[0];
    module.exports.spam(message.channel,messagee,i,top);
  },
};
