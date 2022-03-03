/** @typedef {typeof __propDef.props}  Cross1Props */
/** @typedef {typeof __propDef.events}  Cross1Events */
/** @typedef {typeof __propDef.slots}  Cross1Slots */
export default class Cross1 extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type Cross1Props = typeof __propDef.props;
export type Cross1Events = typeof __propDef.events;
export type Cross1Slots = typeof __propDef.slots;
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
