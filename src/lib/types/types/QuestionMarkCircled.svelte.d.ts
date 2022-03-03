/** @typedef {typeof __propDef.props}  QuestionMarkCircledProps */
/** @typedef {typeof __propDef.events}  QuestionMarkCircledEvents */
/** @typedef {typeof __propDef.slots}  QuestionMarkCircledSlots */
export default class QuestionMarkCircled extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type QuestionMarkCircledProps = typeof __propDef.props;
export type QuestionMarkCircledEvents = typeof __propDef.events;
export type QuestionMarkCircledSlots = typeof __propDef.slots;
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
