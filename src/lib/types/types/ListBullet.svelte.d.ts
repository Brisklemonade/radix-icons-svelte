/** @typedef {typeof __propDef.props}  ListBulletProps */
/** @typedef {typeof __propDef.events}  ListBulletEvents */
/** @typedef {typeof __propDef.slots}  ListBulletSlots */
export default class ListBullet extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ListBulletProps = typeof __propDef.props;
export type ListBulletEvents = typeof __propDef.events;
export type ListBulletSlots = typeof __propDef.slots;
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
