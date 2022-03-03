/** @typedef {typeof __propDef.props}  TextNoneProps */
/** @typedef {typeof __propDef.events}  TextNoneEvents */
/** @typedef {typeof __propDef.slots}  TextNoneSlots */
export default class TextNone extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TextNoneProps = typeof __propDef.props;
export type TextNoneEvents = typeof __propDef.events;
export type TextNoneSlots = typeof __propDef.slots;
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
