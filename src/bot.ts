import { TSClient } from "./Structures/Client.js";
import { Intents } from "discord.js";
import { config } from "dotenv";
import { Logger } from "./Utils/Logger.js";
import pretty from "pretty-ms";

const logger = new Logger("client");
config();
export const client = new TSClient({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
client.loadCommands();
client.loadListeners();

client.login(process.env.TOKEN);
