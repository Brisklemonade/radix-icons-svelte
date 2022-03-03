/** @typedef {typeof __propDef.props}  StrikethroughProps */
/** @typedef {typeof __propDef.events}  StrikethroughEvents */
/** @typedef {typeof __propDef.slots}  StrikethroughSlots */
export default class Strikethrough extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type StrikethroughProps = typeof __propDef.props;
export type StrikethroughEvents = typeof __propDef.events;
export type StrikethroughSlots = typeof __propDef.slots;
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
