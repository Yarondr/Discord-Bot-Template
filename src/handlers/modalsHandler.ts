import * as fs from "fs";
import path from "path";
import { getFiles } from "../utils/filesReader";
import { IBot, IModal } from "../utils/interfaces";

export function loadModals(bot: IBot, reload: boolean) {
    const { modals } = bot;

    const modalsPath = path.join(__dirname, "../interactions/modals");
    fs.readdirSync(modalsPath).forEach((category: string) => {
        const modalPath = path.join(modalsPath, category);
        let modalsFiles = getFiles(modalPath, ".ts");

        modalsFiles.forEach((f) => {
            const filePath = `../interactions/modals/${category}/${f}`

            if (reload) delete require.cache[require.resolve(filePath)]
            const modal: IModal = require(filePath)

            if (!modal.category) modal.category = category;

            modals.set(modal.id, modal)
        })
    })
    console.log(`Loaded ${modals.size} modals`)
}