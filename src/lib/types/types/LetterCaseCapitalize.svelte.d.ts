/** @typedef {typeof __propDef.props}  LetterCaseCapitalizeProps */
/** @typedef {typeof __propDef.events}  LetterCaseCapitalizeEvents */
/** @typedef {typeof __propDef.slots}  LetterCaseCapitalizeSlots */
export default class LetterCaseCapitalize extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LetterCaseCapitalizeProps = typeof __propDef.props;
export type LetterCaseCapitalizeEvents = typeof __propDef.events;
export type LetterCaseCapitalizeSlots = typeof __propDef.slots;
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
