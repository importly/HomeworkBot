/*jshint esversion: 8 */

module.exports = {
  run: async (message, args, client) => {
    message.channel.send({
      embed: {
        title: "Help",
        description:
          "The help command, get all the help you need here. I need help too",
        fields: [
          {
            name: ".ls",
            value: "Lists the homework for today",
          },
          {
            name: ".add <homework name>, <due date mm/dd/yyyy>, <description>",
            value: "Add homework",
          },
          {
            name: ".rm <homework name>",
            value: "Remove homework",
          },
          {
            name: ".info <homework name>",
            value: "Get information about homework",
          },
          {
            name: ".play <Video Name or URL>" ,
            value: "Plays a song from the internet" ,
          },
          {
            name: ".ping",
            value: "It will respond with a latency!",
          },
          {
            name: ".stop",
            value: "Stops song!",
          },
          {
            name: ".startyping <time in seconds>, <thing to say after time>",
            value: "Makes bot start typing stuff after the alloted time has passed",
          },
          {
            name: ".date",
            value: "Todays date",
          },
        ],
      },
    });
  },
};
