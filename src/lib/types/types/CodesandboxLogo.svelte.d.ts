/** @typedef {typeof __propDef.props}  CodesandboxLogoProps */
/** @typedef {typeof __propDef.events}  CodesandboxLogoEvents */
/** @typedef {typeof __propDef.slots}  CodesandboxLogoSlots */
export default class CodesandboxLogo extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CodesandboxLogoProps = typeof __propDef.props;
export type CodesandboxLogoEvents = typeof __propDef.events;
export type CodesandboxLogoSlots = typeof __propDef.slots;
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
