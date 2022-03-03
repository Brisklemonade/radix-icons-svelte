/** @typedef {typeof __propDef.props}  OpenInNewWindowProps */
/** @typedef {typeof __propDef.events}  OpenInNewWindowEvents */
/** @typedef {typeof __propDef.slots}  OpenInNewWindowSlots */
export default class OpenInNewWindow extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type OpenInNewWindowProps = typeof __propDef.props;
export type OpenInNewWindowEvents = typeof __propDef.events;
export type OpenInNewWindowSlots = typeof __propDef.slots;
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
