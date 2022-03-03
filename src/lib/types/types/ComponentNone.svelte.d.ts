/** @typedef {typeof __propDef.props}  ComponentNoneProps */
/** @typedef {typeof __propDef.events}  ComponentNoneEvents */
/** @typedef {typeof __propDef.slots}  ComponentNoneSlots */
export default class ComponentNone extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ComponentNoneProps = typeof __propDef.props;
export type ComponentNoneEvents = typeof __propDef.events;
export type ComponentNoneSlots = typeof __propDef.slots;
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
