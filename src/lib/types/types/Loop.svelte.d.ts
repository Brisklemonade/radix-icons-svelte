/** @typedef {typeof __propDef.props}  LoopProps */
/** @typedef {typeof __propDef.events}  LoopEvents */
/** @typedef {typeof __propDef.slots}  LoopSlots */
export default class Loop extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LoopProps = typeof __propDef.props;
export type LoopEvents = typeof __propDef.events;
export type LoopSlots = typeof __propDef.slots;
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
