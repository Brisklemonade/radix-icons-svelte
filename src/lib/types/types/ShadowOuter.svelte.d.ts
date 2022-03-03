/** @typedef {typeof __propDef.props}  ShadowOuterProps */
/** @typedef {typeof __propDef.events}  ShadowOuterEvents */
/** @typedef {typeof __propDef.slots}  ShadowOuterSlots */
export default class ShadowOuter extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ShadowOuterProps = typeof __propDef.props;
export type ShadowOuterEvents = typeof __propDef.events;
export type ShadowOuterSlots = typeof __propDef.slots;
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
