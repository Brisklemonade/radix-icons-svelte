/** @typedef {typeof __propDef.props}  TrackNextProps */
/** @typedef {typeof __propDef.events}  TrackNextEvents */
/** @typedef {typeof __propDef.slots}  TrackNextSlots */
export default class TrackNext extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TrackNextProps = typeof __propDef.props;
export type TrackNextEvents = typeof __propDef.events;
export type TrackNextSlots = typeof __propDef.slots;
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
