/** @typedef {typeof __propDef.props}  SewingPinProps */
/** @typedef {typeof __propDef.events}  SewingPinEvents */
/** @typedef {typeof __propDef.slots}  SewingPinSlots */
export default class SewingPin extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SewingPinProps = typeof __propDef.props;
export type SewingPinEvents = typeof __propDef.events;
export type SewingPinSlots = typeof __propDef.slots;
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
