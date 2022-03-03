/** @typedef {typeof __propDef.props}  TwitterLogoProps */
/** @typedef {typeof __propDef.events}  TwitterLogoEvents */
/** @typedef {typeof __propDef.slots}  TwitterLogoSlots */
export default class TwitterLogo extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TwitterLogoProps = typeof __propDef.props;
export type TwitterLogoEvents = typeof __propDef.events;
export type TwitterLogoSlots = typeof __propDef.slots;
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
