import * as fs from "fs";
import path from "path";
import { getFiles } from "../utils/filesReader";
import { IBot, IButton } from "../utils/interfaces";

export function loadButtons(bot: IBot, reload: boolean) {
    const { buttons } = bot;

    const buttonsPath = path.join(__dirname, "../buttons");
    fs.readdirSync(buttonsPath).forEach((category: string) => {
        const buttonPath = path.join(buttonsPath, category);
        let buttonsFiles = getFiles(buttonPath, ".ts");

        buttonsFiles.forEach((f) => {
            if (reload)
                delete require.cache[require.resolve(`../buttons/${category}/${f}`)]
            const button: IButton = require(`../buttons/${category}/${f}`)

            if (!button.category) button.category = category;

            buttons.set(button.id, button)
        })
    })
    console.log(`Loaded ${buttons.size} buttons`)
}