/** @typedef {typeof __propDef.props}  DotProps */
/** @typedef {typeof __propDef.events}  DotEvents */
/** @typedef {typeof __propDef.slots}  DotSlots */
export default class Dot extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DotProps = typeof __propDef.props;
export type DotEvents = typeof __propDef.events;
export type DotSlots = typeof __propDef.slots;
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
