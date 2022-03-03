/** @typedef {typeof __propDef.props}  ValueProps */
/** @typedef {typeof __propDef.events}  ValueEvents */
/** @typedef {typeof __propDef.slots}  ValueSlots */
export default class Value extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ValueProps = typeof __propDef.props;
export type ValueEvents = typeof __propDef.events;
export type ValueSlots = typeof __propDef.slots;
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
