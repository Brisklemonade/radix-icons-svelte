/** @typedef {typeof __propDef.props}  Pencil2Props */
/** @typedef {typeof __propDef.events}  Pencil2Events */
/** @typedef {typeof __propDef.slots}  Pencil2Slots */
export default class Pencil2 extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type Pencil2Props = typeof __propDef.props;
export type Pencil2Events = typeof __propDef.events;
export type Pencil2Slots = typeof __propDef.slots;
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
