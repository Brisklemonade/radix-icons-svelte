/** @typedef {typeof __propDef.props}  AlignBaselineProps */
/** @typedef {typeof __propDef.events}  AlignBaselineEvents */
/** @typedef {typeof __propDef.slots}  AlignBaselineSlots */
export default class AlignBaseline extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AlignBaselineProps = typeof __propDef.props;
export type AlignBaselineEvents = typeof __propDef.events;
export type AlignBaselineSlots = typeof __propDef.slots;
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
