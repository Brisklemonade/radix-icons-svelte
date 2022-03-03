/** @typedef {typeof __propDef.props}  Share2Props */
/** @typedef {typeof __propDef.events}  Share2Events */
/** @typedef {typeof __propDef.slots}  Share2Slots */
export default class Share2 extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type Share2Props = typeof __propDef.props;
export type Share2Events = typeof __propDef.events;
export type Share2Slots = typeof __propDef.slots;
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
