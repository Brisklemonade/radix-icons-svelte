/** @typedef {typeof __propDef.props}  ChevronUpProps */
/** @typedef {typeof __propDef.events}  ChevronUpEvents */
/** @typedef {typeof __propDef.slots}  ChevronUpSlots */
export default class ChevronUp extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ChevronUpProps = typeof __propDef.props;
export type ChevronUpEvents = typeof __propDef.events;
export type ChevronUpSlots = typeof __propDef.slots;
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
