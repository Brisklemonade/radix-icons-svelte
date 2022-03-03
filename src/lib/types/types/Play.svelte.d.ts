/** @typedef {typeof __propDef.props}  PlayProps */
/** @typedef {typeof __propDef.events}  PlayEvents */
/** @typedef {typeof __propDef.slots}  PlaySlots */
export default class Play extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PlayProps = typeof __propDef.props;
export type PlayEvents = typeof __propDef.events;
export type PlaySlots = typeof __propDef.slots;
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
