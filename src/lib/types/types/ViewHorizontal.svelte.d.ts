/** @typedef {typeof __propDef.props}  ViewHorizontalProps */
/** @typedef {typeof __propDef.events}  ViewHorizontalEvents */
/** @typedef {typeof __propDef.slots}  ViewHorizontalSlots */
export default class ViewHorizontal extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ViewHorizontalProps = typeof __propDef.props;
export type ViewHorizontalEvents = typeof __propDef.events;
export type ViewHorizontalSlots = typeof __propDef.slots;
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
