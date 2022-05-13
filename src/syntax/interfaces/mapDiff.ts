/**
```md 
MapDiff type.

The MapDiff type represents the result of comparing two rules.Map objects.

There is no MapDiff literal for use in creating diffs. MapDiff objects are returned by calls to the rules.Map#diff function.

The MapDiff functions described below are called by chaining with rules.Map#diff. All MapDiff functions return rules.Set objects listing keys compared between Map objects.
```
```ts
request.resource.data.diff(resource.data).affectedKeys().hasOnly(list(["a"]).toSet());
```
 */
export type MapDiff<T extends Record<string, unknown>> = {
	/**
	 * Returns a rules.Set, which lists any keys that the Map calling diff() contains that the Map passed to diff() does not.
	 * @returns non-null rules.Set , a list of keys added to the rules.Map passed to the Map.diff() function.
	 * ```ts
	 * map({"a":1}).diff({"b":1}).addedKeys() === list({["a"]}).toSet()
	 * map({"a":1}).diff({"a":2}).addedKeys() === list({[]}).toSet()
	 * ```
	 */
	addedKeys: () => Set<keyof T>

	/**
	 * Returns a rules.Set, which lists any keys that have been added to, removed from or modified from the Map calling diff() compared to the Map passed to diff(). This function returns the set equivalent to the combined results of MapDiff.addedKeys(), MapDiff.removedKeys() and MapDiff.changedKeys().
	 * @returns non-null rules.Set, a list of keys added to, removed from or changed from the rules.Map passed to the Map.diff() function.
	 * ```ts
	 * map({"a":0, "c":0, "u":0}).diff({"r":0, "c":1, "u": 0}).affectedKeys() === list(["a", "r", "c"]).toSet()
	 * ```
	 */
	affectedKeys: () => Set<keyof T>

	/**
	 * Returns a rules.Set, which lists any keys that appear in both the Map calling diff() and the Map passed to diff(), but whose values are not equal.
	 * @returns non-null rules.Set , a list of keys that appear in both rules.Maps but whose values are not equal.
	 * ```ts
	 * map({"a":0}).diff({"a":1, "b":4}).changedKeys() === list(["a"]).toSet()
	 * ```
	 */
	changedKeys: () => Set<keyof T>

	/**
	 * Returns a rules.Set, which lists any keys that the Map calling diff() does not contain compared to the Map passed to diff().
	 * @returns non-null rules.Set , a list of keys removed from the rules.Map passed to the Map.diff() function.
	 * ```ts
	 * map({}).diff({"a":1}).removedKeys() == list(["a"]).toSet()
	 * ```
	 */
	removedKeys: () => Set<keyof T>

	/**
	 * Returns a rules.Set, which lists any keys that appear in both the Map calling diff() and the Map passed to diff(), and whose values are equal.
	 * @returns non-null rules.Set , a list of keys that appear in both rules.Maps but whose values are equal.
	 * ```ts
	 * map({"a": 0}).diff({"a":0}).unchangedKeys() === list(["a"]).toSet()
	 * ```
	 */
	unchangedKeys: () => Set<keyof T>
}
