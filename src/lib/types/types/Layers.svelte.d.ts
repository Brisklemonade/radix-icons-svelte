/** @typedef {typeof __propDef.props}  LayersProps */
/** @typedef {typeof __propDef.events}  LayersEvents */
/** @typedef {typeof __propDef.slots}  LayersSlots */
export default class Layers extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LayersProps = typeof __propDef.props;
export type LayersEvents = typeof __propDef.events;
export type LayersSlots = typeof __propDef.slots;
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
