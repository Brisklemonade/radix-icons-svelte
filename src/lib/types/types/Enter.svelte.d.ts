/** @typedef {typeof __propDef.props}  EnterProps */
/** @typedef {typeof __propDef.events}  EnterEvents */
/** @typedef {typeof __propDef.slots}  EnterSlots */
export default class Enter extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EnterProps = typeof __propDef.props;
export type EnterEvents = typeof __propDef.events;
export type EnterSlots = typeof __propDef.slots;
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
