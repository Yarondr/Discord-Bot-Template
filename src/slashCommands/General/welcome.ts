import { ApplicationCommandOptionType, CommandInteraction } from 'discord.js';
import { IBot, ISlashCommand } from '../../utils/interfaces';

module.exports = {
    name: 'welcome',
    description: 'Sends a welcome message to a specific user',
    devOnly: false,
    executerPermissions: ['SendMessages'],
    botPermissions: ['SendMessages'],

    options: [
        {
            name: 'user',
            type: ApplicationCommandOptionType.User,
            description: 'The user you want to welcome',
            required: true,
        }
    ],

    execute: async (bot: IBot, interaction: CommandInteraction) => {
        if (!interaction.isChatInputCommand()) return;
        const { options, guild } = interaction;

        const user = options.getUser('user')!;
        await interaction.editReply({ content: `Welcome ${user}! to our server!` });
    }
} as ISlashCommand;