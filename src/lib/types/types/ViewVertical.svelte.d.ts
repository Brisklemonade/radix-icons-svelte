/** @typedef {typeof __propDef.props}  ViewVerticalProps */
/** @typedef {typeof __propDef.events}  ViewVerticalEvents */
/** @typedef {typeof __propDef.slots}  ViewVerticalSlots */
export default class ViewVertical extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ViewVerticalProps = typeof __propDef.props;
export type ViewVerticalEvents = typeof __propDef.events;
export type ViewVerticalSlots = typeof __propDef.slots;
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
