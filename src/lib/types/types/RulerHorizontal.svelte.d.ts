/** @typedef {typeof __propDef.props}  RulerHorizontalProps */
/** @typedef {typeof __propDef.events}  RulerHorizontalEvents */
/** @typedef {typeof __propDef.slots}  RulerHorizontalSlots */
export default class RulerHorizontal extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type RulerHorizontalProps = typeof __propDef.props;
export type RulerHorizontalEvents = typeof __propDef.events;
export type RulerHorizontalSlots = typeof __propDef.slots;
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
