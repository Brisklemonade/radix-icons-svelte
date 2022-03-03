/** @typedef {typeof __propDef.props}  ScissorsProps */
/** @typedef {typeof __propDef.events}  ScissorsEvents */
/** @typedef {typeof __propDef.slots}  ScissorsSlots */
export default class Scissors extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ScissorsProps = typeof __propDef.props;
export type ScissorsEvents = typeof __propDef.events;
export type ScissorsSlots = typeof __propDef.slots;
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
