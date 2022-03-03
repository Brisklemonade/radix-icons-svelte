/** @typedef {typeof __propDef.props}  DotsHorizontalProps */
/** @typedef {typeof __propDef.events}  DotsHorizontalEvents */
/** @typedef {typeof __propDef.slots}  DotsHorizontalSlots */
export default class DotsHorizontal extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DotsHorizontalProps = typeof __propDef.props;
export type DotsHorizontalEvents = typeof __propDef.events;
export type DotsHorizontalSlots = typeof __propDef.slots;
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
