/** @typedef {typeof __propDef.props}  ClipboardCopyProps */
/** @typedef {typeof __propDef.events}  ClipboardCopyEvents */
/** @typedef {typeof __propDef.slots}  ClipboardCopySlots */
export default class ClipboardCopy extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ClipboardCopyProps = typeof __propDef.props;
export type ClipboardCopyEvents = typeof __propDef.events;
export type ClipboardCopySlots = typeof __propDef.slots;
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
