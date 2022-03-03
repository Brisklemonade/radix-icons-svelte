/** @typedef {typeof __propDef.props}  StretchHorizontallyProps */
/** @typedef {typeof __propDef.events}  StretchHorizontallyEvents */
/** @typedef {typeof __propDef.slots}  StretchHorizontallySlots */
export default class StretchHorizontally extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type StretchHorizontallyProps = typeof __propDef.props;
export type StretchHorizontallyEvents = typeof __propDef.events;
export type StretchHorizontallySlots = typeof __propDef.slots;
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
