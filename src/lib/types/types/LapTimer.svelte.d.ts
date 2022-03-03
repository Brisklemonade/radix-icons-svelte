/** @typedef {typeof __propDef.props}  LapTimerProps */
/** @typedef {typeof __propDef.events}  LapTimerEvents */
/** @typedef {typeof __propDef.slots}  LapTimerSlots */
export default class LapTimer extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LapTimerProps = typeof __propDef.props;
export type LapTimerEvents = typeof __propDef.events;
export type LapTimerSlots = typeof __propDef.slots;
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
