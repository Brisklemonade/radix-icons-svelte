/** @typedef {typeof __propDef.props}  MarginProps */
/** @typedef {typeof __propDef.events}  MarginEvents */
/** @typedef {typeof __propDef.slots}  MarginSlots */
export default class Margin extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MarginProps = typeof __propDef.props;
export type MarginEvents = typeof __propDef.events;
export type MarginSlots = typeof __propDef.slots;
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
