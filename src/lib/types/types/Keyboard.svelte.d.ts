/** @typedef {typeof __propDef.props}  KeyboardProps */
/** @typedef {typeof __propDef.events}  KeyboardEvents */
/** @typedef {typeof __propDef.slots}  KeyboardSlots */
export default class Keyboard extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type KeyboardProps = typeof __propDef.props;
export type KeyboardEvents = typeof __propDef.events;
export type KeyboardSlots = typeof __propDef.slots;
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
