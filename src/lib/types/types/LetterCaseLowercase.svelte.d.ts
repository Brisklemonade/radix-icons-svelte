/** @typedef {typeof __propDef.props}  LetterCaseLowercaseProps */
/** @typedef {typeof __propDef.events}  LetterCaseLowercaseEvents */
/** @typedef {typeof __propDef.slots}  LetterCaseLowercaseSlots */
export default class LetterCaseLowercase extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LetterCaseLowercaseProps = typeof __propDef.props;
export type LetterCaseLowercaseEvents = typeof __propDef.events;
export type LetterCaseLowercaseSlots = typeof __propDef.slots;
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
