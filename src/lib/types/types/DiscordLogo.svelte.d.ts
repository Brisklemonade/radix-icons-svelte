/** @typedef {typeof __propDef.props}  DiscordLogoProps */
/** @typedef {typeof __propDef.events}  DiscordLogoEvents */
/** @typedef {typeof __propDef.slots}  DiscordLogoSlots */
export default class DiscordLogo extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DiscordLogoProps = typeof __propDef.props;
export type DiscordLogoEvents = typeof __propDef.events;
export type DiscordLogoSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: string;
        size?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
