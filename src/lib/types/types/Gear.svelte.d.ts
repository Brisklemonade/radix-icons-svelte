/** @typedef {typeof __propDef.props}  GearProps */
/** @typedef {typeof __propDef.events}  GearEvents */
/** @typedef {typeof __propDef.slots}  GearSlots */
export default class Gear extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type GearProps = typeof __propDef.props;
export type GearEvents = typeof __propDef.events;
export type GearSlots = typeof __propDef.slots;
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
