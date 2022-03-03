/** @typedef {typeof __propDef.props}  BorderBottomProps */
/** @typedef {typeof __propDef.events}  BorderBottomEvents */
/** @typedef {typeof __propDef.slots}  BorderBottomSlots */
export default class BorderBottom extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BorderBottomProps = typeof __propDef.props;
export type BorderBottomEvents = typeof __propDef.events;
export type BorderBottomSlots = typeof __propDef.slots;
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
