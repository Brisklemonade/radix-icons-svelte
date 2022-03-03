/** @typedef {typeof __propDef.props}  ExternalLinkProps */
/** @typedef {typeof __propDef.events}  ExternalLinkEvents */
/** @typedef {typeof __propDef.slots}  ExternalLinkSlots */
export default class ExternalLink extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ExternalLinkProps = typeof __propDef.props;
export type ExternalLinkEvents = typeof __propDef.events;
export type ExternalLinkSlots = typeof __propDef.slots;
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
