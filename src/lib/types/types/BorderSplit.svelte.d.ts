/** @typedef {typeof __propDef.props}  BorderSplitProps */
/** @typedef {typeof __propDef.events}  BorderSplitEvents */
/** @typedef {typeof __propDef.slots}  BorderSplitSlots */
export default class BorderSplit extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BorderSplitProps = typeof __propDef.props;
export type BorderSplitEvents = typeof __propDef.events;
export type BorderSplitSlots = typeof __propDef.slots;
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
