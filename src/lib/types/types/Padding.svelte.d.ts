/** @typedef {typeof __propDef.props}  PaddingProps */
/** @typedef {typeof __propDef.events}  PaddingEvents */
/** @typedef {typeof __propDef.slots}  PaddingSlots */
export default class Padding extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PaddingProps = typeof __propDef.props;
export type PaddingEvents = typeof __propDef.events;
export type PaddingSlots = typeof __propDef.slots;
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
