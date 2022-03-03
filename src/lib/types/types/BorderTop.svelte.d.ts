/** @typedef {typeof __propDef.props}  BorderTopProps */
/** @typedef {typeof __propDef.events}  BorderTopEvents */
/** @typedef {typeof __propDef.slots}  BorderTopSlots */
export default class BorderTop extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BorderTopProps = typeof __propDef.props;
export type BorderTopEvents = typeof __propDef.events;
export type BorderTopSlots = typeof __propDef.slots;
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
