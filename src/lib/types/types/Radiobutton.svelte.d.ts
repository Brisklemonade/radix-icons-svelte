/** @typedef {typeof __propDef.props}  RadiobuttonProps */
/** @typedef {typeof __propDef.events}  RadiobuttonEvents */
/** @typedef {typeof __propDef.slots}  RadiobuttonSlots */
export default class Radiobutton extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type RadiobuttonProps = typeof __propDef.props;
export type RadiobuttonEvents = typeof __propDef.events;
export type RadiobuttonSlots = typeof __propDef.slots;
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
