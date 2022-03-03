/** @typedef {typeof __propDef.props}  FontItalicProps */
/** @typedef {typeof __propDef.events}  FontItalicEvents */
/** @typedef {typeof __propDef.slots}  FontItalicSlots */
export default class FontItalic extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FontItalicProps = typeof __propDef.props;
export type FontItalicEvents = typeof __propDef.events;
export type FontItalicSlots = typeof __propDef.slots;
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
