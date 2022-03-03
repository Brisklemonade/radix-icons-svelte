/** @typedef {typeof __propDef.props}  BorderDashedProps */
/** @typedef {typeof __propDef.events}  BorderDashedEvents */
/** @typedef {typeof __propDef.slots}  BorderDashedSlots */
export default class BorderDashed extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BorderDashedProps = typeof __propDef.props;
export type BorderDashedEvents = typeof __propDef.events;
export type BorderDashedSlots = typeof __propDef.slots;
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
