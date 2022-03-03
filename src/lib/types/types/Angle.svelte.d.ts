/** @typedef {typeof __propDef.props}  AngleProps */
/** @typedef {typeof __propDef.events}  AngleEvents */
/** @typedef {typeof __propDef.slots}  AngleSlots */
export default class Angle extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AngleProps = typeof __propDef.props;
export type AngleEvents = typeof __propDef.events;
export type AngleSlots = typeof __propDef.slots;
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
