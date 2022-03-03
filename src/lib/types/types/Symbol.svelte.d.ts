/** @typedef {typeof __propDef.props}  SymbolProps */
/** @typedef {typeof __propDef.events}  SymbolEvents */
/** @typedef {typeof __propDef.slots}  SymbolSlots */
export default class Symbol extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SymbolProps = typeof __propDef.props;
export type SymbolEvents = typeof __propDef.events;
export type SymbolSlots = typeof __propDef.slots;
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
