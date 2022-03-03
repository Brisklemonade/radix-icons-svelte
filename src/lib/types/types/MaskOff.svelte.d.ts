/** @typedef {typeof __propDef.props}  MaskOffProps */
/** @typedef {typeof __propDef.events}  MaskOffEvents */
/** @typedef {typeof __propDef.slots}  MaskOffSlots */
export default class MaskOff extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MaskOffProps = typeof __propDef.props;
export type MaskOffEvents = typeof __propDef.events;
export type MaskOffSlots = typeof __propDef.slots;
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
