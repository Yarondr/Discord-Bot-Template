import { IBot, IEvent } from "../utils/interfaces";
import logger from "../utils/logger";

module.exports = {
    name: "ready",
    once: true,
    execute: async (bot: IBot, ...args: any) => {
        const { client, testServers, slashCommands } = bot;
        testServers.forEach(async serverId => {
            const guild = client.guilds.cache.get(serverId);
            if (!guild) {
                return logger.log(`Server ${serverId} not found`);
            }

            await guild.commands.set([...slashCommands.values()]);
        });
        logger.log("Your bot is ready to go!");
    }
} as IEvent