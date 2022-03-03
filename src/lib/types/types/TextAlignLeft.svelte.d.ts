/** @typedef {typeof __propDef.props}  TextAlignLeftProps */
/** @typedef {typeof __propDef.events}  TextAlignLeftEvents */
/** @typedef {typeof __propDef.slots}  TextAlignLeftSlots */
export default class TextAlignLeft extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TextAlignLeftProps = typeof __propDef.props;
export type TextAlignLeftEvents = typeof __propDef.events;
export type TextAlignLeftSlots = typeof __propDef.slots;
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
