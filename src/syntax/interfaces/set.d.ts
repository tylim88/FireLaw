type FSRSet<T> = {
	/**
	 * Check if value v exists in set(array) x.
	 * @param value The element to look for in set.
	 * @returns true if this set contains the element.
	 * ```ts
		['a','b'].FSR.toSet().in('a') === true
	 * ```
	 */
	in: (value: FSRSet<T>) => boolean

	/**
     * ```md 
     * Returns a set that is the difference between the set calling difference() and the set passed to difference(). That is, returns a set containing the elements in the comparison set that are not in the specified set.
     * 
       If the sets are identical, returns an empty set (size() === 0).
        ```
        @returns non-null rules.Set difference set containing the elements found in the comparison set that are not gound in the calling set.
        ```ts
        ['a','b'].FSR.toSet().difference(list(['a','c']).toSet()) === list(['b']).toSet()
        ```
     */
	difference: (set: FSRSet<T>) => FSRSet<T>

	/**
	 * Test whether the set calling hasAll() contains all of the items in the comparison set passed to hasAll().
	 * @param set The set of elements to look for.
	 * @returns non-null rules.Boolean whether the calling set contains all the items of the comparison set or list.
     * ```ts
            ['a','b'].FSR.toSet().hasAll(['a','c']) === false
            ['d','e'].FSR.toSet().hasAll(['d','e','f']) === true
        ```
	 */
	hasAll: (set: T[] | FSRSet<T>) => boolean

	/**
	 * Test whether the set calling hasAny() contains any of the items in the set or list passed to hasAny().
	 * @param set The set of elements to look for.
	 * @returns non-null rules.Boolean whether the calling set contains any of the items of the comparison set or list.
     * ```ts
        ['a','b'].FSR.toSet().hasAny(list(['c','d']).toSet()) === false
        ['a','b'].FSR.toSet().hasAny(list(['a','c']).toSet()) === true
       ```
	 */
	hasAny: (set: T[] | FSRSet<T>) => boolean

	/**
	 * Test whether the set calling hasOnly() contains only the items in the comparison set or list passed to hasOnly().
	 * @param set The set of elements to look for.
	 * @returns non-null rules.Boolean whether the calling set contains only the items of the comparison set or list.
	 * ```ts
        ['a','b'].FSR.toSet().hasOnly(['a','c']) === false
        ['a','b'].FSR.toSet().hasOnly(['a','b']) === true
	 * ```
	 */
	hasOnly: (set: T[] | FSRSet<T>) => boolean

	/**
     * ```md
     * Returns a set that is the intersection between the set calling intersection() and the set passed to intersection(). That is, returns a set containing the elements the sets have in common.

       If the sets have no elements in common, returns an empty set (size() === 0).
       ```
       @returns non-null rules.Set intersection set containing the elements found in both the calling set and the comparison set.
       ```ts
       ['a','b'].FSR.toSet().intersection(list(['a','c']).toSet()) === list(['a']).toSet()
       ```
     */
	intersection: (set: FSRSet<T>) => FSRSet<T>

	/**
	 * Get the number of values in the set.
	 * @returns non-null rules.Integer the number of values in the specified set.
	 */
	size: () => number

	/**
     * ```md
     * Returns a set that is the union of the set calling union() and the set passed to union(). That is, returns a set that contains all elements from both sets.
       ```
       @returns non-null rules.Set union set containing all of the elements in both the calling set and comparison set.
       ```ts
       ['a','b'].FSR.toSet().union(list(['a','c']).toSet()) === list(['a', 'b', 'c']).toSet()
       ```
     */
	union: (set: FSRSet<T>) => FSRSet<T>
}
