/** @typedef {typeof __propDef.props}  TriangleDownProps */
/** @typedef {typeof __propDef.events}  TriangleDownEvents */
/** @typedef {typeof __propDef.slots}  TriangleDownSlots */
export default class TriangleDown extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TriangleDownProps = typeof __propDef.props;
export type TriangleDownEvents = typeof __propDef.events;
export type TriangleDownSlots = typeof __propDef.slots;
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
