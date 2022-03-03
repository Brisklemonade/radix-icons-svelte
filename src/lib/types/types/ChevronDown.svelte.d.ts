/** @typedef {typeof __propDef.props}  ChevronDownProps */
/** @typedef {typeof __propDef.events}  ChevronDownEvents */
/** @typedef {typeof __propDef.slots}  ChevronDownSlots */
export default class ChevronDown extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ChevronDownProps = typeof __propDef.props;
export type ChevronDownEvents = typeof __propDef.events;
export type ChevronDownSlots = typeof __propDef.slots;
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
