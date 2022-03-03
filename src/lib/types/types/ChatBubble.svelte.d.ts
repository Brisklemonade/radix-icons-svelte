/** @typedef {typeof __propDef.props}  ChatBubbleProps */
/** @typedef {typeof __propDef.events}  ChatBubbleEvents */
/** @typedef {typeof __propDef.slots}  ChatBubbleSlots */
export default class ChatBubble extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ChatBubbleProps = typeof __propDef.props;
export type ChatBubbleEvents = typeof __propDef.events;
export type ChatBubbleSlots = typeof __propDef.slots;
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
