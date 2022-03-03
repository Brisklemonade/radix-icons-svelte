/** @typedef {typeof __propDef.props}  ReaderProps */
/** @typedef {typeof __propDef.events}  ReaderEvents */
/** @typedef {typeof __propDef.slots}  ReaderSlots */
export default class Reader extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ReaderProps = typeof __propDef.props;
export type ReaderEvents = typeof __propDef.events;
export type ReaderSlots = typeof __propDef.slots;
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
