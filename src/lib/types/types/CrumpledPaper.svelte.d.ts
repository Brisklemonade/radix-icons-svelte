/** @typedef {typeof __propDef.props}  CrumpledPaperProps */
/** @typedef {typeof __propDef.events}  CrumpledPaperEvents */
/** @typedef {typeof __propDef.slots}  CrumpledPaperSlots */
export default class CrumpledPaper extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CrumpledPaperProps = typeof __propDef.props;
export type CrumpledPaperEvents = typeof __propDef.events;
export type CrumpledPaperSlots = typeof __propDef.slots;
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
