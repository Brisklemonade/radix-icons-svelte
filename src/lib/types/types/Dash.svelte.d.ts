/** @typedef {typeof __propDef.props}  DashProps */
/** @typedef {typeof __propDef.events}  DashEvents */
/** @typedef {typeof __propDef.slots}  DashSlots */
export default class Dash extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DashProps = typeof __propDef.props;
export type DashEvents = typeof __propDef.events;
export type DashSlots = typeof __propDef.slots;
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
