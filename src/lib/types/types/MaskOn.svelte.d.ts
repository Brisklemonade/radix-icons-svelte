/** @typedef {typeof __propDef.props}  MaskOnProps */
/** @typedef {typeof __propDef.events}  MaskOnEvents */
/** @typedef {typeof __propDef.slots}  MaskOnSlots */
export default class MaskOn extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MaskOnProps = typeof __propDef.props;
export type MaskOnEvents = typeof __propDef.events;
export type MaskOnSlots = typeof __propDef.slots;
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
