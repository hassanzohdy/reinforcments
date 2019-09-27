import { Macroable, Arrayable, EventsInterface } from 'ts-contracts';
declare type ArrayType = number | string | object | any;
export default class Arr<T> implements Arrayable {
    /**
     * Counter of array;
     *
     * @type {number}
     */
    private counter;
    /**
     * {@inheritdoc}
     */
    private items;
    /**
     * Constructor
     *
     * @param {array} items
     */
    constructor(items: Array<ArrayType>);
    /**
     * {@inheritdoc}
     */
    min(): number;
    /**
     * {@inheritdoc}
     */
    max(): number;
    /**
     * {@inheritdoc}
     */
    avg(): number;
    /**
     * {@inheritdoc}
     */
    average(): number;
    /**
     * {@inheritdoc}
     */
    merge(...arrays: any[][]): Arrayable;
    /**
     * {@inheritdoc}
     */
    concat(...arrays: any[][]): Arrayable;
    /**
     * {@inheritdoc}
     */
    unique(): Arrayable;
    /**
     * {@inheritdoc}
     */
    shift(...items: any[]): Arrayable;
    /**
     * {@inheritdoc}
     */
    unshift(): void;
    /**
     * {@inheritdoc}
     */
    push(...items: any[]): Arrayable;
    /**
     * {@inheritdoc}
     */
    pushOnce(...items: any[]): Arrayable;
    /**
     * {@inheritdoc}
     */
    pop(): void;
    /**
     * {@inheritdoc}
     */
    end(): void;
    /**
     * {@inheritdoc}
     */
    remove(value: any): Arrayable;
    /**
     * {@inheritdoc}
     */
    removeAll(value: any): Arrayable;
    /**
     * {@inheritdoc}
     */
    first(callback?: Function | undefined): void;
    /**
     * {@inheritdoc}
     */
    includes(value: any): boolean;
    /**
     * {@inheritdoc}
     */
    toArray(): any[];
    /**
     * {@inheritdoc}
     */
    map(callback: Function): Arrayable;
    /**
     * {@inheritdoc}
     */
    forEach(callback: Function): void;
    /**
     * {@inheritdoc}
     */
    filter(callback: Function): Arrayable;
    /**
     * {@inheritdoc}
     */
    sort(callback?: Function | undefined): Arrayable;
    /**
     * {@inheritdoc}
     */
    sortBy(key: string): Arrayable;
    /**
     * {@inheritdoc}
     */
    sortByDesc(key: string): Arrayable;
    /**
     * {@inheritdoc}
     */
    reduce(callback: Function, initialValue: any): void;
    /**
     * {@inheritdoc}
     */
    chunk(size: number): Arrayable;
    /**
     * {@inheritdoc}
     */
    clone(): Arrayable;
    /**
     * {@inheritdoc}
     */
    reverse(): Arrayable;
    /**
     * {@inheritdoc}
     */
    key(value: any): number;
    /**
     * {@inheritdoc}
     */
    indexOf(value: any): number;
    /**
     * {@inheritdoc}
     */
    lastIndexOf(value: any): number;
    /**
     * {@inheritdoc}
     */
    isEmpty(): boolean;
    /**
     * {@inheritdoc}
     */
    isNotEmpty(): boolean;
    /**
     * {@inheritdoc}
     */
    random(): void;
    /**
     * {@inheritdoc}
     */
    replace(oldValue: any, newValue: any): Arrayable;
    /**
     * {@inheritdoc}
     */
    replaceAll(oldValue: any, newValue: any): Arrayable;
    /**
     * {@inheritdoc}
     */
    shuffle(): Arrayable;
    /**
     * {@inheritdoc}
     */
    slice(begin?: number | undefined, end?: number | undefined): Arrayable;
    /**
     * {@inheritdoc}
     */
    splice(start: number, deleteCount?: number | undefined, ...items: any[]): Arrayable;
    /**
     * {@inheritdoc}
     */
    some(callback: Function): boolean;
    /**
     * {@inheritdoc}
     */
    every(callback: Function): boolean;
    /**
     * {@inheritdoc}
     */
    unset(...keys: number[]): number;
    /**
     * {@inheritdoc}
     */
    on(event: string | string[], callback: Function): EventsInterface;
    /**
     * {@inheritdoc}
     */
    once(event: string | string[], callback: Function): EventsInterface;
    /**
     * {@inheritdoc}
     */
    subscribe(event: string | string[], callback: Function): EventsInterface;
    /**
     * {@inheritdoc}
     */
    trigger(event: string | string[], ...values: any[]): EventsInterface;
    /**
     * {@inheritdoc}
     */
    emit(event: string | string[], ...values: any[]): EventsInterface;
    /**
     * {@inheritdoc}
     */
    off(event: string | string[]): EventsInterface;
    /**
     * {@inheritdoc}
     */
    macro(methodName: string, callback: Function): Macroable;
    /**
     * {@inheritdoc}
     */
    readonly length: number;
    /**
     * {@inheritdoc}
     */
    [Symbol.iterator](): Iterator<ArrayType>;
}
export {};
//# sourceMappingURL=array.d.ts.map