/** @typedef {typeof __propDef.props}  PlusProps */
/** @typedef {typeof __propDef.events}  PlusEvents */
/** @typedef {typeof __propDef.slots}  PlusSlots */
export default class Plus extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PlusProps = typeof __propDef.props;
export type PlusEvents = typeof __propDef.events;
export type PlusSlots = typeof __propDef.slots;
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
