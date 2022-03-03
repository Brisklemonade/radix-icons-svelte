/** @typedef {typeof __propDef.props}  RocketProps */
/** @typedef {typeof __propDef.events}  RocketEvents */
/** @typedef {typeof __propDef.slots}  RocketSlots */
export default class Rocket extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type RocketProps = typeof __propDef.props;
export type RocketEvents = typeof __propDef.events;
export type RocketSlots = typeof __propDef.slots;
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
