/** @typedef {typeof __propDef.props}  CornerTopLeftProps */
/** @typedef {typeof __propDef.events}  CornerTopLeftEvents */
/** @typedef {typeof __propDef.slots}  CornerTopLeftSlots */
export default class CornerTopLeft extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CornerTopLeftProps = typeof __propDef.props;
export type CornerTopLeftEvents = typeof __propDef.events;
export type CornerTopLeftSlots = typeof __propDef.slots;
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
