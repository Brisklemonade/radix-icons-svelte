/** @typedef {typeof __propDef.props}  GlobeProps */
/** @typedef {typeof __propDef.events}  GlobeEvents */
/** @typedef {typeof __propDef.slots}  GlobeSlots */
export default class Globe extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type GlobeProps = typeof __propDef.props;
export type GlobeEvents = typeof __propDef.events;
export type GlobeSlots = typeof __propDef.slots;
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
