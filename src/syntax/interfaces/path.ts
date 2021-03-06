/* eslint-disable @typescript-eslint/no-unused-vars */
type Database = 'database'
/**
 * Directory-like pattern for the location of a resource.
 * @param path string
 * @returns
 */
export const path = <T extends `/databases/$(${Database})/documents/${string}`>(
	path: T
): Path<T> => {
	return 1 as unknown as Path<T>
}

type GetKeys<T extends string> = T extends `${infer P}/${infer R}`
	? P extends `$(${infer S})`
		? S | GetKeys<R>
		: GetKeys<R>
	: T extends `$(${infer S})`
	? S
	: never

export type Path<T extends string> = {
	/**
			 * Bind key-value pairs in a map to a path.
			 * @param map rules.Map. A Map to bind. Values must not be null.
			 * ```ts
			  // Make the path '/path/something/another' by binding a map
				path("somePath/$(foo)/$(bar)").bind({foo: "something", bar: "another"})
			 * ```
			 */
	bind: (map: Omit<Record<GetKeys<T>, string>, Database>) => void
} & Omit<Record<GetKeys<T>, string>, Database>

// ! need to handle numeric index
