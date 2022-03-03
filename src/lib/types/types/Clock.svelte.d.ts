/** @typedef {typeof __propDef.props}  ClockProps */
/** @typedef {typeof __propDef.events}  ClockEvents */
/** @typedef {typeof __propDef.slots}  ClockSlots */
export default class Clock extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ClockProps = typeof __propDef.props;
export type ClockEvents = typeof __propDef.events;
export type ClockSlots = typeof __propDef.slots;
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
