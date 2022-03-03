/** @typedef {typeof __propDef.props}  UnderlineProps */
/** @typedef {typeof __propDef.events}  UnderlineEvents */
/** @typedef {typeof __propDef.slots}  UnderlineSlots */
export default class Underline extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type UnderlineProps = typeof __propDef.props;
export type UnderlineEvents = typeof __propDef.events;
export type UnderlineSlots = typeof __propDef.slots;
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
