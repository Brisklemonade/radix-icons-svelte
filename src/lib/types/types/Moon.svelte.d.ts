/** @typedef {typeof __propDef.props}  MoonProps */
/** @typedef {typeof __propDef.events}  MoonEvents */
/** @typedef {typeof __propDef.slots}  MoonSlots */
export default class Moon extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MoonProps = typeof __propDef.props;
export type MoonEvents = typeof __propDef.events;
export type MoonSlots = typeof __propDef.slots;
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
