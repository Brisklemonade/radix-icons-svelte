/** @typedef {typeof __propDef.props}  CaretLeftProps */
/** @typedef {typeof __propDef.events}  CaretLeftEvents */
/** @typedef {typeof __propDef.slots}  CaretLeftSlots */
export default class CaretLeft extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CaretLeftProps = typeof __propDef.props;
export type CaretLeftEvents = typeof __propDef.events;
export type CaretLeftSlots = typeof __propDef.slots;
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
