/** @typedef {typeof __propDef.props}  BackpackProps */
/** @typedef {typeof __propDef.events}  BackpackEvents */
/** @typedef {typeof __propDef.slots}  BackpackSlots */
export default class Backpack extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BackpackProps = typeof __propDef.props;
export type BackpackEvents = typeof __propDef.events;
export type BackpackSlots = typeof __propDef.slots;
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
