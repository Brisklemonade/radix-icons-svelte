/** @typedef {typeof __propDef.props}  FileProps */
/** @typedef {typeof __propDef.events}  FileEvents */
/** @typedef {typeof __propDef.slots}  FileSlots */
export default class File extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FileProps = typeof __propDef.props;
export type FileEvents = typeof __propDef.events;
export type FileSlots = typeof __propDef.slots;
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
