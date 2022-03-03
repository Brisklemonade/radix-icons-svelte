/** @typedef {typeof __propDef.props}  DesktopProps */
/** @typedef {typeof __propDef.events}  DesktopEvents */
/** @typedef {typeof __propDef.slots}  DesktopSlots */
export default class Desktop extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DesktopProps = typeof __propDef.props;
export type DesktopEvents = typeof __propDef.events;
export type DesktopSlots = typeof __propDef.slots;
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
