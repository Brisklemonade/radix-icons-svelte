/** @typedef {typeof __propDef.props}  ResetProps */
/** @typedef {typeof __propDef.events}  ResetEvents */
/** @typedef {typeof __propDef.slots}  ResetSlots */
export default class Reset extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ResetProps = typeof __propDef.props;
export type ResetEvents = typeof __propDef.events;
export type ResetSlots = typeof __propDef.slots;
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
