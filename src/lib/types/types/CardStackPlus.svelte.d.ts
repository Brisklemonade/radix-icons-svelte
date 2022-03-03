/** @typedef {typeof __propDef.props}  CardStackPlusProps */
/** @typedef {typeof __propDef.events}  CardStackPlusEvents */
/** @typedef {typeof __propDef.slots}  CardStackPlusSlots */
export default class CardStackPlus extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CardStackPlusProps = typeof __propDef.props;
export type CardStackPlusEvents = typeof __propDef.events;
export type CardStackPlusSlots = typeof __propDef.slots;
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
