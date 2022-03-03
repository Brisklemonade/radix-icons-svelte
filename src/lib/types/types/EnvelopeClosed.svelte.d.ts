/** @typedef {typeof __propDef.props}  EnvelopeClosedProps */
/** @typedef {typeof __propDef.events}  EnvelopeClosedEvents */
/** @typedef {typeof __propDef.slots}  EnvelopeClosedSlots */
export default class EnvelopeClosed extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EnvelopeClosedProps = typeof __propDef.props;
export type EnvelopeClosedEvents = typeof __propDef.events;
export type EnvelopeClosedSlots = typeof __propDef.slots;
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
