import { BasicArrayTuple, BasicObjectProps, StringOnlyObjectProps } from "./types";

export class IObject {

    protected constructor() { }

    public static stringifyKeyValue(obj: BasicObjectProps, exclude?: string[]): StringOnlyObjectProps {
        return Object.fromEntries(
            Object.entries(obj)
                .filter(([key, _]) => !exclude?.includes(key))
                .map(([key, value]) => [`${key}`, `${value}`])
        )
    }

    public static freeze(x: BasicObjectProps): BasicObjectProps {
        return JSON.parse(JSON.stringify(x));
    }

    public static map(obj: BasicObjectProps, fn: (x: BasicArrayTuple) => any): BasicObjectProps {
        return Object.fromEntries(Object.entries(obj).map(fn))
    }

    public static sanitiseKeys(obj: BasicObjectProps, exclude: string[]): BasicObjectProps {
        return Object.fromEntries(
            Object.entries(obj)
                .filter(([key, _]) => !exclude?.includes(key))
        )
    }
}