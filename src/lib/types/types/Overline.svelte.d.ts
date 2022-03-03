/** @typedef {typeof __propDef.props}  OverlineProps */
/** @typedef {typeof __propDef.events}  OverlineEvents */
/** @typedef {typeof __propDef.slots}  OverlineSlots */
export default class Overline extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type OverlineProps = typeof __propDef.props;
export type OverlineEvents = typeof __propDef.events;
export type OverlineSlots = typeof __propDef.slots;
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
