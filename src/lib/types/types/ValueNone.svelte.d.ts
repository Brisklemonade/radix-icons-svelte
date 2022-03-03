/** @typedef {typeof __propDef.props}  ValueNoneProps */
/** @typedef {typeof __propDef.events}  ValueNoneEvents */
/** @typedef {typeof __propDef.slots}  ValueNoneSlots */
export default class ValueNone extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ValueNoneProps = typeof __propDef.props;
export type ValueNoneEvents = typeof __propDef.events;
export type ValueNoneSlots = typeof __propDef.slots;
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
