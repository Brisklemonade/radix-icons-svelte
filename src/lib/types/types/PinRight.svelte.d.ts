/** @typedef {typeof __propDef.props}  PinRightProps */
/** @typedef {typeof __propDef.events}  PinRightEvents */
/** @typedef {typeof __propDef.slots}  PinRightSlots */
export default class PinRight extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PinRightProps = typeof __propDef.props;
export type PinRightEvents = typeof __propDef.events;
export type PinRightSlots = typeof __propDef.slots;
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
