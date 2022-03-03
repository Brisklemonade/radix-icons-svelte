/** @typedef {typeof __propDef.props}  CheckCircledProps */
/** @typedef {typeof __propDef.events}  CheckCircledEvents */
/** @typedef {typeof __propDef.slots}  CheckCircledSlots */
export default class CheckCircled extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CheckCircledProps = typeof __propDef.props;
export type CheckCircledEvents = typeof __propDef.events;
export type CheckCircledSlots = typeof __propDef.slots;
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
