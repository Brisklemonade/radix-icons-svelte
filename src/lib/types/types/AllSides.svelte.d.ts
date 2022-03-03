/** @typedef {typeof __propDef.props}  AllSidesProps */
/** @typedef {typeof __propDef.events}  AllSidesEvents */
/** @typedef {typeof __propDef.slots}  AllSidesSlots */
export default class AllSides extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AllSidesProps = typeof __propDef.props;
export type AllSidesEvents = typeof __propDef.events;
export type AllSidesSlots = typeof __propDef.slots;
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
