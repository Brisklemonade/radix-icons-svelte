/** @typedef {typeof __propDef.props}  CaretUpProps */
/** @typedef {typeof __propDef.events}  CaretUpEvents */
/** @typedef {typeof __propDef.slots}  CaretUpSlots */
export default class CaretUp extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CaretUpProps = typeof __propDef.props;
export type CaretUpEvents = typeof __propDef.events;
export type CaretUpSlots = typeof __propDef.slots;
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
