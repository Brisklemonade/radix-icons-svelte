/** @typedef {typeof __propDef.props}  MoveProps */
/** @typedef {typeof __propDef.events}  MoveEvents */
/** @typedef {typeof __propDef.slots}  MoveSlots */
export default class Move extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MoveProps = typeof __propDef.props;
export type MoveEvents = typeof __propDef.events;
export type MoveSlots = typeof __propDef.slots;
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
