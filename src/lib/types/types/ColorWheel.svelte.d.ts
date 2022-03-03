/** @typedef {typeof __propDef.props}  ColorWheelProps */
/** @typedef {typeof __propDef.events}  ColorWheelEvents */
/** @typedef {typeof __propDef.slots}  ColorWheelSlots */
export default class ColorWheel extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ColorWheelProps = typeof __propDef.props;
export type ColorWheelEvents = typeof __propDef.events;
export type ColorWheelSlots = typeof __propDef.slots;
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
