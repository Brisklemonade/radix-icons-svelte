/** @typedef {typeof __propDef.props}  ComponentInstanceProps */
/** @typedef {typeof __propDef.events}  ComponentInstanceEvents */
/** @typedef {typeof __propDef.slots}  ComponentInstanceSlots */
export default class ComponentInstance extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ComponentInstanceProps = typeof __propDef.props;
export type ComponentInstanceEvents = typeof __propDef.events;
export type ComponentInstanceSlots = typeof __propDef.slots;
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
