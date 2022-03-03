/** @typedef {typeof __propDef.props}  IconjarLogoProps */
/** @typedef {typeof __propDef.events}  IconjarLogoEvents */
/** @typedef {typeof __propDef.slots}  IconjarLogoSlots */
export default class IconjarLogo extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IconjarLogoProps = typeof __propDef.props;
export type IconjarLogoEvents = typeof __propDef.events;
export type IconjarLogoSlots = typeof __propDef.slots;
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
