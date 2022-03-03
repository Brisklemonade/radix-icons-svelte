/** @typedef {typeof __propDef.props}  CursorTextProps */
/** @typedef {typeof __propDef.events}  CursorTextEvents */
/** @typedef {typeof __propDef.slots}  CursorTextSlots */
export default class CursorText extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CursorTextProps = typeof __propDef.props;
export type CursorTextEvents = typeof __propDef.events;
export type CursorTextSlots = typeof __propDef.slots;
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
