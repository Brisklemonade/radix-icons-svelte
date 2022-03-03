/** @typedef {typeof __propDef.props}  Pencil1Props */
/** @typedef {typeof __propDef.events}  Pencil1Events */
/** @typedef {typeof __propDef.slots}  Pencil1Slots */
export default class Pencil1 extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type Pencil1Props = typeof __propDef.props;
export type Pencil1Events = typeof __propDef.events;
export type Pencil1Slots = typeof __propDef.slots;
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
