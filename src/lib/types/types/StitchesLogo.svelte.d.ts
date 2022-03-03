/** @typedef {typeof __propDef.props}  StitchesLogoProps */
/** @typedef {typeof __propDef.events}  StitchesLogoEvents */
/** @typedef {typeof __propDef.slots}  StitchesLogoSlots */
export default class StitchesLogo extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type StitchesLogoProps = typeof __propDef.props;
export type StitchesLogoEvents = typeof __propDef.events;
export type StitchesLogoSlots = typeof __propDef.slots;
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
