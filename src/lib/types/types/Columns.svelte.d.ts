/** @typedef {typeof __propDef.props}  ColumnsProps */
/** @typedef {typeof __propDef.events}  ColumnsEvents */
/** @typedef {typeof __propDef.slots}  ColumnsSlots */
export default class Columns extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ColumnsProps = typeof __propDef.props;
export type ColumnsEvents = typeof __propDef.events;
export type ColumnsSlots = typeof __propDef.slots;
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
