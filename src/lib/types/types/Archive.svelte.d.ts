/** @typedef {typeof __propDef.props}  ArchiveProps */
/** @typedef {typeof __propDef.events}  ArchiveEvents */
/** @typedef {typeof __propDef.slots}  ArchiveSlots */
export default class Archive extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ArchiveProps = typeof __propDef.props;
export type ArchiveEvents = typeof __propDef.events;
export type ArchiveSlots = typeof __propDef.slots;
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
