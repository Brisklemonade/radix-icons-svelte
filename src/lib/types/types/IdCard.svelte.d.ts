/** @typedef {typeof __propDef.props}  IdCardProps */
/** @typedef {typeof __propDef.events}  IdCardEvents */
/** @typedef {typeof __propDef.slots}  IdCardSlots */
export default class IdCard extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IdCardProps = typeof __propDef.props;
export type IdCardEvents = typeof __propDef.events;
export type IdCardSlots = typeof __propDef.slots;
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
