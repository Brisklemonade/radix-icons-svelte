/** @typedef {typeof __propDef.props}  CountdownTimerProps */
/** @typedef {typeof __propDef.events}  CountdownTimerEvents */
/** @typedef {typeof __propDef.slots}  CountdownTimerSlots */
export default class CountdownTimer extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CountdownTimerProps = typeof __propDef.props;
export type CountdownTimerEvents = typeof __propDef.events;
export type CountdownTimerSlots = typeof __propDef.slots;
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
