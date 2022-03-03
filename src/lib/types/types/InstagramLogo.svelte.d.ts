/** @typedef {typeof __propDef.props}  InstagramLogoProps */
/** @typedef {typeof __propDef.events}  InstagramLogoEvents */
/** @typedef {typeof __propDef.slots}  InstagramLogoSlots */
export default class InstagramLogo extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type InstagramLogoProps = typeof __propDef.props;
export type InstagramLogoEvents = typeof __propDef.events;
export type InstagramLogoSlots = typeof __propDef.slots;
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
