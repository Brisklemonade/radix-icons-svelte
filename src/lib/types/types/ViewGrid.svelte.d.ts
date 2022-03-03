/** @typedef {typeof __propDef.props}  ViewGridProps */
/** @typedef {typeof __propDef.events}  ViewGridEvents */
/** @typedef {typeof __propDef.slots}  ViewGridSlots */
export default class ViewGrid extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ViewGridProps = typeof __propDef.props;
export type ViewGridEvents = typeof __propDef.events;
export type ViewGridSlots = typeof __propDef.slots;
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
