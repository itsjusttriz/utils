export type BasicObjectProps = {
    [key: string]: any;
}

export type StringOnlyObjectProps = {
    [key: string]: string
}

export type BasicArrayTuple = [key: string, val: any];

export type JsonResponseType = {
    code: number,
    message: string,
    payload?: BasicObjectProps[] | BasicObjectProps
}