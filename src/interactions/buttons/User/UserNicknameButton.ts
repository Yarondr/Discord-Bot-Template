import { ActionRowBuilder, ModalActionRowComponentBuilder, ModalBuilder, TextInputBuilder } from "@discordjs/builders";
import { ButtonInteraction, TextInputStyle } from "discord.js";
import { IBot, IButton } from "../../../utils/interfaces";

module.exports = {
    id: 'configUserNicknameButton',
    deferReply: false,

    execute: async (bot: IBot, interaction: ButtonInteraction) => {
        const modal = new ModalBuilder()
            .setCustomId('nicknameModal')
            .setTitle('User Settings')

        const nicknameInput = new TextInputBuilder()
            .setCustomId('nicknameInput')
            .setLabel('Nickname')
            .setRequired(true)
            .setStyle(TextInputStyle.Short)

        const firstRow = new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(nicknameInput)

        modal.addComponents(firstRow)

        await interaction.showModal(modal)
    }
} as IButton