/** @typedef {typeof __propDef.props}  LockClosedProps */
/** @typedef {typeof __propDef.events}  LockClosedEvents */
/** @typedef {typeof __propDef.slots}  LockClosedSlots */
export default class LockClosed extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LockClosedProps = typeof __propDef.props;
export type LockClosedEvents = typeof __propDef.events;
export type LockClosedSlots = typeof __propDef.slots;
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
