/** @typedef {typeof __propDef.props}  BellProps */
/** @typedef {typeof __propDef.events}  BellEvents */
/** @typedef {typeof __propDef.slots}  BellSlots */
export default class Bell extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BellProps = typeof __propDef.props;
export type BellEvents = typeof __propDef.events;
export type BellSlots = typeof __propDef.slots;
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
