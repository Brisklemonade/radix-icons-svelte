/** @typedef {typeof __propDef.props}  FontRomanProps */
/** @typedef {typeof __propDef.events}  FontRomanEvents */
/** @typedef {typeof __propDef.slots}  FontRomanSlots */
export default class FontRoman extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FontRomanProps = typeof __propDef.props;
export type FontRomanEvents = typeof __propDef.events;
export type FontRomanSlots = typeof __propDef.slots;
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
