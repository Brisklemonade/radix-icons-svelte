/** @typedef {typeof __propDef.props}  SpeakerOffProps */
/** @typedef {typeof __propDef.events}  SpeakerOffEvents */
/** @typedef {typeof __propDef.slots}  SpeakerOffSlots */
export default class SpeakerOff extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SpeakerOffProps = typeof __propDef.props;
export type SpeakerOffEvents = typeof __propDef.events;
export type SpeakerOffSlots = typeof __propDef.slots;
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
