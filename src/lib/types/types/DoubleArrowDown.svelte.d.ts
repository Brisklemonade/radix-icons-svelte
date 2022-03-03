/** @typedef {typeof __propDef.props}  DoubleArrowDownProps */
/** @typedef {typeof __propDef.events}  DoubleArrowDownEvents */
/** @typedef {typeof __propDef.slots}  DoubleArrowDownSlots */
export default class DoubleArrowDown extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DoubleArrowDownProps = typeof __propDef.props;
export type DoubleArrowDownEvents = typeof __propDef.events;
export type DoubleArrowDownSlots = typeof __propDef.slots;
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
