/** @typedef {typeof __propDef.props}  DrawingPinFilledProps */
/** @typedef {typeof __propDef.events}  DrawingPinFilledEvents */
/** @typedef {typeof __propDef.slots}  DrawingPinFilledSlots */
export default class DrawingPinFilled extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DrawingPinFilledProps = typeof __propDef.props;
export type DrawingPinFilledEvents = typeof __propDef.events;
export type DrawingPinFilledSlots = typeof __propDef.slots;
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
