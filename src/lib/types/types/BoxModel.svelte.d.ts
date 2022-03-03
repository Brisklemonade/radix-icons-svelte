/** @typedef {typeof __propDef.props}  BoxModelProps */
/** @typedef {typeof __propDef.events}  BoxModelEvents */
/** @typedef {typeof __propDef.slots}  BoxModelSlots */
export default class BoxModel extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BoxModelProps = typeof __propDef.props;
export type BoxModelEvents = typeof __propDef.events;
export type BoxModelSlots = typeof __propDef.slots;
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
