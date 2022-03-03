/** @typedef {typeof __propDef.props}  LetterSpacingProps */
/** @typedef {typeof __propDef.events}  LetterSpacingEvents */
/** @typedef {typeof __propDef.slots}  LetterSpacingSlots */
export default class LetterSpacing extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LetterSpacingProps = typeof __propDef.props;
export type LetterSpacingEvents = typeof __propDef.events;
export type LetterSpacingSlots = typeof __propDef.slots;
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
