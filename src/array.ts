import { Macroable, Arrayable, EventsInterface } from 'ts-contracts';

type ArrayType = number | string | object | any;
    
export default class Arr<T> implements Arrayable {
    /**
     * Counter of array;
     *
     * @type {number}
     */
    private counter: number = 0;

    /**
     * {@inheritdoc}
     */
    private items: Array<ArrayType> = [];

    /**
     * Constructor
     * 
     * @param {array} items
     */
    public constructor(items: Array<ArrayType>) {
        this.items = items;
    }

    /**
     * {@inheritdoc}
     */
    public min(): number {
        return Math.min(...this.items);
    }

    /**
     * {@inheritdoc}
     */
    public max(): number {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public avg(): number {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public average(): number {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public merge(...arrays: any[][]): Arrayable {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public concat(...arrays: any[][]): Arrayable {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public unique(): Arrayable {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public shift(...items: any[]): Arrayable {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public unshift() {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public push(...items: any[]): Arrayable {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public pushOnce(...items: any[]): Arrayable {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public pop() {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public end() {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public remove(value: any): Arrayable {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public removeAll(value: any): Arrayable {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public first(callback?: Function | undefined) {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public includes(value: any): boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public toArray(): any[] {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public map(callback: Function): Arrayable {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public forEach(callback: Function): void {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public filter(callback: Function): Arrayable {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public sort(callback?: Function | undefined): Arrayable {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public sortBy(key: string): Arrayable {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public sortByDesc(key: string): Arrayable {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public reduce(callback: Function, initialValue: any) {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public chunk(size: number): Arrayable {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public clone(): Arrayable {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public reverse(): Arrayable {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public key(value: any): number {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public indexOf(value: any): number {
        return this.items.indexOf(value);
    }

    /**
     * {@inheritdoc}
     */
    public lastIndexOf(value: any): number {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public isEmpty(): boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public isNotEmpty(): boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public random() {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public replace(oldValue: any, newValue: any): Arrayable {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public replaceAll(oldValue: any, newValue: any): Arrayable {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public shuffle(): Arrayable {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public slice(begin?: number | undefined, end?: number | undefined): Arrayable {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public splice(start: number, deleteCount?: number | undefined, ...items: any[]): Arrayable {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public some(callback: Function): boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public every(callback: Function): boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public unset(...keys: number[]): number {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public on(event: string | string[], callback: Function): EventsInterface {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public once(event: string | string[], callback: Function): EventsInterface {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public subscribe(event: string | string[], callback: Function): EventsInterface {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public trigger(event: string | string[], ...values: any[]): EventsInterface {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public emit(event: string | string[], ...values: any[]): EventsInterface {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    public off(event: string | string[]): EventsInterface {
        throw new Error("Method not implemented.");
    }

    /**
     * {@inheritdoc}
     */
    macro(methodName: string, callback: Function): Macroable {
        throw new Error("Method not implemented.");
    }
    
    /**
     * {@inheritdoc}
     */
    public get length(): number {
        return this.items.length;
    }
    
    /**
     * {@inheritdoc}
     */
    public [Symbol.iterator](): Iterator<ArrayType> {
        return {
            next: (): IteratorResult<ArrayType> => {
                return {
                    done: this.length == this.counter,
                    value: this.items[this.counter++],
                }
            },
        };
    }
}