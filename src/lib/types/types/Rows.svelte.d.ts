/** @typedef {typeof __propDef.props}  RowsProps */
/** @typedef {typeof __propDef.events}  RowsEvents */
/** @typedef {typeof __propDef.slots}  RowsSlots */
export default class Rows extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type RowsProps = typeof __propDef.props;
export type RowsEvents = typeof __propDef.events;
export type RowsSlots = typeof __propDef.slots;
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
