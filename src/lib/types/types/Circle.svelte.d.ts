/** @typedef {typeof __propDef.props}  CircleProps */
/** @typedef {typeof __propDef.events}  CircleEvents */
/** @typedef {typeof __propDef.slots}  CircleSlots */
export default class Circle extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CircleProps = typeof __propDef.props;
export type CircleEvents = typeof __propDef.events;
export type CircleSlots = typeof __propDef.slots;
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
