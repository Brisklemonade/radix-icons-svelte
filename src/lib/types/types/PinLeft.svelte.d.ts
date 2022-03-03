/** @typedef {typeof __propDef.props}  PinLeftProps */
/** @typedef {typeof __propDef.events}  PinLeftEvents */
/** @typedef {typeof __propDef.slots}  PinLeftSlots */
export default class PinLeft extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PinLeftProps = typeof __propDef.props;
export type PinLeftEvents = typeof __propDef.events;
export type PinLeftSlots = typeof __propDef.slots;
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
