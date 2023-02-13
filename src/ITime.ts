import { BasicObjectProps } from "./types";

export class ITime {
    protected constructor() { }

    public static async getTimeUntil(time: number, includeWeeks: boolean) {
        let d = Math.max(time, 0);
        let t = this._seperateTime(d, includeWeeks);

        const obj = Object.keys(t).filter(i => t[i] !== 0)
        return { data: t, string: obj.map(x => `${t[x]} ${x}`).join(', ') }
    }

    public static async getTimeFrom(time: number, includeWeeks: boolean) {
        let d = Math.abs(time);
        let t = this._seperateTime(d, includeWeeks)

        const obj = Object.keys(t).filter(i => t[i] !== 0)
        return { data: t, string: obj.map(x => `${t[x]} ${x}`).join(', ') }
    }

    public static wait(ms: number): Promise<number> {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    private static _seperateTime(d: number, includeWeeks: boolean): BasicObjectProps {
        let weeks = 0;
        if (includeWeeks)
            weeks = Math.floor(d / 1000 / 60 / 60 / 24 / 7);

        let days = Math.floor(d / 1000 / 60 / 60 / 24 - weeks * 7);
        let hours = Math.floor(d / 1000 / 60 / 60 - weeks * 7 * 24 - days * 24);
        let minutes = Math.floor(d / 1000 / 60 - weeks * 7 * 24 * 60 - days * 24 * 60 - hours * 60);
        let seconds = Math.floor(d / 1000 - weeks * 7 * 24 * 60 * 60 - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60);

        let t: BasicObjectProps = {};
        ['weeks', 'days', 'hours', 'minutes', 'seconds'].forEach(q => t[q] = eval(q));

        return t;
    }
}