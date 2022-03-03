/** @typedef {typeof __propDef.props}  SewingPinFilledProps */
/** @typedef {typeof __propDef.events}  SewingPinFilledEvents */
/** @typedef {typeof __propDef.slots}  SewingPinFilledSlots */
export default class SewingPinFilled extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SewingPinFilledProps = typeof __propDef.props;
export type SewingPinFilledEvents = typeof __propDef.events;
export type SewingPinFilledSlots = typeof __propDef.slots;
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
