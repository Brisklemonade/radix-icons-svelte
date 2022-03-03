/** @typedef {typeof __propDef.props}  Share1Props */
/** @typedef {typeof __propDef.events}  Share1Events */
/** @typedef {typeof __propDef.slots}  Share1Slots */
export default class Share1 extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type Share1Props = typeof __propDef.props;
export type Share1Events = typeof __propDef.events;
export type Share1Slots = typeof __propDef.slots;
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
