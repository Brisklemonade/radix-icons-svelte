/** @typedef {typeof __propDef.props}  ContainerProps */
/** @typedef {typeof __propDef.events}  ContainerEvents */
/** @typedef {typeof __propDef.slots}  ContainerSlots */
export default class Container extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ContainerProps = typeof __propDef.props;
export type ContainerEvents = typeof __propDef.events;
export type ContainerSlots = typeof __propDef.slots;
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
