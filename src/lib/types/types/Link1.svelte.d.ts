/** @typedef {typeof __propDef.props}  Link1Props */
/** @typedef {typeof __propDef.events}  Link1Events */
/** @typedef {typeof __propDef.slots}  Link1Slots */
export default class Link1 extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type Link1Props = typeof __propDef.props;
export type Link1Events = typeof __propDef.events;
export type Link1Slots = typeof __propDef.slots;
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
