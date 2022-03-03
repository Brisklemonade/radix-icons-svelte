/** @typedef {typeof __propDef.props}  Link2Props */
/** @typedef {typeof __propDef.events}  Link2Events */
/** @typedef {typeof __propDef.slots}  Link2Slots */
export default class Link2 extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type Link2Props = typeof __propDef.props;
export type Link2Events = typeof __propDef.events;
export type Link2Slots = typeof __propDef.slots;
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
