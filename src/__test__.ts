import { IArray, IObject, IRequest, IString, JSONResponse, ITime } from '.';

async function runExamples() {
    const arr = [1, 2, 3, 4, 5, 6];
    const WAIT_TIME = 3 * 1000;

    ITime.wait(WAIT_TIME).then(() => console.log("Finished Waiting."))


    console.log({

        array_random: new IArray(arr).getRandom(),
        array_first: new IArray(arr).getFirst(),
        array_last: new IArray(arr).getLast(),

        objStringifyKeyVal: IObject.stringifyKeyValue({ name: 'IJT', age: 23, isOver18: true }),
        objMap: IObject.map({ age: 10 }, ([key, val]) => [key, val * 2]),

        reqGetMethod: IRequest.getMethod('POST'),

        stringIsNumeric: IString.isNumeric('10'),

        json_resp: new JSONResponse().setCode(
            IRequest.getStatusCode('OK')
        ).setMessage(
            'This is a test.'
        ).setPayload({
            success: true
        })
    })
};
runExamples();