/** @typedef {typeof __propDef.props}  DoubleArrowRightProps */
/** @typedef {typeof __propDef.events}  DoubleArrowRightEvents */
/** @typedef {typeof __propDef.slots}  DoubleArrowRightSlots */
export default class DoubleArrowRight extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DoubleArrowRightProps = typeof __propDef.props;
export type DoubleArrowRightEvents = typeof __propDef.events;
export type DoubleArrowRightSlots = typeof __propDef.slots;
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
