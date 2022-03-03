/** @typedef {typeof __propDef.props}  FigmaLogoProps */
/** @typedef {typeof __propDef.events}  FigmaLogoEvents */
/** @typedef {typeof __propDef.slots}  FigmaLogoSlots */
export default class FigmaLogo extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FigmaLogoProps = typeof __propDef.props;
export type FigmaLogoEvents = typeof __propDef.events;
export type FigmaLogoSlots = typeof __propDef.slots;
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
