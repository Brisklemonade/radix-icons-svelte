/** @typedef {typeof __propDef.props}  MixerHorizontalProps */
/** @typedef {typeof __propDef.events}  MixerHorizontalEvents */
/** @typedef {typeof __propDef.slots}  MixerHorizontalSlots */
export default class MixerHorizontal extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MixerHorizontalProps = typeof __propDef.props;
export type MixerHorizontalEvents = typeof __propDef.events;
export type MixerHorizontalSlots = typeof __propDef.slots;
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
