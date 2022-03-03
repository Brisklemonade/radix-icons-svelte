/** @typedef {typeof __propDef.props}  FontFamilyProps */
/** @typedef {typeof __propDef.events}  FontFamilyEvents */
/** @typedef {typeof __propDef.slots}  FontFamilySlots */
export default class FontFamily extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FontFamilyProps = typeof __propDef.props;
export type FontFamilyEvents = typeof __propDef.events;
export type FontFamilySlots = typeof __propDef.slots;
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
