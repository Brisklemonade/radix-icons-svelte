/** @typedef {typeof __propDef.props}  TransparencyGridProps */
/** @typedef {typeof __propDef.events}  TransparencyGridEvents */
/** @typedef {typeof __propDef.slots}  TransparencyGridSlots */
export default class TransparencyGrid extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TransparencyGridProps = typeof __propDef.props;
export type TransparencyGridEvents = typeof __propDef.events;
export type TransparencyGridSlots = typeof __propDef.slots;
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
