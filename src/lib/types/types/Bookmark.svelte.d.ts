/** @typedef {typeof __propDef.props}  BookmarkProps */
/** @typedef {typeof __propDef.events}  BookmarkEvents */
/** @typedef {typeof __propDef.slots}  BookmarkSlots */
export default class Bookmark extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BookmarkProps = typeof __propDef.props;
export type BookmarkEvents = typeof __propDef.events;
export type BookmarkSlots = typeof __propDef.slots;
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
