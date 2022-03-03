/** @typedef {typeof __propDef.props}  FileTextProps */
/** @typedef {typeof __propDef.events}  FileTextEvents */
/** @typedef {typeof __propDef.slots}  FileTextSlots */
export default class FileText extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FileTextProps = typeof __propDef.props;
export type FileTextEvents = typeof __propDef.events;
export type FileTextSlots = typeof __propDef.slots;
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
