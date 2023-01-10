export * from './IArray';
export * from './IString';
export * from './IObject';
export * from './IRequest';
export * from './JSONResponse';
export * from './enums';
export * from './types';

export const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));