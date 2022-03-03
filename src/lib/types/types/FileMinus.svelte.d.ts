/** @typedef {typeof __propDef.props}  FileMinusProps */
/** @typedef {typeof __propDef.events}  FileMinusEvents */
/** @typedef {typeof __propDef.slots}  FileMinusSlots */
export default class FileMinus extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FileMinusProps = typeof __propDef.props;
export type FileMinusEvents = typeof __propDef.events;
export type FileMinusSlots = typeof __propDef.slots;
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
