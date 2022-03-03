/** @typedef {typeof __propDef.props}  EyeClosedProps */
/** @typedef {typeof __propDef.events}  EyeClosedEvents */
/** @typedef {typeof __propDef.slots}  EyeClosedSlots */
export default class EyeClosed extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EyeClosedProps = typeof __propDef.props;
export type EyeClosedEvents = typeof __propDef.events;
export type EyeClosedSlots = typeof __propDef.slots;
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
