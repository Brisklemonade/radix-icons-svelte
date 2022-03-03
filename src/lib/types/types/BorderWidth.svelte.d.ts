/** @typedef {typeof __propDef.props}  BorderWidthProps */
/** @typedef {typeof __propDef.events}  BorderWidthEvents */
/** @typedef {typeof __propDef.slots}  BorderWidthSlots */
export default class BorderWidth extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BorderWidthProps = typeof __propDef.props;
export type BorderWidthEvents = typeof __propDef.events;
export type BorderWidthSlots = typeof __propDef.slots;
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
