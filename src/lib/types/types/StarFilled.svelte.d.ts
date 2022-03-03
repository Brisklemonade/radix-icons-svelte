/** @typedef {typeof __propDef.props}  StarFilledProps */
/** @typedef {typeof __propDef.events}  StarFilledEvents */
/** @typedef {typeof __propDef.slots}  StarFilledSlots */
export default class StarFilled extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type StarFilledProps = typeof __propDef.props;
export type StarFilledEvents = typeof __propDef.events;
export type StarFilledSlots = typeof __propDef.slots;
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
