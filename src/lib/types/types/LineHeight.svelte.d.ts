/** @typedef {typeof __propDef.props}  LineHeightProps */
/** @typedef {typeof __propDef.events}  LineHeightEvents */
/** @typedef {typeof __propDef.slots}  LineHeightSlots */
export default class LineHeight extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LineHeightProps = typeof __propDef.props;
export type LineHeightEvents = typeof __propDef.events;
export type LineHeightSlots = typeof __propDef.slots;
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
