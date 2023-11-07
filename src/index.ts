console.log("Starting bot...")
import { Client, Collection, IntentsBitField } from 'discord.js';
import { loadButtons, loadEvents, loadModals, loadSlashCommands } from './handlers';
import { IBot, IButton, IEvent, IModal, ISlashCommand } from './utils/interfaces';

require('dotenv').config();

const testServers = [process.env.TEST_SERVER_ID || ''];
const owners = [process.env.OWNER_ID || ''];

// TODO: Change the intents to match your bot's needs
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMembers
    ]
});

const events = new Collection<string, IEvent>();
const slashCommands = new Collection<string, ISlashCommand>();
const buttons = new Collection<string, IButton>();
const modals = new Collection<string, IModal>();

const bot: IBot = {
    client,
    events,
    slashCommands,
    buttons,
    modals,
    owners,
    testServers,
    prefix: '!'
};

loadEvents(bot, false);
loadSlashCommands(bot, false);
loadButtons(bot, false);
loadModals(bot, false);


client.login(process.env.TOKEN);