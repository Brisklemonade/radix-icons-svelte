/** @typedef {typeof __propDef.props}  AlignRightProps */
/** @typedef {typeof __propDef.events}  AlignRightEvents */
/** @typedef {typeof __propDef.slots}  AlignRightSlots */
export default class AlignRight extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AlignRightProps = typeof __propDef.props;
export type AlignRightEvents = typeof __propDef.events;
export type AlignRightSlots = typeof __propDef.slots;
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
