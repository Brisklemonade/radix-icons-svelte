/** @typedef {typeof __propDef.props}  CornerTopRightProps */
/** @typedef {typeof __propDef.events}  CornerTopRightEvents */
/** @typedef {typeof __propDef.slots}  CornerTopRightSlots */
export default class CornerTopRight extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CornerTopRightProps = typeof __propDef.props;
export type CornerTopRightEvents = typeof __propDef.events;
export type CornerTopRightSlots = typeof __propDef.slots;
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
