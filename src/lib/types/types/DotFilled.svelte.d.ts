/** @typedef {typeof __propDef.props}  DotFilledProps */
/** @typedef {typeof __propDef.events}  DotFilledEvents */
/** @typedef {typeof __propDef.slots}  DotFilledSlots */
export default class DotFilled extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DotFilledProps = typeof __propDef.props;
export type DotFilledEvents = typeof __propDef.events;
export type DotFilledSlots = typeof __propDef.slots;
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
