/** @typedef {typeof __propDef.props}  ModulzLogoProps */
/** @typedef {typeof __propDef.events}  ModulzLogoEvents */
/** @typedef {typeof __propDef.slots}  ModulzLogoSlots */
export default class ModulzLogo extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ModulzLogoProps = typeof __propDef.props;
export type ModulzLogoEvents = typeof __propDef.events;
export type ModulzLogoSlots = typeof __propDef.slots;
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
