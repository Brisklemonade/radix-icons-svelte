/** @typedef {typeof __propDef.props}  TextAlignTopProps */
/** @typedef {typeof __propDef.events}  TextAlignTopEvents */
/** @typedef {typeof __propDef.slots}  TextAlignTopSlots */
export default class TextAlignTop extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TextAlignTopProps = typeof __propDef.props;
export type TextAlignTopEvents = typeof __propDef.events;
export type TextAlignTopSlots = typeof __propDef.slots;
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
