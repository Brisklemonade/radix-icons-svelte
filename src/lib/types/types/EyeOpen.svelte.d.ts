/** @typedef {typeof __propDef.props}  EyeOpenProps */
/** @typedef {typeof __propDef.events}  EyeOpenEvents */
/** @typedef {typeof __propDef.slots}  EyeOpenSlots */
export default class EyeOpen extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EyeOpenProps = typeof __propDef.props;
export type EyeOpenEvents = typeof __propDef.events;
export type EyeOpenSlots = typeof __propDef.slots;
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
