import { BasicObjectProps, BasicStringifiedObjectProps } from "./types";

export class IObject {

    private constructor() { }

    public static stringifyKeyValue(obj: BasicObjectProps, exclude?: string[]): BasicStringifiedObjectProps {
        return Object.fromEntries(
            Object.entries(obj)
                .filter(([key, _]) => !exclude?.includes(key))
                .map(([key, value]) => [`${key}`, `${value}`])
        )
    }

    public static freeze(x: BasicObjectProps): BasicObjectProps {
        return JSON.parse(JSON.stringify(x));
    }
}