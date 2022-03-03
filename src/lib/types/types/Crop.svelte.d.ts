/** @typedef {typeof __propDef.props}  CropProps */
/** @typedef {typeof __propDef.events}  CropEvents */
/** @typedef {typeof __propDef.slots}  CropSlots */
export default class Crop extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CropProps = typeof __propDef.props;
export type CropEvents = typeof __propDef.events;
export type CropSlots = typeof __propDef.slots;
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
