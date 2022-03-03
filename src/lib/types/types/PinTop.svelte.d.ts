/** @typedef {typeof __propDef.props}  PinTopProps */
/** @typedef {typeof __propDef.events}  PinTopEvents */
/** @typedef {typeof __propDef.slots}  PinTopSlots */
export default class PinTop extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PinTopProps = typeof __propDef.props;
export type PinTopEvents = typeof __propDef.events;
export type PinTopSlots = typeof __propDef.slots;
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
