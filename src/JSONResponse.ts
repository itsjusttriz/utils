import { IRequest } from "./IRequest";
import { BasicObjectProps, JsonResponseType } from "./types";

export class JSONResponse extends IRequest {

    private code: number | undefined;
    private message: string | undefined;
    private payload?: BasicObjectProps[] | BasicObjectProps | undefined;

    constructor(
        obj?: JsonResponseType
    ) {
        super();
        this.code = obj?.code;
        this.message = obj?.message;
        this.payload = obj?.payload;
    };

    public getCode(): number | undefined {
        return this.code;
    }

    public setCode(value: number | undefined) {
        this.code = value;
        return this;
    }

    public getMessage(): string | undefined {
        return this.message;
    }
    public setMessage(value: string | undefined) {
        this.message = value;
        return this;
    }

    public getPayload(): BasicObjectProps[] | BasicObjectProps | undefined {
        return this.payload;
    }
    public setPayload(value: BasicObjectProps[] | BasicObjectProps | undefined) {
        this.payload = value;
        return this;
    }
}