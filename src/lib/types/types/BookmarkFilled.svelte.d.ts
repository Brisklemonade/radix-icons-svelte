/** @typedef {typeof __propDef.props}  BookmarkFilledProps */
/** @typedef {typeof __propDef.events}  BookmarkFilledEvents */
/** @typedef {typeof __propDef.slots}  BookmarkFilledSlots */
export default class BookmarkFilled extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BookmarkFilledProps = typeof __propDef.props;
export type BookmarkFilledEvents = typeof __propDef.events;
export type BookmarkFilledSlots = typeof __propDef.slots;
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
