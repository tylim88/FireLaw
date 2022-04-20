/* eslint-disable @typescript-eslint/no-unused-vars */
export const path = <T extends string>(path: T) => {
	return {
		/**
		 * Bind key-value pairs in a map to a path.
		 * @param map rules.Map to bind. Values must not be null.
         * ```ts
          // Make the path '/path/something/another' by binding a map
            path("somePath/$(foo)/$(bar)").bind({foo: "something", bar: "another"})
         * ```
		 */
		bind: (map: Record<GetKeys<T>, string>): void => {
			//
		},
	}
}
/* eslint-enable @typescript-eslint/no-unused-vars */

type GetKeys<T extends string> = T extends `${infer P}/${infer R}`
	? P extends `$(${infer S})`
		? S | GetKeys<R>
		: GetKeys<R>
	: T extends `$(${infer S})`
	? S
	: never
