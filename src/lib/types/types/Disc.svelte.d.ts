/** @typedef {typeof __propDef.props}  DiscProps */
/** @typedef {typeof __propDef.events}  DiscEvents */
/** @typedef {typeof __propDef.slots}  DiscSlots */
export default class Disc extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DiscProps = typeof __propDef.props;
export type DiscEvents = typeof __propDef.events;
export type DiscSlots = typeof __propDef.slots;
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
