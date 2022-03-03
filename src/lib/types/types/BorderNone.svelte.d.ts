/** @typedef {typeof __propDef.props}  BorderNoneProps */
/** @typedef {typeof __propDef.events}  BorderNoneEvents */
/** @typedef {typeof __propDef.slots}  BorderNoneSlots */
export default class BorderNone extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BorderNoneProps = typeof __propDef.props;
export type BorderNoneEvents = typeof __propDef.events;
export type BorderNoneSlots = typeof __propDef.slots;
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
