/** @typedef {typeof __propDef.props}  HomeProps */
/** @typedef {typeof __propDef.events}  HomeEvents */
/** @typedef {typeof __propDef.slots}  HomeSlots */
export default class Home extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type HomeProps = typeof __propDef.props;
export type HomeEvents = typeof __propDef.events;
export type HomeSlots = typeof __propDef.slots;
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
