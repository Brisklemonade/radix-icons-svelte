/** @typedef {typeof __propDef.props}  ExitFullScreenProps */
/** @typedef {typeof __propDef.events}  ExitFullScreenEvents */
/** @typedef {typeof __propDef.slots}  ExitFullScreenSlots */
export default class ExitFullScreen extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ExitFullScreenProps = typeof __propDef.props;
export type ExitFullScreenEvents = typeof __propDef.events;
export type ExitFullScreenSlots = typeof __propDef.slots;
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
