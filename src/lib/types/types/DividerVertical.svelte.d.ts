/** @typedef {typeof __propDef.props}  DividerVerticalProps */
/** @typedef {typeof __propDef.events}  DividerVerticalEvents */
/** @typedef {typeof __propDef.slots}  DividerVerticalSlots */
export default class DividerVertical extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DividerVerticalProps = typeof __propDef.props;
export type DividerVerticalEvents = typeof __propDef.events;
export type DividerVerticalSlots = typeof __propDef.slots;
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
