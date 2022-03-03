/** @typedef {typeof __propDef.props}  PaperPlaneProps */
/** @typedef {typeof __propDef.events}  PaperPlaneEvents */
/** @typedef {typeof __propDef.slots}  PaperPlaneSlots */
export default class PaperPlane extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PaperPlaneProps = typeof __propDef.props;
export type PaperPlaneEvents = typeof __propDef.events;
export type PaperPlaneSlots = typeof __propDef.slots;
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
