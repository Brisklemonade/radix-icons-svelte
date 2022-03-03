/** @typedef {typeof __propDef.props}  CookieProps */
/** @typedef {typeof __propDef.events}  CookieEvents */
/** @typedef {typeof __propDef.slots}  CookieSlots */
export default class Cookie extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CookieProps = typeof __propDef.props;
export type CookieEvents = typeof __propDef.events;
export type CookieSlots = typeof __propDef.slots;
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
