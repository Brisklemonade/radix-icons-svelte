/** @typedef {typeof __propDef.props}  GithubLogoProps */
/** @typedef {typeof __propDef.events}  GithubLogoEvents */
/** @typedef {typeof __propDef.slots}  GithubLogoSlots */
export default class GithubLogo extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type GithubLogoProps = typeof __propDef.props;
export type GithubLogoEvents = typeof __propDef.events;
export type GithubLogoSlots = typeof __propDef.slots;
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
