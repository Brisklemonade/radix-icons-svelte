/** @typedef {typeof __propDef.props}  AccessibilityProps */
/** @typedef {typeof __propDef.events}  AccessibilityEvents */
/** @typedef {typeof __propDef.slots}  AccessibilitySlots */
export default class Accessibility extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AccessibilityProps = typeof __propDef.props;
export type AccessibilityEvents = typeof __propDef.events;
export type AccessibilitySlots = typeof __propDef.slots;
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
