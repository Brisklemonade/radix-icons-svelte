/** @typedef {typeof __propDef.props}  DownloadProps */
/** @typedef {typeof __propDef.events}  DownloadEvents */
/** @typedef {typeof __propDef.slots}  DownloadSlots */
export default class Download extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DownloadProps = typeof __propDef.props;
export type DownloadEvents = typeof __propDef.events;
export type DownloadSlots = typeof __propDef.slots;
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
