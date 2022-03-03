/** @typedef {typeof __propDef.props}  SpeakerLoudProps */
/** @typedef {typeof __propDef.events}  SpeakerLoudEvents */
/** @typedef {typeof __propDef.slots}  SpeakerLoudSlots */
export default class SpeakerLoud extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SpeakerLoudProps = typeof __propDef.props;
export type SpeakerLoudEvents = typeof __propDef.events;
export type SpeakerLoudSlots = typeof __propDef.slots;
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
