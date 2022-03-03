/** @typedef {typeof __propDef.props}  HeightProps */
/** @typedef {typeof __propDef.events}  HeightEvents */
/** @typedef {typeof __propDef.slots}  HeightSlots */
export default class Height extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type HeightProps = typeof __propDef.props;
export type HeightEvents = typeof __propDef.events;
export type HeightSlots = typeof __propDef.slots;
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
