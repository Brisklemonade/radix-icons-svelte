/** @typedef {typeof __propDef.props}  BadgeProps */
/** @typedef {typeof __propDef.events}  BadgeEvents */
/** @typedef {typeof __propDef.slots}  BadgeSlots */
export default class Badge extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BadgeProps = typeof __propDef.props;
export type BadgeEvents = typeof __propDef.events;
export type BadgeSlots = typeof __propDef.slots;
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
