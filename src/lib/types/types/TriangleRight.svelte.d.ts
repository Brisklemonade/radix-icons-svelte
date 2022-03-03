/** @typedef {typeof __propDef.props}  TriangleRightProps */
/** @typedef {typeof __propDef.events}  TriangleRightEvents */
/** @typedef {typeof __propDef.slots}  TriangleRightSlots */
export default class TriangleRight extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TriangleRightProps = typeof __propDef.props;
export type TriangleRightEvents = typeof __propDef.events;
export type TriangleRightSlots = typeof __propDef.slots;
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
