/** @typedef {typeof __propDef.props}  CaretSortProps */
/** @typedef {typeof __propDef.events}  CaretSortEvents */
/** @typedef {typeof __propDef.slots}  CaretSortSlots */
export default class CaretSort extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CaretSortProps = typeof __propDef.props;
export type CaretSortEvents = typeof __propDef.events;
export type CaretSortSlots = typeof __propDef.slots;
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
