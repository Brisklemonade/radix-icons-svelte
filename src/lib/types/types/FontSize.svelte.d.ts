/** @typedef {typeof __propDef.props}  FontSizeProps */
/** @typedef {typeof __propDef.events}  FontSizeEvents */
/** @typedef {typeof __propDef.slots}  FontSizeSlots */
export default class FontSize extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FontSizeProps = typeof __propDef.props;
export type FontSizeEvents = typeof __propDef.events;
export type FontSizeSlots = typeof __propDef.slots;
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
