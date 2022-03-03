/** @typedef {typeof __propDef.props}  MixProps */
/** @typedef {typeof __propDef.events}  MixEvents */
/** @typedef {typeof __propDef.slots}  MixSlots */
export default class Mix extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MixProps = typeof __propDef.props;
export type MixEvents = typeof __propDef.events;
export type MixSlots = typeof __propDef.slots;
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
