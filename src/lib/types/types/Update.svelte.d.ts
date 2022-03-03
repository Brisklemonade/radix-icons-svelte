/** @typedef {typeof __propDef.props}  UpdateProps */
/** @typedef {typeof __propDef.events}  UpdateEvents */
/** @typedef {typeof __propDef.slots}  UpdateSlots */
export default class Update extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type UpdateProps = typeof __propDef.props;
export type UpdateEvents = typeof __propDef.events;
export type UpdateSlots = typeof __propDef.slots;
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
