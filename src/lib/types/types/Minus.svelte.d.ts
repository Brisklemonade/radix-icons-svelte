/** @typedef {typeof __propDef.props}  MinusProps */
/** @typedef {typeof __propDef.events}  MinusEvents */
/** @typedef {typeof __propDef.slots}  MinusSlots */
export default class Minus extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MinusProps = typeof __propDef.props;
export type MinusEvents = typeof __propDef.events;
export type MinusSlots = typeof __propDef.slots;
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
