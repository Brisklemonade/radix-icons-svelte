/** @typedef {typeof __propDef.props}  FaceProps */
/** @typedef {typeof __propDef.events}  FaceEvents */
/** @typedef {typeof __propDef.slots}  FaceSlots */
export default class Face extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FaceProps = typeof __propDef.props;
export type FaceEvents = typeof __propDef.events;
export type FaceSlots = typeof __propDef.slots;
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
