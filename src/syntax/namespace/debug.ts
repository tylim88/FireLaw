/**
 * @param arg any
 * @returns the same type as arg
 * ```md
 * A basic debug function that prints Security Rules language objects, variables and statement results as they are being evaluated by the Security Rules engine. The outputs of debug are written to firestore-debug.log.

    The debug function can only be called inside Rules conditions.

    debug function blocks are only executed by the Security Rules engine in the Firestore emulator, part of the Firebase Emulator Suite. The debug function has no effect in production.

    Debug logfile entries are prepended by a string identifying the Rules language data type of the log output (for example, string_value, map_value).

    Calls to debug can be nested.

    Currently, the debug feature does not support the concept of logging levels (for example, INFO, WARN, ERROR).
```
```ts
    allow(['read', 'update', 'delete'], iF(debug(debug(request.auth.uid) == debug(resource.data.ownerUID))))
```
```md
// firestore-debug.log
// ...produce logfile output like the following.
string_value: "alice" // for debug(request.auth.uid)

string_value: "alice" // for debug(resource.data.ownerUID)

bool_value: true      // for the outermost enclosing debug() call
```
 */

/* eslint-disable @typescript-eslint/no-unused-vars */
export const debug = <T>(arg: T): T => {
	return 1 as unknown as T
}
