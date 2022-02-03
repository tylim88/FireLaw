import { IsUnique } from 'utils'

export type Operations =
	| 'read'
	| 'list'
	| 'get'
	| 'write'
	| 'create'
	| 'update'
	| 'delete'

export type Allow<U extends Operations[] = []> = {
	allow: <T extends Operations[]>(
		condition: boolean,
		...operations: IsUnique<[...T, ...U]> extends []
			? T extends []
				? 'missing operation arguments'
				: T
			: IsUnique<T>
	) => Allow<[...T, ...U]>
}
/* eslint-disable @typescript-eslint/no-unused-vars */
export const allow = <T extends Operations[]>(
	condition: boolean,
	...operations: IsUnique<T> extends []
		? T extends []
			? 'missing operation arguments'
			: T
		: IsUnique<T>
): Allow<T> => {
	return { allow } as Allow<T>
}
/* eslint-disable @typescript-eslint/no-unused-vars */

allow(true, 'update')

export const allowGroup = (...callback: typeof allow[]) => {
	return
}
