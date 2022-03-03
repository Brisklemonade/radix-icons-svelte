/** @typedef {typeof __propDef.props}  ResumeProps */
/** @typedef {typeof __propDef.events}  ResumeEvents */
/** @typedef {typeof __propDef.slots}  ResumeSlots */
export default class Resume extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ResumeProps = typeof __propDef.props;
export type ResumeEvents = typeof __propDef.events;
export type ResumeSlots = typeof __propDef.slots;
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
