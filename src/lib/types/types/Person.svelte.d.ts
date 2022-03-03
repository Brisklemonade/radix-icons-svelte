/** @typedef {typeof __propDef.props}  PersonProps */
/** @typedef {typeof __propDef.events}  PersonEvents */
/** @typedef {typeof __propDef.slots}  PersonSlots */
export default class Person extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PersonProps = typeof __propDef.props;
export type PersonEvents = typeof __propDef.events;
export type PersonSlots = typeof __propDef.slots;
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
