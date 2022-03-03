/** @typedef {typeof __propDef.props}  LetterCaseUppercaseProps */
/** @typedef {typeof __propDef.events}  LetterCaseUppercaseEvents */
/** @typedef {typeof __propDef.slots}  LetterCaseUppercaseSlots */
export default class LetterCaseUppercase extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LetterCaseUppercaseProps = typeof __propDef.props;
export type LetterCaseUppercaseEvents = typeof __propDef.events;
export type LetterCaseUppercaseSlots = typeof __propDef.slots;
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
