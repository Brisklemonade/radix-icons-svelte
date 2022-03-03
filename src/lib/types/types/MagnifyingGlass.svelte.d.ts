/** @typedef {typeof __propDef.props}  MagnifyingGlassProps */
/** @typedef {typeof __propDef.events}  MagnifyingGlassEvents */
/** @typedef {typeof __propDef.slots}  MagnifyingGlassSlots */
export default class MagnifyingGlass extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MagnifyingGlassProps = typeof __propDef.props;
export type MagnifyingGlassEvents = typeof __propDef.events;
export type MagnifyingGlassSlots = typeof __propDef.slots;
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
