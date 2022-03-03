/** @typedef {typeof __propDef.props}  FramerLogoProps */
/** @typedef {typeof __propDef.events}  FramerLogoEvents */
/** @typedef {typeof __propDef.slots}  FramerLogoSlots */
export default class FramerLogo extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FramerLogoProps = typeof __propDef.props;
export type FramerLogoEvents = typeof __propDef.events;
export type FramerLogoSlots = typeof __propDef.slots;
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
