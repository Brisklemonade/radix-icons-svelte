/** @typedef {typeof __propDef.props}  CursorArrowProps */
/** @typedef {typeof __propDef.events}  CursorArrowEvents */
/** @typedef {typeof __propDef.slots}  CursorArrowSlots */
export default class CursorArrow extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CursorArrowProps = typeof __propDef.props;
export type CursorArrowEvents = typeof __propDef.events;
export type CursorArrowSlots = typeof __propDef.slots;
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
