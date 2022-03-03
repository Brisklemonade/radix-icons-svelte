/** @typedef {typeof __propDef.props}  StopProps */
/** @typedef {typeof __propDef.events}  StopEvents */
/** @typedef {typeof __propDef.slots}  StopSlots */
export default class Stop extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type StopProps = typeof __propDef.props;
export type StopEvents = typeof __propDef.events;
export type StopSlots = typeof __propDef.slots;
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
