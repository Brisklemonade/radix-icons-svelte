/** @typedef {typeof __propDef.props}  PilcrowProps */
/** @typedef {typeof __propDef.events}  PilcrowEvents */
/** @typedef {typeof __propDef.slots}  PilcrowSlots */
export default class Pilcrow extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PilcrowProps = typeof __propDef.props;
export type PilcrowEvents = typeof __propDef.events;
export type PilcrowSlots = typeof __propDef.slots;
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
