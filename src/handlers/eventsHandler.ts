import path from "path";
import { getFiles } from "../utils/filesReader";
import { IBot, IEvent } from "../utils/interfaces";

export function loadEvents(bot: IBot, reload: boolean) {
    const { client } = bot;

    const eventsPath = path.join(__dirname, "../events");
    let eventsFiles = getFiles(eventsPath, '.ts');
    if (eventsFiles.length === 0) {
        console.log('No events found');
    }

    eventsFiles.forEach((fileName, index) => {
        const filePath = `../events/${fileName}`

        if (reload) delete require.cache[require.resolve(filePath)];
        const event: IEvent = require(filePath)

        if (event.once) {
            client.once(event.name, (...args) => event.execute(bot, ...args));
        } else {
            client.on(event.name, (...args) => event.execute(bot, ...args));
        }
    })

    console.log(`Loaded ${eventsFiles.length} events`)
}