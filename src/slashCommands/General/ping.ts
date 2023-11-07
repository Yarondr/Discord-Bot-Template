import { CommandInteraction } from 'discord.js';
import { IBot, ISlashCommand } from '../../utils/interfaces';

module.exports = {
    name: 'ping',
    description: 'Sends the bot latency',
    devOnly: false,
    executerPermissions: ['SendMessages'],
    botPermissions: ['SendMessages'],

    execute: async (bot: IBot, interaction: CommandInteraction) => {
        if (!interaction.isChatInputCommand()) return;

        await interaction.editReply({ content: `Pong! ${bot.client.ws.ping}ms` });
    }
} as ISlashCommand;