/** @typedef {typeof __propDef.props}  ActivityLogProps */
/** @typedef {typeof __propDef.events}  ActivityLogEvents */
/** @typedef {typeof __propDef.slots}  ActivityLogSlots */
export default class ActivityLog extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ActivityLogProps = typeof __propDef.props;
export type ActivityLogEvents = typeof __propDef.events;
export type ActivityLogSlots = typeof __propDef.slots;
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
