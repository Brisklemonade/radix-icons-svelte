/** @typedef {typeof __propDef.props}  QuestionMarkProps */
/** @typedef {typeof __propDef.events}  QuestionMarkEvents */
/** @typedef {typeof __propDef.slots}  QuestionMarkSlots */
export default class QuestionMark extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type QuestionMarkProps = typeof __propDef.props;
export type QuestionMarkEvents = typeof __propDef.events;
export type QuestionMarkSlots = typeof __propDef.slots;
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
