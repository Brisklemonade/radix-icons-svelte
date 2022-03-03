/** @typedef {typeof __propDef.props}  EraserProps */
/** @typedef {typeof __propDef.events}  EraserEvents */
/** @typedef {typeof __propDef.slots}  EraserSlots */
export default class Eraser extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EraserProps = typeof __propDef.props;
export type EraserEvents = typeof __propDef.events;
export type EraserSlots = typeof __propDef.slots;
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
