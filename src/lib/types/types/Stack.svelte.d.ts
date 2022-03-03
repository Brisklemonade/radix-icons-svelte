/** @typedef {typeof __propDef.props}  StackProps */
/** @typedef {typeof __propDef.events}  StackEvents */
/** @typedef {typeof __propDef.slots}  StackSlots */
export default class Stack extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type StackProps = typeof __propDef.props;
export type StackEvents = typeof __propDef.events;
export type StackSlots = typeof __propDef.slots;
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
