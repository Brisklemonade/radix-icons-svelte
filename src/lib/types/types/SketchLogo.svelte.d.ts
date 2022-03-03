/** @typedef {typeof __propDef.props}  SketchLogoProps */
/** @typedef {typeof __propDef.events}  SketchLogoEvents */
/** @typedef {typeof __propDef.slots}  SketchLogoSlots */
export default class SketchLogo extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SketchLogoProps = typeof __propDef.props;
export type SketchLogoEvents = typeof __propDef.events;
export type SketchLogoSlots = typeof __propDef.slots;
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
