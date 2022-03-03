/** @typedef {typeof __propDef.props}  CardStackMinusProps */
/** @typedef {typeof __propDef.events}  CardStackMinusEvents */
/** @typedef {typeof __propDef.slots}  CardStackMinusSlots */
export default class CardStackMinus extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CardStackMinusProps = typeof __propDef.props;
export type CardStackMinusEvents = typeof __propDef.events;
export type CardStackMinusSlots = typeof __propDef.slots;
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
