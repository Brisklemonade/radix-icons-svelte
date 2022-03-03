/** @typedef {typeof __propDef.props}  ReloadProps */
/** @typedef {typeof __propDef.events}  ReloadEvents */
/** @typedef {typeof __propDef.slots}  ReloadSlots */
export default class Reload extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ReloadProps = typeof __propDef.props;
export type ReloadEvents = typeof __propDef.events;
export type ReloadSlots = typeof __propDef.slots;
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
