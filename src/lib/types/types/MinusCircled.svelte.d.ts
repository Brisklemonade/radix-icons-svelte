/** @typedef {typeof __propDef.props}  MinusCircledProps */
/** @typedef {typeof __propDef.events}  MinusCircledEvents */
/** @typedef {typeof __propDef.slots}  MinusCircledSlots */
export default class MinusCircled extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MinusCircledProps = typeof __propDef.props;
export type MinusCircledEvents = typeof __propDef.events;
export type MinusCircledSlots = typeof __propDef.slots;
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
