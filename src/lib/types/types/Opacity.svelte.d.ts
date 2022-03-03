/** @typedef {typeof __propDef.props}  OpacityProps */
/** @typedef {typeof __propDef.events}  OpacityEvents */
/** @typedef {typeof __propDef.slots}  OpacitySlots */
export default class Opacity extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type OpacityProps = typeof __propDef.props;
export type OpacityEvents = typeof __propDef.events;
export type OpacitySlots = typeof __propDef.slots;
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
