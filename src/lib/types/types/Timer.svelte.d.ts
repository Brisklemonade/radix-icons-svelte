/** @typedef {typeof __propDef.props}  TimerProps */
/** @typedef {typeof __propDef.events}  TimerEvents */
/** @typedef {typeof __propDef.slots}  TimerSlots */
export default class Timer extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TimerProps = typeof __propDef.props;
export type TimerEvents = typeof __propDef.events;
export type TimerSlots = typeof __propDef.slots;
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
