/** @typedef {typeof __propDef.props}  VideoProps */
/** @typedef {typeof __propDef.events}  VideoEvents */
/** @typedef {typeof __propDef.slots}  VideoSlots */
export default class Video extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type VideoProps = typeof __propDef.props;
export type VideoEvents = typeof __propDef.events;
export type VideoSlots = typeof __propDef.slots;
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
