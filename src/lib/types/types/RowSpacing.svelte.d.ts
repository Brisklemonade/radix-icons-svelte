/** @typedef {typeof __propDef.props}  RowSpacingProps */
/** @typedef {typeof __propDef.events}  RowSpacingEvents */
/** @typedef {typeof __propDef.slots}  RowSpacingSlots */
export default class RowSpacing extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type RowSpacingProps = typeof __propDef.props;
export type RowSpacingEvents = typeof __propDef.events;
export type RowSpacingSlots = typeof __propDef.slots;
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
