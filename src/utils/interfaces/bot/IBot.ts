import { Client, Collection } from "discord.js";
import { IEvent } from "./IEvent";
import { ISlashCommand } from "./ISlashCommand";
import { IButton } from "./IButton";
import { IModal } from "./IModal";

export interface IBot {
    client: Client,
    events: Collection<string, IEvent>,
    slashCommands: Collection<string, ISlashCommand>,
    buttons: Collection<string, IButton>,
    modals: Collection<string, IModal>,
    owners: string[],
    testServers: string[],
    prefix: string
}