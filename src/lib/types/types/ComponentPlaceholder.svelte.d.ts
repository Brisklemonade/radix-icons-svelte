/** @typedef {typeof __propDef.props}  ComponentPlaceholderProps */
/** @typedef {typeof __propDef.events}  ComponentPlaceholderEvents */
/** @typedef {typeof __propDef.slots}  ComponentPlaceholderSlots */
export default class ComponentPlaceholder extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ComponentPlaceholderProps = typeof __propDef.props;
export type ComponentPlaceholderEvents = typeof __propDef.events;
export type ComponentPlaceholderSlots = typeof __propDef.slots;
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
