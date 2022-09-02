import { HTTP_Methods, Status } from "./enums";

export class IRequest {
    protected constructor() { }

    public static getStatusCode(type: keyof typeof Status): number {
        return Status[type];
    }

    public static getMethod(type: keyof typeof HTTP_Methods): string {
        return HTTP_Methods[type];
    }
}