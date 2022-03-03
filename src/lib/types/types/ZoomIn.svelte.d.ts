/** @typedef {typeof __propDef.props}  ZoomInProps */
/** @typedef {typeof __propDef.events}  ZoomInEvents */
/** @typedef {typeof __propDef.slots}  ZoomInSlots */
export default class ZoomIn extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ZoomInProps = typeof __propDef.props;
export type ZoomInEvents = typeof __propDef.events;
export type ZoomInSlots = typeof __propDef.slots;
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
