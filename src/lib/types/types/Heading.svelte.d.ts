/** @typedef {typeof __propDef.props}  HeadingProps */
/** @typedef {typeof __propDef.events}  HeadingEvents */
/** @typedef {typeof __propDef.slots}  HeadingSlots */
export default class Heading extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type HeadingProps = typeof __propDef.props;
export type HeadingEvents = typeof __propDef.events;
export type HeadingSlots = typeof __propDef.slots;
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
