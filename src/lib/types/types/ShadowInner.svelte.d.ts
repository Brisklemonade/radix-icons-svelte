/** @typedef {typeof __propDef.props}  ShadowInnerProps */
/** @typedef {typeof __propDef.events}  ShadowInnerEvents */
/** @typedef {typeof __propDef.slots}  ShadowInnerSlots */
export default class ShadowInner extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ShadowInnerProps = typeof __propDef.props;
export type ShadowInnerEvents = typeof __propDef.events;
export type ShadowInnerSlots = typeof __propDef.slots;
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
