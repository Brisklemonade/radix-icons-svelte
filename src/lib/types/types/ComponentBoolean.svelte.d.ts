/** @typedef {typeof __propDef.props}  ComponentBooleanProps */
/** @typedef {typeof __propDef.events}  ComponentBooleanEvents */
/** @typedef {typeof __propDef.slots}  ComponentBooleanSlots */
export default class ComponentBoolean extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ComponentBooleanProps = typeof __propDef.props;
export type ComponentBooleanEvents = typeof __propDef.events;
export type ComponentBooleanSlots = typeof __propDef.slots;
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
