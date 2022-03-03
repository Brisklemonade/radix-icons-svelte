/** @typedef {typeof __propDef.props}  CameraProps */
/** @typedef {typeof __propDef.events}  CameraEvents */
/** @typedef {typeof __propDef.slots}  CameraSlots */
export default class Camera extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CameraProps = typeof __propDef.props;
export type CameraEvents = typeof __propDef.events;
export type CameraSlots = typeof __propDef.slots;
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
