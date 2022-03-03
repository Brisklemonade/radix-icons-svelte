/** @typedef {typeof __propDef.props}  CaretDownProps */
/** @typedef {typeof __propDef.events}  CaretDownEvents */
/** @typedef {typeof __propDef.slots}  CaretDownSlots */
export default class CaretDown extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CaretDownProps = typeof __propDef.props;
export type CaretDownEvents = typeof __propDef.events;
export type CaretDownSlots = typeof __propDef.slots;
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
