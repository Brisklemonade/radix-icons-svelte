/** @typedef {typeof __propDef.props}  DashboardProps */
/** @typedef {typeof __propDef.events}  DashboardEvents */
/** @typedef {typeof __propDef.slots}  DashboardSlots */
export default class Dashboard extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DashboardProps = typeof __propDef.props;
export type DashboardEvents = typeof __propDef.events;
export type DashboardSlots = typeof __propDef.slots;
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
