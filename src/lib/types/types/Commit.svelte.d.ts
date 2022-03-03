/** @typedef {typeof __propDef.props}  CommitProps */
/** @typedef {typeof __propDef.events}  CommitEvents */
/** @typedef {typeof __propDef.slots}  CommitSlots */
export default class Commit extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CommitProps = typeof __propDef.props;
export type CommitEvents = typeof __propDef.events;
export type CommitSlots = typeof __propDef.slots;
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
