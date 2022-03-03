/** @typedef {typeof __propDef.props}  SquareProps */
/** @typedef {typeof __propDef.events}  SquareEvents */
/** @typedef {typeof __propDef.slots}  SquareSlots */
export default class Square extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SquareProps = typeof __propDef.props;
export type SquareEvents = typeof __propDef.events;
export type SquareSlots = typeof __propDef.slots;
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
