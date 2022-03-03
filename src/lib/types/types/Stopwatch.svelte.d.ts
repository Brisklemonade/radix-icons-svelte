/** @typedef {typeof __propDef.props}  StopwatchProps */
/** @typedef {typeof __propDef.events}  StopwatchEvents */
/** @typedef {typeof __propDef.slots}  StopwatchSlots */
export default class Stopwatch extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type StopwatchProps = typeof __propDef.props;
export type StopwatchEvents = typeof __propDef.events;
export type StopwatchSlots = typeof __propDef.slots;
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
