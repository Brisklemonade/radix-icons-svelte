/** @typedef {typeof __propDef.props}  StretchVerticallyProps */
/** @typedef {typeof __propDef.events}  StretchVerticallyEvents */
/** @typedef {typeof __propDef.slots}  StretchVerticallySlots */
export default class StretchVertically extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type StretchVerticallyProps = typeof __propDef.props;
export type StretchVerticallyEvents = typeof __propDef.events;
export type StretchVerticallySlots = typeof __propDef.slots;
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
