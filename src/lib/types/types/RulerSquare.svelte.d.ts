/** @typedef {typeof __propDef.props}  RulerSquareProps */
/** @typedef {typeof __propDef.events}  RulerSquareEvents */
/** @typedef {typeof __propDef.slots}  RulerSquareSlots */
export default class RulerSquare extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type RulerSquareProps = typeof __propDef.props;
export type RulerSquareEvents = typeof __propDef.events;
export type RulerSquareSlots = typeof __propDef.slots;
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
