import * as fs from "fs";
import path from "path";
import { getFiles } from "../utils/filesReader";
import { IBot, ISlashCommand } from "../utils/interfaces";

export function loadSlashCommands(bot: IBot, reload: boolean) {
    const { slashCommands } = bot;

    const commandsPath = path.join(__dirname, "../slashCommands");
    fs.readdirSync(commandsPath).forEach((category: string) => {
        const commandPath = path.join(commandsPath, category);
        let slashCommandsFiles = getFiles(commandPath, ".ts");

        slashCommandsFiles.forEach((f) => {
            if (reload)
                delete require.cache[require.resolve(`../slashCommands/${category}/${f}`)]
            const command: ISlashCommand = require(`../slashCommands/${category}/${f}`)

            if (!command.category) command.category = category;

            slashCommands.set(command.name, command)
        })
    })
    console.log(`Loaded ${slashCommands.size} slash commands`)
}