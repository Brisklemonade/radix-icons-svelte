/** @typedef {typeof __propDef.props}  PauseProps */
/** @typedef {typeof __propDef.events}  PauseEvents */
/** @typedef {typeof __propDef.slots}  PauseSlots */
export default class Pause extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PauseProps = typeof __propDef.props;
export type PauseEvents = typeof __propDef.events;
export type PauseSlots = typeof __propDef.slots;
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
