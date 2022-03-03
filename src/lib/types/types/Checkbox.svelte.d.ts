/** @typedef {typeof __propDef.props}  CheckboxProps */
/** @typedef {typeof __propDef.events}  CheckboxEvents */
/** @typedef {typeof __propDef.slots}  CheckboxSlots */
export default class Checkbox extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CheckboxProps = typeof __propDef.props;
export type CheckboxEvents = typeof __propDef.events;
export type CheckboxSlots = typeof __propDef.slots;
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
