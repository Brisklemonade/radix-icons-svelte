/** @typedef {typeof __propDef.props}  NotionLogoProps */
/** @typedef {typeof __propDef.events}  NotionLogoEvents */
/** @typedef {typeof __propDef.slots}  NotionLogoSlots */
export default class NotionLogo extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type NotionLogoProps = typeof __propDef.props;
export type NotionLogoEvents = typeof __propDef.events;
export type NotionLogoSlots = typeof __propDef.slots;
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
