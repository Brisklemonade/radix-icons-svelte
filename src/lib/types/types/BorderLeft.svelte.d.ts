/** @typedef {typeof __propDef.props}  BorderLeftProps */
/** @typedef {typeof __propDef.events}  BorderLeftEvents */
/** @typedef {typeof __propDef.slots}  BorderLeftSlots */
export default class BorderLeft extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BorderLeftProps = typeof __propDef.props;
export type BorderLeftEvents = typeof __propDef.events;
export type BorderLeftSlots = typeof __propDef.slots;
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
