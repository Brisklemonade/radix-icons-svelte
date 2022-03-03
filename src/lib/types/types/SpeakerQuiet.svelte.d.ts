/** @typedef {typeof __propDef.props}  SpeakerQuietProps */
/** @typedef {typeof __propDef.events}  SpeakerQuietEvents */
/** @typedef {typeof __propDef.slots}  SpeakerQuietSlots */
export default class SpeakerQuiet extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SpeakerQuietProps = typeof __propDef.props;
export type SpeakerQuietEvents = typeof __propDef.events;
export type SpeakerQuietSlots = typeof __propDef.slots;
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
