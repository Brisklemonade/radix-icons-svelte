/** @typedef {typeof __propDef.props}  LinkedinLogoProps */
/** @typedef {typeof __propDef.events}  LinkedinLogoEvents */
/** @typedef {typeof __propDef.slots}  LinkedinLogoSlots */
export default class LinkedinLogo extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LinkedinLogoProps = typeof __propDef.props;
export type LinkedinLogoEvents = typeof __propDef.events;
export type LinkedinLogoSlots = typeof __propDef.slots;
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
