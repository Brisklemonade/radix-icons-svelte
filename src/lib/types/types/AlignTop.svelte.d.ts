/** @typedef {typeof __propDef.props}  AlignTopProps */
/** @typedef {typeof __propDef.events}  AlignTopEvents */
/** @typedef {typeof __propDef.slots}  AlignTopSlots */
export default class AlignTop extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AlignTopProps = typeof __propDef.props;
export type AlignTopEvents = typeof __propDef.events;
export type AlignTopSlots = typeof __propDef.slots;
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
