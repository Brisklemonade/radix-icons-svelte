/** @typedef {typeof __propDef.props}  LightningBoltProps */
/** @typedef {typeof __propDef.events}  LightningBoltEvents */
/** @typedef {typeof __propDef.slots}  LightningBoltSlots */
export default class LightningBolt extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LightningBoltProps = typeof __propDef.props;
export type LightningBoltEvents = typeof __propDef.events;
export type LightningBoltSlots = typeof __propDef.slots;
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
