/** @typedef {typeof __propDef.props}  SizeProps */
/** @typedef {typeof __propDef.events}  SizeEvents */
/** @typedef {typeof __propDef.slots}  SizeSlots */
export default class Size extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SizeProps = typeof __propDef.props;
export type SizeEvents = typeof __propDef.events;
export type SizeSlots = typeof __propDef.slots;
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
