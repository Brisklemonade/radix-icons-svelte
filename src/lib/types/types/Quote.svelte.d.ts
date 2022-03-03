/** @typedef {typeof __propDef.props}  QuoteProps */
/** @typedef {typeof __propDef.events}  QuoteEvents */
/** @typedef {typeof __propDef.slots}  QuoteSlots */
export default class Quote extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type QuoteProps = typeof __propDef.props;
export type QuoteEvents = typeof __propDef.events;
export type QuoteSlots = typeof __propDef.slots;
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
