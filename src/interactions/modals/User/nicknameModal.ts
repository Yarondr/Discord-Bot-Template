import { GuildMember, ModalSubmitInteraction } from "discord.js";
import { IBot, IModal } from "../../../utils/interfaces";

module.exports = {
    id: 'nicknameModal',
    deferReply: true,
    ephemeral: true,

    execute: async (bot: IBot, interaction: ModalSubmitInteraction) => {
        const member: GuildMember = interaction.member as GuildMember

        const nickname = interaction.fields.getTextInputValue('nicknameInput');
        try {
            await member.setNickname(nickname);
        } catch (e) {
            return await interaction.editReply({ content: 'An error occurred while trying to set the nickname. It is possible you have higher permissions than me.' })
        }
        await interaction.editReply({ content: 'Nickname set!' })
    }
} as IModal