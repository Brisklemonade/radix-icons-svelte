/** @typedef {typeof __propDef.props}  LaptopProps */
/** @typedef {typeof __propDef.events}  LaptopEvents */
/** @typedef {typeof __propDef.slots}  LaptopSlots */
export default class Laptop extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LaptopProps = typeof __propDef.props;
export type LaptopEvents = typeof __propDef.events;
export type LaptopSlots = typeof __propDef.slots;
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
