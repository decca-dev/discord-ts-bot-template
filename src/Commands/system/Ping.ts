import { Command } from "../../Structures/Command.js";

export default new Command({
  name: "ping",
  description: "pong",
  cooldown: 3,
  ownerOnly: false,
  adminOnly: false,
  permissions: [],
  category: "system",
  run: async (client, message, args) => {
    message.reply("hello");
  },
});
