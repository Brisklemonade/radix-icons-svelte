/** @typedef {typeof __propDef.props}  TextAlignCenterProps */
/** @typedef {typeof __propDef.events}  TextAlignCenterEvents */
/** @typedef {typeof __propDef.slots}  TextAlignCenterSlots */
export default class TextAlignCenter extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TextAlignCenterProps = typeof __propDef.props;
export type TextAlignCenterEvents = typeof __propDef.events;
export type TextAlignCenterSlots = typeof __propDef.slots;
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
