/** @typedef {typeof __propDef.props}  TransformProps */
/** @typedef {typeof __propDef.events}  TransformEvents */
/** @typedef {typeof __propDef.slots}  TransformSlots */
export default class Transform extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TransformProps = typeof __propDef.props;
export type TransformEvents = typeof __propDef.events;
export type TransformSlots = typeof __propDef.slots;
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
