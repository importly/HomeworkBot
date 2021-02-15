module.exports = {
    run: async (message, args, client) => {
      let i = 0;
      let top = parseInt(args[1]);
      if (!top) {
        return;
      }
      let messagee = args[0];
      let e = ""
      for (let i = 0; i<top; i++) {
        e+=messagee + "\n";
      }
      if (e.length > 2000){
        message.channel.send("Too long");
      } else {
      message.channel.send(e);}
    },
  };
  