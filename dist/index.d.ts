declare type comparatorFunction = (...args: any[]) => boolean;
declare type mutFunction = (...args: any[]) => any;
declare class ArraySlice<T> {
    [index: string]: T | T[] | number | ThisType<T>;
    array: T[];
    start: number;
    end: number;
    length: number;
    first: T;
    last: T;
    constructor(array: T[], start: number, end: number);
    copyWithin(relativeTarget: number, relativeStart?: number, relativeEnd?: number): this;
    fill(value: any): this;
    mutmap(appliedFunction: mutFunction): this;
    reverse(): this;
    set(array: any[]): this;
    sort(compareFunction?: comparatorFunction): this;
    subarray(): T[];
}
export = ArraySlice;
