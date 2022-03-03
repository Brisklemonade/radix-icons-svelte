/** @typedef {typeof __propDef.props}  CounterClockwiseClockProps */
/** @typedef {typeof __propDef.events}  CounterClockwiseClockEvents */
/** @typedef {typeof __propDef.slots}  CounterClockwiseClockSlots */
export default class CounterClockwiseClock extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CounterClockwiseClockProps = typeof __propDef.props;
export type CounterClockwiseClockEvents = typeof __propDef.events;
export type CounterClockwiseClockSlots = typeof __propDef.slots;
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
