/** @typedef {typeof __propDef.props}  TrashProps */
/** @typedef {typeof __propDef.events}  TrashEvents */
/** @typedef {typeof __propDef.slots}  TrashSlots */
export default class Trash extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TrashProps = typeof __propDef.props;
export type TrashEvents = typeof __propDef.events;
export type TrashSlots = typeof __propDef.slots;
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
