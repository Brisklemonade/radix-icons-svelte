/** @typedef {typeof __propDef.props}  WidthProps */
/** @typedef {typeof __propDef.events}  WidthEvents */
/** @typedef {typeof __propDef.slots}  WidthSlots */
export default class Width extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type WidthProps = typeof __propDef.props;
export type WidthEvents = typeof __propDef.events;
export type WidthSlots = typeof __propDef.slots;
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
