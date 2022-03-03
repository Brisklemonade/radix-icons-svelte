/** @typedef {typeof __propDef.props}  EyeNoneProps */
/** @typedef {typeof __propDef.events}  EyeNoneEvents */
/** @typedef {typeof __propDef.slots}  EyeNoneSlots */
export default class EyeNone extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EyeNoneProps = typeof __propDef.props;
export type EyeNoneEvents = typeof __propDef.events;
export type EyeNoneSlots = typeof __propDef.slots;
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
