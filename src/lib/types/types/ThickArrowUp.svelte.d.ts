/** @typedef {typeof __propDef.props}  ThickArrowUpProps */
/** @typedef {typeof __propDef.events}  ThickArrowUpEvents */
/** @typedef {typeof __propDef.slots}  ThickArrowUpSlots */
export default class ThickArrowUp extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ThickArrowUpProps = typeof __propDef.props;
export type ThickArrowUpEvents = typeof __propDef.events;
export type ThickArrowUpSlots = typeof __propDef.slots;
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
