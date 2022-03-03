/** @typedef {typeof __propDef.props}  Component2Props */
/** @typedef {typeof __propDef.events}  Component2Events */
/** @typedef {typeof __propDef.slots}  Component2Slots */
export default class Component2 extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type Component2Props = typeof __propDef.props;
export type Component2Events = typeof __propDef.events;
export type Component2Slots = typeof __propDef.slots;
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
