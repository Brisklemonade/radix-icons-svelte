/** @typedef {typeof __propDef.props}  HobbyKnifeProps */
/** @typedef {typeof __propDef.events}  HobbyKnifeEvents */
/** @typedef {typeof __propDef.slots}  HobbyKnifeSlots */
export default class HobbyKnife extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type HobbyKnifeProps = typeof __propDef.props;
export type HobbyKnifeEvents = typeof __propDef.events;
export type HobbyKnifeSlots = typeof __propDef.slots;
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
