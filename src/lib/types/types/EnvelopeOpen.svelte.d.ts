/** @typedef {typeof __propDef.props}  EnvelopeOpenProps */
/** @typedef {typeof __propDef.events}  EnvelopeOpenEvents */
/** @typedef {typeof __propDef.slots}  EnvelopeOpenSlots */
export default class EnvelopeOpen extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EnvelopeOpenProps = typeof __propDef.props;
export type EnvelopeOpenEvents = typeof __propDef.events;
export type EnvelopeOpenSlots = typeof __propDef.slots;
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
