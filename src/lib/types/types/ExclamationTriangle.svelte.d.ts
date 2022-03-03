/** @typedef {typeof __propDef.props}  ExclamationTriangleProps */
/** @typedef {typeof __propDef.events}  ExclamationTriangleEvents */
/** @typedef {typeof __propDef.slots}  ExclamationTriangleSlots */
export default class ExclamationTriangle extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ExclamationTriangleProps = typeof __propDef.props;
export type ExclamationTriangleEvents = typeof __propDef.events;
export type ExclamationTriangleSlots = typeof __propDef.slots;
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
