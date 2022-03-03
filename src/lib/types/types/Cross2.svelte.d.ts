/** @typedef {typeof __propDef.props}  Cross2Props */
/** @typedef {typeof __propDef.events}  Cross2Events */
/** @typedef {typeof __propDef.slots}  Cross2Slots */
export default class Cross2 extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type Cross2Props = typeof __propDef.props;
export type Cross2Events = typeof __propDef.events;
export type Cross2Slots = typeof __propDef.slots;
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
