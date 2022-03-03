/** @typedef {typeof __propDef.props}  CaretRightProps */
/** @typedef {typeof __propDef.events}  CaretRightEvents */
/** @typedef {typeof __propDef.slots}  CaretRightSlots */
export default class CaretRight extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CaretRightProps = typeof __propDef.props;
export type CaretRightEvents = typeof __propDef.events;
export type CaretRightSlots = typeof __propDef.slots;
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
