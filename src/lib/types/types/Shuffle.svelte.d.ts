/** @typedef {typeof __propDef.props}  ShuffleProps */
/** @typedef {typeof __propDef.events}  ShuffleEvents */
/** @typedef {typeof __propDef.slots}  ShuffleSlots */
export default class Shuffle extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ShuffleProps = typeof __propDef.props;
export type ShuffleEvents = typeof __propDef.events;
export type ShuffleSlots = typeof __propDef.slots;
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
