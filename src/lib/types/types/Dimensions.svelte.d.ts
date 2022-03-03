/** @typedef {typeof __propDef.props}  DimensionsProps */
/** @typedef {typeof __propDef.events}  DimensionsEvents */
/** @typedef {typeof __propDef.slots}  DimensionsSlots */
export default class Dimensions extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DimensionsProps = typeof __propDef.props;
export type DimensionsEvents = typeof __propDef.events;
export type DimensionsSlots = typeof __propDef.slots;
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
