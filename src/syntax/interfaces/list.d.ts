/* eslint-enable @typescript-eslint/no-unused-vars */

interface Array<T> {
	FSR: {
		/**
	 * Check if value v exists in list(array) x.
	 * @param value The element to look for in list.
	 * @returns true if this list contains the element.
	 * ```ts
		['a','b'].FSR.in('a') === true
	 * ```
	 */
		in: (value: T) => boolean

		/**
		 * Create a new list by adding the elements of another list to the end of this list.
		 * @param list rules.List to concatenate. Value must not be null.
		 * @returns non-null rules.List the list with all elements of the other list added.
		 */
		concat: <U>(list: U[]) => Array<T | U>

		/**
		 * Determine whether the list contains all elements in another list.
		 * @param list The rules.List of elements to look for. Value must not be null.
		 * @returns non-null rules.Boolean true if this list contains all elements in the other.
		 */
		hasAll: (list: T[]) => boolean

		/**
		 * Determine whether the list contains any element in another list.
		 * @param list The rules.List of elements to look for. Value must not be null.
		 * @returns non-null rules.Boolean true if this list contains any element in the other.
		 */
		hasAny: (list: T[]) => boolean

		/**
	 * Determine whether all elements in the list are present in another list.
	 * @param list The rules.List of elements to look for. Value must not be null.
	 * @returns non-null rules.Boolean true if all elements in the list are present in another list, excluding repeated elements.
	 * ```ts
		['a', 'b'].FSR.hasOnly(['a', 'c']) === false
		['a', 'b'].FSR.hasOnly(['a', 'b', 'c']) === true
		['a', 'b'].FSR.hasOnly(['b', 'a']) === true
		['a', 'a', 'b'].FSR.hasOnly(['a', 'b', 'b']) === true
		['a', 'a', 'b'].FSR.hasOnly(['a', 'b', 'b', 'c']) === true
	 * ```
	 */
		hasOnly: (list: T[]) => boolean

		/**
		 * Join the elements in the list into a string, with a separator.
		 * @param separator rules.String to separate elements. Value must not be null.
		 * @returns non-null rules.String the list joined as a string.
		 */
		join: (separator: string) => string

		/**
		 * Create a new list by removing the elements of another list from this list.
		 * @param list rules.List of elements to remove. Value must not be null.
		 * @returns non-null rules.List the list with all elements of the other list removed.
		 */
		removeAll: (list: T[]) => boolean

		/**
		 * Get the number of values in the list.
		 * @returns non-null rules.List the list with all elements of the other list removed.
		 */
		size: () => number

		/**
	 * ```md
		Returns a set containing all unique elements in the list.

		In case that two or more elements are equal but non-identical, the result set will only contain the first element in the list. The remaining elements are discarded.
		```
	 * @returns non-null rules.Set containing unique values in the given list.
	 */
		toSet: () => FSRSet<T>
	}
}
