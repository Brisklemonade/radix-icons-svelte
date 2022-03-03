/** @typedef {typeof __propDef.props}  HeartProps */
/** @typedef {typeof __propDef.events}  HeartEvents */
/** @typedef {typeof __propDef.slots}  HeartSlots */
export default class Heart extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type HeartProps = typeof __propDef.props;
export type HeartEvents = typeof __propDef.events;
export type HeartSlots = typeof __propDef.slots;
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
