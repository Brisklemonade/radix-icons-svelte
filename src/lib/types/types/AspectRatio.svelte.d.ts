/** @typedef {typeof __propDef.props}  AspectRatioProps */
/** @typedef {typeof __propDef.events}  AspectRatioEvents */
/** @typedef {typeof __propDef.slots}  AspectRatioSlots */
export default class AspectRatio extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AspectRatioProps = typeof __propDef.props;
export type AspectRatioEvents = typeof __propDef.events;
export type AspectRatioSlots = typeof __propDef.slots;
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
