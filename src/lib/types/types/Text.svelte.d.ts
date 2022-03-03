/** @typedef {typeof __propDef.props}  TextProps */
/** @typedef {typeof __propDef.events}  TextEvents */
/** @typedef {typeof __propDef.slots}  TextSlots */
export default class Text extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TextProps = typeof __propDef.props;
export type TextEvents = typeof __propDef.events;
export type TextSlots = typeof __propDef.slots;
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
