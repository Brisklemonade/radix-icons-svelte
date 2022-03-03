/** @typedef {typeof __propDef.props}  VercelLogoProps */
/** @typedef {typeof __propDef.events}  VercelLogoEvents */
/** @typedef {typeof __propDef.slots}  VercelLogoSlots */
export default class VercelLogo extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type VercelLogoProps = typeof __propDef.props;
export type VercelLogoEvents = typeof __propDef.events;
export type VercelLogoSlots = typeof __propDef.slots;
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
