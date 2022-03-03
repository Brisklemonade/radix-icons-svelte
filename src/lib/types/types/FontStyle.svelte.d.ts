/** @typedef {typeof __propDef.props}  FontStyleProps */
/** @typedef {typeof __propDef.events}  FontStyleEvents */
/** @typedef {typeof __propDef.slots}  FontStyleSlots */
export default class FontStyle extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FontStyleProps = typeof __propDef.props;
export type FontStyleEvents = typeof __propDef.events;
export type FontStyleSlots = typeof __propDef.slots;
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
