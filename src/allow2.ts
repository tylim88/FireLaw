import { IsUnique } from './utils'
export type Operations =
	| 'read'
	| 'list'
	| 'get'
	| 'write'
	| 'create'
	| 'update'
	| 'delete'

export const allow = <
	T extends [...operations: Operations[], condition: boolean]
>(
	...args: IsUnique<T> extends [] ? T : IsUnique<T>
) => {
	return args
}

allow('read', 'write', true)
