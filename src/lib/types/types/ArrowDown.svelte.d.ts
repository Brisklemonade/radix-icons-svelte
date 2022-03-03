/** @typedef {typeof __propDef.props}  ArrowDownProps */
/** @typedef {typeof __propDef.events}  ArrowDownEvents */
/** @typedef {typeof __propDef.slots}  ArrowDownSlots */
export default class ArrowDown extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ArrowDownProps = typeof __propDef.props;
export type ArrowDownEvents = typeof __propDef.events;
export type ArrowDownSlots = typeof __propDef.slots;
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
