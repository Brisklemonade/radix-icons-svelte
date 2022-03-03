/** @typedef {typeof __propDef.props}  ArrowTopLeftProps */
/** @typedef {typeof __propDef.events}  ArrowTopLeftEvents */
/** @typedef {typeof __propDef.slots}  ArrowTopLeftSlots */
export default class ArrowTopLeft extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ArrowTopLeftProps = typeof __propDef.props;
export type ArrowTopLeftEvents = typeof __propDef.events;
export type ArrowTopLeftSlots = typeof __propDef.slots;
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
