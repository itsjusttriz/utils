import { IArray, IObject, IRequest, IString, JSONResponse } from './src';

async function runExamples() {
    console.log(

        new IArray([1, 2, 3]).getRandom(),

        IObject.stringifyKeyValue({ name: 'IJT', age: 23, isOver18: true }),

        IRequest.getMethod('POST'),

        IString.isNumeric('10'),

        new JSONResponse().setCode(
            IRequest.getStatusCode('OK')
        ).setMessage(
            'This is a test.'
        ).setPayload(
            {
                success: true
            }
        )
    )
};
runExamples();