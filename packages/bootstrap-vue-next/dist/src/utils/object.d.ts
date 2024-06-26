/**
 * Removes properties from an object, based on the values in an array, and returns the new object.
 * Equivalent to an object version of TS Omit<>
 */
export declare const omit: <A extends Record<PropertyKey, unknown>, const B extends readonly PropertyKey[]>(objToPluck: Readonly<A>, keysToPluck: Readonly<B> | readonly (keyof A)[]) => Omit<A, B[number]>;
/**
 * Picks properties from an object, base on the values in an array, and returns the new object.
 * Equivalent to an object version of TS Pick<>
 */
export declare const pick: <A extends Record<PropertyKey, unknown>, const B extends readonly PropertyKey[]>(objToPluck: Readonly<A>, keysToPluck: Readonly<B> | readonly (keyof A)[]) => Pick<A, B[number]>;
/**
 * Dynamically get a nested value from an array or
 * object with a string.
 *
 * @example get(person, 'friends[0].name')
 *
 * Thanks to
 * @link https://github.com/rayepps/radash/blob/master/src/object.ts#L214
 */
export declare const get: <TDefault = unknown>(value: any, path: string, defaultValue?: Readonly<TDefault>) => TDefault;
/**
 * Opposite of get, dynamically set a nested value into
 * an object using a key path. Does not modify the given
 * initial object.
 *
 * @example
 * set({}, 'name', 'ra') // => { name: 'ra' }
 * set({}, 'cards[0].value', 2) // => { cards: [{ value: 2 }] }
 *
 * Thanks to
 * @link https://github.com/rayepps/radash/blob/master/src/object.ts#L214
 */
export declare const set: <T extends object, K>(initial: T, path: string, value: K) => T;
