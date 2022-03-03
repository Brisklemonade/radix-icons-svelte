/** @typedef {typeof __propDef.props}  HeartFilledProps */
/** @typedef {typeof __propDef.events}  HeartFilledEvents */
/** @typedef {typeof __propDef.slots}  HeartFilledSlots */
export default class HeartFilled extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type HeartFilledProps = typeof __propDef.props;
export type HeartFilledEvents = typeof __propDef.events;
export type HeartFilledSlots = typeof __propDef.slots;
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
