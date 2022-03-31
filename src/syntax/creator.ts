import { ArrayOf } from '../utils'
import { MetaType } from 'firelordjs'
import { matchCreator } from './match'

export type NoEmptyDocId<T extends string> =
	T extends `/${string}/${infer P}/${infer Rest}`
		? P extends ''
			? 'Error: Empty DocId'
			: NoEmptyDocId<`/${Rest}`>
		: T extends `/${string}/${infer P}`
		? P extends ''
			? 'Error: Empty DocId'
			: true
		: 'Error: Incorrect Type'

type GetPath<T extends MetaType['ancestors']> = T extends [
	infer X,
	...infer Rest
]
	? X extends ArrayOf<MetaType['ancestors']>
		? `/${X['collectionID']}/${X['docID']}${Rest extends MetaType['ancestors']
				? GetPath<Rest>
				: never}`
		: never
	: ''
/* eslint-disable @typescript-eslint/no-unused-vars */
export const creator = <T extends MetaType>() => {
	const exists = <U extends GetPath<T['ancestors']>>(
		path: NoEmptyDocId<U> extends true
			? U
			: `${NoEmptyDocId<U>}, the correct type is: ${GetPath<T['ancestors']>}`
	): boolean => {
		return true
	}
	const get = <U extends GetPath<T['ancestors']>>(
		path: NoEmptyDocId<U> extends true
			? U
			: `${NoEmptyDocId<U>}, the correct type is: ${GetPath<T['ancestors']>}`
	): T['read'] => {
		return {} as T['read']
	}
	const getAfter = <U extends GetPath<T['ancestors']>>(
		path: NoEmptyDocId<U> extends true
			? U
			: `${NoEmptyDocId<U>}, the correct type is: ${GetPath<T['ancestors']>}`
	): T['read'] => {
		return {} as T['read']
	}
	return { exists, get, getAfter, match: matchCreator<T>() }
}

/* eslint-enable @typescript-eslint/no-unused-vars */
