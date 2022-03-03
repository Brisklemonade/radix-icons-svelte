/** @typedef {typeof __propDef.props}  MobileProps */
/** @typedef {typeof __propDef.events}  MobileEvents */
/** @typedef {typeof __propDef.slots}  MobileSlots */
export default class Mobile extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MobileProps = typeof __propDef.props;
export type MobileEvents = typeof __propDef.events;
export type MobileSlots = typeof __propDef.slots;
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
