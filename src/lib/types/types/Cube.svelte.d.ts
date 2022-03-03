/** @typedef {typeof __propDef.props}  CubeProps */
/** @typedef {typeof __propDef.events}  CubeEvents */
/** @typedef {typeof __propDef.slots}  CubeSlots */
export default class Cube extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CubeProps = typeof __propDef.props;
export type CubeEvents = typeof __propDef.events;
export type CubeSlots = typeof __propDef.slots;
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
