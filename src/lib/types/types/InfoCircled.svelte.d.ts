/** @typedef {typeof __propDef.props}  InfoCircledProps */
/** @typedef {typeof __propDef.events}  InfoCircledEvents */
/** @typedef {typeof __propDef.slots}  InfoCircledSlots */
export default class InfoCircled extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type InfoCircledProps = typeof __propDef.props;
export type InfoCircledEvents = typeof __propDef.events;
export type InfoCircledSlots = typeof __propDef.slots;
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
