/** @typedef {typeof __propDef.props}  SlashProps */
/** @typedef {typeof __propDef.events}  SlashEvents */
/** @typedef {typeof __propDef.slots}  SlashSlots */
export default class Slash extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SlashProps = typeof __propDef.props;
export type SlashEvents = typeof __propDef.events;
export type SlashSlots = typeof __propDef.slots;
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
