/** @typedef {typeof __propDef.props}  EnterFullScreenProps */
/** @typedef {typeof __propDef.events}  EnterFullScreenEvents */
/** @typedef {typeof __propDef.slots}  EnterFullScreenSlots */
export default class EnterFullScreen extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EnterFullScreenProps = typeof __propDef.props;
export type EnterFullScreenEvents = typeof __propDef.events;
export type EnterFullScreenSlots = typeof __propDef.slots;
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
