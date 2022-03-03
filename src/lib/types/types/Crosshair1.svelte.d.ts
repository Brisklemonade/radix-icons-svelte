/** @typedef {typeof __propDef.props}  Crosshair1Props */
/** @typedef {typeof __propDef.events}  Crosshair1Events */
/** @typedef {typeof __propDef.slots}  Crosshair1Slots */
export default class Crosshair1 extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type Crosshair1Props = typeof __propDef.props;
export type Crosshair1Events = typeof __propDef.events;
export type Crosshair1Slots = typeof __propDef.slots;
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
