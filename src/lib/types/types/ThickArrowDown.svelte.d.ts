/** @typedef {typeof __propDef.props}  ThickArrowDownProps */
/** @typedef {typeof __propDef.events}  ThickArrowDownEvents */
/** @typedef {typeof __propDef.slots}  ThickArrowDownSlots */
export default class ThickArrowDown extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ThickArrowDownProps = typeof __propDef.props;
export type ThickArrowDownEvents = typeof __propDef.events;
export type ThickArrowDownSlots = typeof __propDef.slots;
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
