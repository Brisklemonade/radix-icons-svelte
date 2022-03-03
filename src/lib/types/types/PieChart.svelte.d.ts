/** @typedef {typeof __propDef.props}  PieChartProps */
/** @typedef {typeof __propDef.events}  PieChartEvents */
/** @typedef {typeof __propDef.slots}  PieChartSlots */
export default class PieChart extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    size?: number;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PieChartProps = typeof __propDef.props;
export type PieChartEvents = typeof __propDef.events;
export type PieChartSlots = typeof __propDef.slots;
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
