/** @typedef {typeof __propDef.props}  BorderSolidProps */
/** @typedef {typeof __propDef.events}  BorderSolidEvents */
/** @typedef {typeof __propDef.slots}  BorderSolidSlots */
export default class BorderSolid extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BorderSolidProps = typeof __propDef.props;
export type BorderSolidEvents = typeof __propDef.events;
export type BorderSolidSlots = typeof __propDef.slots;
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
