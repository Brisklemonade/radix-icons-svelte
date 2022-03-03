/** @typedef {typeof __propDef.props}  MixerVerticalProps */
/** @typedef {typeof __propDef.events}  MixerVerticalEvents */
/** @typedef {typeof __propDef.slots}  MixerVerticalSlots */
export default class MixerVertical extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MixerVerticalProps = typeof __propDef.props;
export type MixerVerticalEvents = typeof __propDef.events;
export type MixerVerticalSlots = typeof __propDef.slots;
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
