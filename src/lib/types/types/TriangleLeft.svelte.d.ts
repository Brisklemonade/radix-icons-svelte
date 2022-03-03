/** @typedef {typeof __propDef.props}  TriangleLeftProps */
/** @typedef {typeof __propDef.events}  TriangleLeftEvents */
/** @typedef {typeof __propDef.slots}  TriangleLeftSlots */
export default class TriangleLeft extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TriangleLeftProps = typeof __propDef.props;
export type TriangleLeftEvents = typeof __propDef.events;
export type TriangleLeftSlots = typeof __propDef.slots;
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
