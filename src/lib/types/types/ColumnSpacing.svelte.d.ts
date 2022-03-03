/** @typedef {typeof __propDef.props}  ColumnSpacingProps */
/** @typedef {typeof __propDef.events}  ColumnSpacingEvents */
/** @typedef {typeof __propDef.slots}  ColumnSpacingSlots */
export default class ColumnSpacing extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ColumnSpacingProps = typeof __propDef.props;
export type ColumnSpacingEvents = typeof __propDef.events;
export type ColumnSpacingSlots = typeof __propDef.slots;
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
