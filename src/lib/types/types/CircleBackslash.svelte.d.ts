/** @typedef {typeof __propDef.props}  CircleBackslashProps */
/** @typedef {typeof __propDef.events}  CircleBackslashEvents */
/** @typedef {typeof __propDef.slots}  CircleBackslashSlots */
export default class CircleBackslash extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CircleBackslashProps = typeof __propDef.props;
export type CircleBackslashEvents = typeof __propDef.events;
export type CircleBackslashSlots = typeof __propDef.slots;
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
