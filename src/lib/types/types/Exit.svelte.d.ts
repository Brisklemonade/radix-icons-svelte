/** @typedef {typeof __propDef.props}  ExitProps */
/** @typedef {typeof __propDef.events}  ExitEvents */
/** @typedef {typeof __propDef.slots}  ExitSlots */
export default class Exit extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ExitProps = typeof __propDef.props;
export type ExitEvents = typeof __propDef.events;
export type ExitSlots = typeof __propDef.slots;
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
