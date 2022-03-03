/** @typedef {typeof __propDef.props}  TargetProps */
/** @typedef {typeof __propDef.events}  TargetEvents */
/** @typedef {typeof __propDef.slots}  TargetSlots */
export default class Target extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TargetProps = typeof __propDef.props;
export type TargetEvents = typeof __propDef.events;
export type TargetSlots = typeof __propDef.slots;
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
