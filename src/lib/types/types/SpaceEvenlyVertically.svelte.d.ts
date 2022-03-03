/** @typedef {typeof __propDef.props}  SpaceEvenlyVerticallyProps */
/** @typedef {typeof __propDef.events}  SpaceEvenlyVerticallyEvents */
/** @typedef {typeof __propDef.slots}  SpaceEvenlyVerticallySlots */
export default class SpaceEvenlyVertically extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SpaceEvenlyVerticallyProps = typeof __propDef.props;
export type SpaceEvenlyVerticallyEvents = typeof __propDef.events;
export type SpaceEvenlyVerticallySlots = typeof __propDef.slots;
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
