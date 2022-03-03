/** @typedef {typeof __propDef.props}  CornersProps */
/** @typedef {typeof __propDef.events}  CornersEvents */
/** @typedef {typeof __propDef.slots}  CornersSlots */
export default class Corners extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CornersProps = typeof __propDef.props;
export type CornersEvents = typeof __propDef.events;
export type CornersSlots = typeof __propDef.slots;
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
