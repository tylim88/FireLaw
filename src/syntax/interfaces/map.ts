import { Types } from 'firelordjs'
import { MapDiff } from './mapDiff'

/* eslint-disable @typescript-eslint/no-unused-vars */
export const map = <T extends Record<string, unknown>>(value: T) => {
	return 1 as unknown as Map<T>
}

export type Map<T extends Record<string, unknown>> = {
	/**
	 * Check if key k exists in map x
	 * @param value The element to look for in list.
	 * @returns true if this list contains the element.
	 * ```ts
		map({'a':1,'b':2}).in('a') === true
	 * ```
	 */
	in: (value: keyof T) => boolean

	/**
	 * Return a rules.MapDiff representing the result of comparing the current Map to a comparison Map.
	 * @param map_to_compare rules.Map. A Map to which the current (calling) Map will be compared.
	 * @returns rules.MapDiff object representing the result of the comparison.
	 */
	diff: (map_to_compare: Map<T>) => MapDiff<T>

	/**
	 *  ```md
	 * Returns the value associated with a given search key string.

		For nested Maps, involving keys and sub-keys, returns the value associated with a given sub-key string. The sub-key is identified using a list, the first item of which is a top-level key and the last item the sub-key whose value is to be looked up and returned. See the nested Map example below.

		The function requires a default value to return if no match to the given search key is found.
		```
		@param key (non-null rules.String or non-null rules.List) Either a key specified as a string, or for nested Maps, a sub-key specified using list syntax.
		@param default_value Value to return if the Map does not contain the given search key. Can be any Rules language type.
		@returns value Value corresponding to the given key, or the default return value specified by default_value if no match to the given key is found. Since Map contents are user-defined, the data type of the returned value can be any Rules language type.
	```ts
		// "c" is not a key in the supplied Map, returns default value 7.
		map({"a": 3,"b": 2}).get("c", 7) == 7

		// Default result can be any type, e.g. a list such as [1, 1].
		map({"a": [2, 7], "b": [9, 12]}).get("c", [1, 1]) === [1, 1]

		// Return a list on a successful match.
		map({"a": [2, 7],"b": [9, 12]}).get("b", [1, 1]) === [9, 12]

		// For nested Maps, use list ["a", "b"] to specify lookup on sub-key "b".
		map({"a": {"b": 1},"c": 2}).get(["a", "b"], 7) === 1
	```
	 */
	get: <U extends string[]>(
		key: U extends never
			? U
			:
					| DotAnnotationToArray<keyof Types.ObjectFlattenHybrid<T> & string>
					| keyof T,
		default_value: Types.ObjectFlattenHybrid<T>[ArrayToDotAnnotation<U>]
	) => Types.ObjectFlattenHybrid<T>[ArrayToDotAnnotation<U>]

	/**
	 * Get the list of keys in the map.
	 * @returns non-null rules.List list of keys.
	 */
	keys: () => (keyof T)[]

	/**
	 * Get the number of entries in the map.
	 * @returns non-null rules.Integer number of entries.
	 */
	size: () => number

	/**
	 * Get the list of values in the map.
	 * @returns non-null rules.List list of values.
	 */
	values: () => T[keyof T][]
}

type DotAnnotationToArray<T extends string> = T extends `${infer P}.${infer R}`
	? [P, ...DotAnnotationToArray<R>]
	: [T]

type ArrayToDotAnnotation<T extends string[]> = T extends [infer P, ...infer R]
	? `${P & string}${R extends string[]
			? R extends []
				? ''
				: `.${ArrayToDotAnnotation<R>}`
			: ''}`
	: ''
