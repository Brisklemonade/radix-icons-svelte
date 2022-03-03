/** @typedef {typeof __propDef.props}  CrossCircledProps */
/** @typedef {typeof __propDef.events}  CrossCircledEvents */
/** @typedef {typeof __propDef.slots}  CrossCircledSlots */
export default class CrossCircled extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CrossCircledProps = typeof __propDef.props;
export type CrossCircledEvents = typeof __propDef.events;
export type CrossCircledSlots = typeof __propDef.slots;
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
