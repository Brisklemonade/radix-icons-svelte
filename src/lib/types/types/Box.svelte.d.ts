/** @typedef {typeof __propDef.props}  BoxProps */
/** @typedef {typeof __propDef.events}  BoxEvents */
/** @typedef {typeof __propDef.slots}  BoxSlots */
export default class Box extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BoxProps = typeof __propDef.props;
export type BoxEvents = typeof __propDef.events;
export type BoxSlots = typeof __propDef.slots;
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
