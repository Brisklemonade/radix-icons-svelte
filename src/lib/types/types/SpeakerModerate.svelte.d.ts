/** @typedef {typeof __propDef.props}  SpeakerModerateProps */
/** @typedef {typeof __propDef.events}  SpeakerModerateEvents */
/** @typedef {typeof __propDef.slots}  SpeakerModerateSlots */
export default class SpeakerModerate extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SpeakerModerateProps = typeof __propDef.props;
export type SpeakerModerateEvents = typeof __propDef.events;
export type SpeakerModerateSlots = typeof __propDef.slots;
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
