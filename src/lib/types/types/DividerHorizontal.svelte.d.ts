/** @typedef {typeof __propDef.props}  DividerHorizontalProps */
/** @typedef {typeof __propDef.events}  DividerHorizontalEvents */
/** @typedef {typeof __propDef.slots}  DividerHorizontalSlots */
export default class DividerHorizontal extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DividerHorizontalProps = typeof __propDef.props;
export type DividerHorizontalEvents = typeof __propDef.events;
export type DividerHorizontalSlots = typeof __propDef.slots;
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
