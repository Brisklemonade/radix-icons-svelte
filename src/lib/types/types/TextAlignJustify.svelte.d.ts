/** @typedef {typeof __propDef.props}  TextAlignJustifyProps */
/** @typedef {typeof __propDef.events}  TextAlignJustifyEvents */
/** @typedef {typeof __propDef.slots}  TextAlignJustifySlots */
export default class TextAlignJustify extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TextAlignJustifyProps = typeof __propDef.props;
export type TextAlignJustifyEvents = typeof __propDef.events;
export type TextAlignJustifySlots = typeof __propDef.slots;
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
