/** @typedef {typeof __propDef.props}  BorderAllProps */
/** @typedef {typeof __propDef.events}  BorderAllEvents */
/** @typedef {typeof __propDef.slots}  BorderAllSlots */
export default class BorderAll extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BorderAllProps = typeof __propDef.props;
export type BorderAllEvents = typeof __propDef.events;
export type BorderAllSlots = typeof __propDef.slots;
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
