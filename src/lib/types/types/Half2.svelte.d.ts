/** @typedef {typeof __propDef.props}  Half2Props */
/** @typedef {typeof __propDef.events}  Half2Events */
/** @typedef {typeof __propDef.slots}  Half2Slots */
export default class Half2 extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type Half2Props = typeof __propDef.props;
export type Half2Events = typeof __propDef.events;
export type Half2Slots = typeof __propDef.slots;
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
