/** @typedef {typeof __propDef.props}  MagicWandProps */
/** @typedef {typeof __propDef.events}  MagicWandEvents */
/** @typedef {typeof __propDef.slots}  MagicWandSlots */
export default class MagicWand extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MagicWandProps = typeof __propDef.props;
export type MagicWandEvents = typeof __propDef.events;
export type MagicWandSlots = typeof __propDef.slots;
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
