/** @typedef {typeof __propDef.props}  FontBoldProps */
/** @typedef {typeof __propDef.events}  FontBoldEvents */
/** @typedef {typeof __propDef.slots}  FontBoldSlots */
export default class FontBold extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FontBoldProps = typeof __propDef.props;
export type FontBoldEvents = typeof __propDef.events;
export type FontBoldSlots = typeof __propDef.slots;
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
