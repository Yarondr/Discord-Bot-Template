import { ActionRowBuilder, ButtonBuilder } from '@discordjs/builders';
import { ButtonStyle, CommandInteraction } from 'discord.js';
import { IBot, ISlashCommand } from '../../utils/interfaces';

module.exports = {
    name: 'configbuttons',
    description: 'Sends a button that opens a modal to configure the user settings',
    devOnly: false,
    executerPermissions: ['SendMessages', 'Administrator'],
    botPermissions: ['SendMessages'],

    execute: async (bot: IBot, interaction: CommandInteraction) => {
        if (!interaction.isChatInputCommand()) return;
        const { channel } = interaction;

        const buttons = new ActionRowBuilder<ButtonBuilder>().setComponents(
            new ButtonBuilder().setCustomId('configUserNicknameButton').setLabel('Set Nickname').setStyle(ButtonStyle.Primary)
        )

        await channel!.send({ content: "Click the button below to set your server nickname:", components: [buttons] }).catch(async () => {
            return await interaction.editReply({ content: 'I don\'t have permissions to send messages in that channel!' });
        });
        return await interaction.editReply({ content: 'Button added to the channel!' });
    }
} as ISlashCommand;