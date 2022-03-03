/** @typedef {typeof __propDef.props}  CardStackProps */
/** @typedef {typeof __propDef.events}  CardStackEvents */
/** @typedef {typeof __propDef.slots}  CardStackSlots */
export default class CardStack extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CardStackProps = typeof __propDef.props;
export type CardStackEvents = typeof __propDef.events;
export type CardStackSlots = typeof __propDef.slots;
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
