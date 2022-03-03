/** @typedef {typeof __propDef.props}  Half1Props */
/** @typedef {typeof __propDef.events}  Half1Events */
/** @typedef {typeof __propDef.slots}  Half1Slots */
export default class Half1 extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type Half1Props = typeof __propDef.props;
export type Half1Events = typeof __propDef.events;
export type Half1Slots = typeof __propDef.slots;
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
