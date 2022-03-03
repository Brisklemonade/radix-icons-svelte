/** @typedef {typeof __propDef.props}  ZoomOutProps */
/** @typedef {typeof __propDef.events}  ZoomOutEvents */
/** @typedef {typeof __propDef.slots}  ZoomOutSlots */
export default class ZoomOut extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ZoomOutProps = typeof __propDef.props;
export type ZoomOutEvents = typeof __propDef.events;
export type ZoomOutSlots = typeof __propDef.slots;
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
