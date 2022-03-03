/** @typedef {typeof __propDef.props}  PinBottomProps */
/** @typedef {typeof __propDef.events}  PinBottomEvents */
/** @typedef {typeof __propDef.slots}  PinBottomSlots */
export default class PinBottom extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PinBottomProps = typeof __propDef.props;
export type PinBottomEvents = typeof __propDef.events;
export type PinBottomSlots = typeof __propDef.slots;
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
