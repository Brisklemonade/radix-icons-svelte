/** @typedef {typeof __propDef.props}  DropdownMenuProps */
/** @typedef {typeof __propDef.events}  DropdownMenuEvents */
/** @typedef {typeof __propDef.slots}  DropdownMenuSlots */
export default class DropdownMenu extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DropdownMenuProps = typeof __propDef.props;
export type DropdownMenuEvents = typeof __propDef.events;
export type DropdownMenuSlots = typeof __propDef.slots;
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
