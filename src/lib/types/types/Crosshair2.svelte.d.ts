/** @typedef {typeof __propDef.props}  Crosshair2Props */
/** @typedef {typeof __propDef.events}  Crosshair2Events */
/** @typedef {typeof __propDef.slots}  Crosshair2Slots */
export default class Crosshair2 extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type Crosshair2Props = typeof __propDef.props;
export type Crosshair2Events = typeof __propDef.events;
export type Crosshair2Slots = typeof __propDef.slots;
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
