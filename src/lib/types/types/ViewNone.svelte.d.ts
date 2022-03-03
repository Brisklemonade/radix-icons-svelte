/** @typedef {typeof __propDef.props}  ViewNoneProps */
/** @typedef {typeof __propDef.events}  ViewNoneEvents */
/** @typedef {typeof __propDef.slots}  ViewNoneSlots */
export default class ViewNone extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ViewNoneProps = typeof __propDef.props;
export type ViewNoneEvents = typeof __propDef.events;
export type ViewNoneSlots = typeof __propDef.slots;
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
