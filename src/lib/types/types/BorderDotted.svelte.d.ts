/** @typedef {typeof __propDef.props}  BorderDottedProps */
/** @typedef {typeof __propDef.events}  BorderDottedEvents */
/** @typedef {typeof __propDef.slots}  BorderDottedSlots */
export default class BorderDotted extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BorderDottedProps = typeof __propDef.props;
export type BorderDottedEvents = typeof __propDef.events;
export type BorderDottedSlots = typeof __propDef.slots;
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
