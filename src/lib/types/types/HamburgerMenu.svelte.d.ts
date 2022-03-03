/** @typedef {typeof __propDef.props}  HamburgerMenuProps */
/** @typedef {typeof __propDef.events}  HamburgerMenuEvents */
/** @typedef {typeof __propDef.slots}  HamburgerMenuSlots */
export default class HamburgerMenu extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type HamburgerMenuProps = typeof __propDef.props;
export type HamburgerMenuEvents = typeof __propDef.events;
export type HamburgerMenuSlots = typeof __propDef.slots;
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
