import { Set } from './set'

/* eslint-disable @typescript-eslint/no-unused-vars */
export const list = <T>(list: T[]): List<T> => {
	return 1 as unknown as List<T>
}
/* eslint-enable @typescript-eslint/no-unused-vars */

export type List<T> = {
	/**
	 * Check if value v exists in list(array) x.
	 * @param value The element to look for in list.
	 * @returns true if this list contains the element.
	 * ```ts
		list(['a','b']).in('a') === true
	 * ```
	 */
	in: (value: T extends null ? never : T) => boolean
	/**
	 * Create a new list by adding the elements of another list to the end of this list.
	 * @param list list to concatenate. Value must not be null.
	 * @returns the list with all elements of the other list added.
	 */
	concat: (list: T extends null ? never : T[]) => boolean
	/**
	 * Determine whether the list contains all elements in another list.
	 * @param list The list of elements to look for. Value must not be null.
	 * @returns true if this list contains all elements in the other.
	 */
	hasAll: (list: T extends null ? never : T[]) => boolean
	/**
	 * Determine whether the list contains any element in another list.
	 * @param list The list of elements to look for. Value must not be null.
	 * @returns  true if this list contains any element in the other.
	 */
	hasAny: (list: T extends null ? never : T[]) => boolean
	/**
	 * Determine whether all elements in the list are present in another list.
	 * @param list The list of elements to look for. Value must not be null.
	 * @returns true if all elements in the list are present in another list, excluding repeated elements.
	 * ```ts
		list(['a', 'b']).hasOnly(['a', 'c']) === false
		list(['a', 'b']).hasOnly(['a', 'b', 'c']) === true
		list(['a', 'b']).hasOnly(['b', 'a']) === true
		list(['a', 'a', 'b']).hasOnly(['a', 'b', 'b']) === true
		list(['a', 'a', 'b']).hasOnly(['a', 'b', 'b', 'c']) === true
	 * ```
	 */
	hasOnly: (list: T extends null ? never : T[]) => boolean
	/**
	 * Create a new list by removing the elements of another list from this list.
	 * @param list list of elements to remove. Value must not be null.
	 * @returns  true if this list contains any element in the other.
	 */
	removeAll: (list: T extends null ? never : T[]) => boolean
	/**
	 * Get the number of values in the list.
	 * @returns the number of values in the list.
	 */
	size: () => number
	/**
	 * ```md
		Returns a set containing all unique elements in the list.
		In case that two or more elements are equal but non-identical, the result set will only contain the first element in the list. The remaining elements are discarded.
		```
	 * @returns set containing unique values in the given list.
	 */
	toSet: () => Set<T>
}
