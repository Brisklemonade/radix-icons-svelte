/** @typedef {typeof __propDef.props}  DoubleArrowUpProps */
/** @typedef {typeof __propDef.events}  DoubleArrowUpEvents */
/** @typedef {typeof __propDef.slots}  DoubleArrowUpSlots */
export default class DoubleArrowUp extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DoubleArrowUpProps = typeof __propDef.props;
export type DoubleArrowUpEvents = typeof __propDef.events;
export type DoubleArrowUpSlots = typeof __propDef.slots;
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
