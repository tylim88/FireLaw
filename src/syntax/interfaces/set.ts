import { List } from './list'
export type Set<T> = {
	/**
	 * Check if value v exists in set(array) x.
	 * @param value The element to look for in set.
	 * @returns true if this set contains the element.
	 * ```ts
		list(['a','b']).toSet().in('a') === true
	 * ```
	 */
	in: (value: T extends null ? never : T) => boolean
	/**
     * ```md 
     * Returns a set that is the difference between the set calling difference() and the set passed to difference(). That is, returns a set containing the elements in the comparison set that are not in the specified set.
     * 
       If the sets are identical, returns an empty set (size() === 0).
        ```
        @returns difference set containing the elements found in the comparison set that are not gound in the calling set.
        ```ts
        list(['a','b']).toSet().difference(list(['a','c']).toSet()) === list(['b']).toSet()
        ```
     */
	difference: (set: T extends null ? never : Set<T>) => Set<T>
	/**
	 * Determine whether the set contains all elements in another set.
	 * @param set The set of elements to look for.
	 * @returns true if this set contains all elements in the other.
     * ```ts
            list(['a','b']).toSet().hasAll(['a','c']) === false
            list(['d','e']).toSet().hasAll(['d','e','f']) === true
        ```
	 */
	hasAll: (set: T extends null ? never : T[] | List<T> | Set<T>) => boolean
	/**
	 * Test whether the set calling hasAll() contains all of the items in the comparison set passed to hasAll().
	 * @param set The set of elements to look for.
	 * @returns whether the calling set contains all the items of the comparison set or list.
     * ```ts
        list(['a','b']).toSet().hasAny(list(['c','d']).toSet()) === false
        list(['a','b']).toSet().hasAny(list(['a','c']).toSet()) === true
       ```
	 */
	hasAny: (set: T extends null ? never : T[] | List<T> | Set<T>) => boolean
	/**
	 * Test whether the set calling hasOnly() contains only the items in the comparison set or list passed to hasOnly().
	 * @param set The set of elements to look for.
	 * @returns whether the calling set contains only the items of the comparison set or list.
	 * ```ts
        list(['a','b']).toSet().hasOnly(['a','c']) === false
        list(['a','b']).toSet().hasOnly(['a','b']) === true
	 * ```
	 */
	hasOnly: (set: T extends null ? never : T[] | List<T> | Set<T>) => boolean

	/**
     * ```md
     * Returns a set that is the intersection between the set calling intersection() and the set passed to intersection(). That is, returns a set containing the elements the sets have in common.

       If the sets have no elements in common, returns an empty set (size() === 0).
       ```
       @returns intersection set containing the elements found in both the calling set and the comparison set.
       ```ts
       list(['a','b']).toSet().intersection(list(['a','c']).toSet()) === list(['a']).toSet()
       ```
     */
	intersection: (set: T extends null ? never : Set<T>) => Set<T>
	/**
	 * Get the number of values in the set.
	 * @returns the number of values in the set.
	 */
	size: () => number
	/**
     * ```md
     * Returns a set that is the union of the set calling union() and the set passed to union(). That is, returns a set that contains all elements from both sets.
       ```
       @returns union set containing all of the elements in both the calling set and comparison set.
       ```ts
       list(['a','b']).toSet().union(list(['a','c']).toSet()) === list(['a', 'b', 'c']).toSet()
       ```
     */
	union: (set: T extends null ? never : Set<T>) => Set<T>
}
