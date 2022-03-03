/** @typedef {typeof __propDef.props}  CopyProps */
/** @typedef {typeof __propDef.events}  CopyEvents */
/** @typedef {typeof __propDef.slots}  CopySlots */
export default class Copy extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CopyProps = typeof __propDef.props;
export type CopyEvents = typeof __propDef.events;
export type CopySlots = typeof __propDef.slots;
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
