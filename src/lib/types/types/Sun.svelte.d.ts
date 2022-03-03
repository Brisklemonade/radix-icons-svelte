/** @typedef {typeof __propDef.props}  SunProps */
/** @typedef {typeof __propDef.events}  SunEvents */
/** @typedef {typeof __propDef.slots}  SunSlots */
export default class Sun extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SunProps = typeof __propDef.props;
export type SunEvents = typeof __propDef.events;
export type SunSlots = typeof __propDef.slots;
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
