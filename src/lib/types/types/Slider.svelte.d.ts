/** @typedef {typeof __propDef.props}  SliderProps */
/** @typedef {typeof __propDef.events}  SliderEvents */
/** @typedef {typeof __propDef.slots}  SliderSlots */
export default class Slider extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SliderProps = typeof __propDef.props;
export type SliderEvents = typeof __propDef.events;
export type SliderSlots = typeof __propDef.slots;
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
