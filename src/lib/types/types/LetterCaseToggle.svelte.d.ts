/** @typedef {typeof __propDef.props}  LetterCaseToggleProps */
/** @typedef {typeof __propDef.events}  LetterCaseToggleEvents */
/** @typedef {typeof __propDef.slots}  LetterCaseToggleSlots */
export default class LetterCaseToggle extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LetterCaseToggleProps = typeof __propDef.props;
export type LetterCaseToggleEvents = typeof __propDef.events;
export type LetterCaseToggleSlots = typeof __propDef.slots;
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
