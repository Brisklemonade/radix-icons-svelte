/** @typedef {typeof __propDef.props}  AlignLeftProps */
/** @typedef {typeof __propDef.events}  AlignLeftEvents */
/** @typedef {typeof __propDef.slots}  AlignLeftSlots */
export default class AlignLeft extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AlignLeftProps = typeof __propDef.props;
export type AlignLeftEvents = typeof __propDef.events;
export type AlignLeftSlots = typeof __propDef.slots;
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
