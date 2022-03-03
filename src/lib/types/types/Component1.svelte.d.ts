/** @typedef {typeof __propDef.props}  Component1Props */
/** @typedef {typeof __propDef.events}  Component1Events */
/** @typedef {typeof __propDef.slots}  Component1Slots */
export default class Component1 extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type Component1Props = typeof __propDef.props;
export type Component1Events = typeof __propDef.events;
export type Component1Slots = typeof __propDef.slots;
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
