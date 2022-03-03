/** @typedef {typeof __propDef.props}  TrackPreviousProps */
/** @typedef {typeof __propDef.events}  TrackPreviousEvents */
/** @typedef {typeof __propDef.slots}  TrackPreviousSlots */
export default class TrackPrevious extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TrackPreviousProps = typeof __propDef.props;
export type TrackPreviousEvents = typeof __propDef.events;
export type TrackPreviousSlots = typeof __propDef.slots;
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
