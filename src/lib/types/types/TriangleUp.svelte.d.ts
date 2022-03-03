/** @typedef {typeof __propDef.props}  TriangleUpProps */
/** @typedef {typeof __propDef.events}  TriangleUpEvents */
/** @typedef {typeof __propDef.slots}  TriangleUpSlots */
export default class TriangleUp extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TriangleUpProps = typeof __propDef.props;
export type TriangleUpEvents = typeof __propDef.events;
export type TriangleUpSlots = typeof __propDef.slots;
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
