/** @typedef {typeof __propDef.props}  BorderRightProps */
/** @typedef {typeof __propDef.events}  BorderRightEvents */
/** @typedef {typeof __propDef.slots}  BorderRightSlots */
export default class BorderRight extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BorderRightProps = typeof __propDef.props;
export type BorderRightEvents = typeof __propDef.events;
export type BorderRightSlots = typeof __propDef.slots;
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
