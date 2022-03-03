/** @typedef {typeof __propDef.props}  PlusCircledProps */
/** @typedef {typeof __propDef.events}  PlusCircledEvents */
/** @typedef {typeof __propDef.slots}  PlusCircledSlots */
export default class PlusCircled extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PlusCircledProps = typeof __propDef.props;
export type PlusCircledEvents = typeof __propDef.events;
export type PlusCircledSlots = typeof __propDef.slots;
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
