/** @typedef {typeof __propDef.props}  FilePlusProps */
/** @typedef {typeof __propDef.events}  FilePlusEvents */
/** @typedef {typeof __propDef.slots}  FilePlusSlots */
export default class FilePlus extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FilePlusProps = typeof __propDef.props;
export type FilePlusEvents = typeof __propDef.events;
export type FilePlusSlots = typeof __propDef.slots;
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
