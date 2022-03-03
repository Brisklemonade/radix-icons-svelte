/** @typedef {typeof __propDef.props}  SectionProps */
/** @typedef {typeof __propDef.events}  SectionEvents */
/** @typedef {typeof __propDef.slots}  SectionSlots */
export default class Section extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SectionProps = typeof __propDef.props;
export type SectionEvents = typeof __propDef.events;
export type SectionSlots = typeof __propDef.slots;
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
