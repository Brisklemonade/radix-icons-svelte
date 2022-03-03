/** @typedef {typeof __propDef.props}  DotsVerticalProps */
/** @typedef {typeof __propDef.events}  DotsVerticalEvents */
/** @typedef {typeof __propDef.slots}  DotsVerticalSlots */
export default class DotsVertical extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DotsVerticalProps = typeof __propDef.props;
export type DotsVerticalEvents = typeof __propDef.events;
export type DotsVerticalSlots = typeof __propDef.slots;
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
