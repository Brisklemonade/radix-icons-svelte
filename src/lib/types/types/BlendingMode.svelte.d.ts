/** @typedef {typeof __propDef.props}  BlendingModeProps */
/** @typedef {typeof __propDef.events}  BlendingModeEvents */
/** @typedef {typeof __propDef.slots}  BlendingModeSlots */
export default class BlendingMode extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BlendingModeProps = typeof __propDef.props;
export type BlendingModeEvents = typeof __propDef.events;
export type BlendingModeSlots = typeof __propDef.slots;
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
