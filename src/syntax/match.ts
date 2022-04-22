import { allow } from './allow'
import { ArrayOf } from '../utils'
import { MetaType } from 'firelordjs'
import { Request, Resource } from './interfaces'

export type MatchPaths<
	T extends MetaType['ancestors'],
	Y extends unknown[] = []
> = T extends [infer X, ...infer Rest]
	? X extends ArrayOf<MetaType['ancestors']>
		? `/${X['collectionID']}/${
				| `{${string}_${Y['length']}}`
				| (string extends X['docID']
						? never
						: `${X['docID']}_${Y['length']}`)}${Rest extends MetaType['ancestors']
				? MatchPaths<Rest, [1, ...Y]>
				: never}`
		: never
	: ''

export type MatchParams<
	T extends string,
	U extends string = never
> = T extends `${string}/{${infer P}_${infer Q}}/${infer Rest}`
	? MatchParams<Rest, `${P}_${Q}` | U>
	: T extends `${string}/${string}_${number}/${infer Rest}`
	? MatchParams<Rest, U>
	: T extends `${string}/{${infer P}_${infer Q}}`
	? `${P}_${Q}` | U
	: U

export type NoEmptyDocId<T extends string> =
	T extends `${string}/{${infer P}_${number}}/${infer Rest}`
		? P extends ''
			? 'Error: Empty DocId'
			: NoEmptyDocId<Rest>
		: T extends `${string}/${infer P}_${number}/${infer Rest}`
		? P extends ''
			? 'Error: Empty DocId'
			: NoEmptyDocId<Rest>
		: T extends `${string}/{${infer P}_${number}}`
		? P extends ''
			? 'Error: Empty DocId'
			: true
		: T extends `${string}/${infer P}_${number}`
		? P extends ''
			? 'Error: Empty DocId'
			: true
		: 'Error: Incorrect Type'
/* eslint-disable @typescript-eslint/no-unused-vars */
export const matchCreator = <T extends MetaType>() => {
	const match = <
		U extends MatchPaths<T['ancestors']>,
		//eslint-disable-next-line @typescript-eslint/no-explicit-any
		V extends ReturnType<typeof allow>[] // maximum 7 operations
	>(
		path: NoEmptyDocId<U> extends true
			? U
			: `${NoEmptyDocId<U>}, the correct type is: ${MatchPaths<
					T['ancestors']
			  >}`,
		recursiveWildcard: 'none' | '**' | '***',
		callback: (
			request: Request<T>,
			resource: Resource<T, 'read'>,
			params: { [index in MatchParams<U>]: index }
		) => V
	) => {
		return
	}
	return { match }
}
/* eslint-enable @typescript-eslint/no-unused-vars */
