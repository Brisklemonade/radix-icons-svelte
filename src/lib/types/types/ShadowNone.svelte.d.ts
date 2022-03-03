/** @typedef {typeof __propDef.props}  ShadowNoneProps */
/** @typedef {typeof __propDef.events}  ShadowNoneEvents */
/** @typedef {typeof __propDef.slots}  ShadowNoneSlots */
export default class ShadowNone extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ShadowNoneProps = typeof __propDef.props;
export type ShadowNoneEvents = typeof __propDef.events;
export type ShadowNoneSlots = typeof __propDef.slots;
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
