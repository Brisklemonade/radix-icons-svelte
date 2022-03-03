/** @typedef {typeof __propDef.props}  TextAlignMiddleProps */
/** @typedef {typeof __propDef.events}  TextAlignMiddleEvents */
/** @typedef {typeof __propDef.slots}  TextAlignMiddleSlots */
export default class TextAlignMiddle extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TextAlignMiddleProps = typeof __propDef.props;
export type TextAlignMiddleEvents = typeof __propDef.events;
export type TextAlignMiddleSlots = typeof __propDef.slots;
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
