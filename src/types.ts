export type BasicObjectProps = {
    [key: string]: any;
}

export type StringOnlyObjectProps = {
    [key: string]: string
}

export type JsonResponseType = {
    code: number,
    message: string,
    payload?: BasicObjectProps[] | BasicObjectProps
}

export const mongoose = {
    REQUIRED_STRING: {
        type: String,
        required: true
    },
    NOT_REQUIRED_STRING: {
        type: String,
        required: false
    }
}