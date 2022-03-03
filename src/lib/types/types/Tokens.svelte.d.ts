/** @typedef {typeof __propDef.props}  TokensProps */
/** @typedef {typeof __propDef.events}  TokensEvents */
/** @typedef {typeof __propDef.slots}  TokensSlots */
export default class Tokens extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TokensProps = typeof __propDef.props;
export type TokensEvents = typeof __propDef.events;
export type TokensSlots = typeof __propDef.slots;
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
