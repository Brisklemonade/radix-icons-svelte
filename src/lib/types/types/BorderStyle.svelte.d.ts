/** @typedef {typeof __propDef.props}  BorderStyleProps */
/** @typedef {typeof __propDef.events}  BorderStyleEvents */
/** @typedef {typeof __propDef.slots}  BorderStyleSlots */
export default class BorderStyle extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BorderStyleProps = typeof __propDef.props;
export type BorderStyleEvents = typeof __propDef.events;
export type BorderStyleSlots = typeof __propDef.slots;
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
