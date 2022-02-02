import { allow } from './allow'
import { ArrayOf } from './utils'
import { FirelordUtils } from 'firelord'
import { Request } from './request'
import { Resource } from './resource'

type MatchPaths<
	T extends FirelordUtils.MetaType['ancestors'],
	Y extends unknown[] = []
> = T extends [infer X, ...infer Rest]
	? X extends ArrayOf<FirelordUtils.MetaType['ancestors']>
		? `/${X['colName']}/${
				| `{${string}_${Y['length']}}`
				| (string extends X['docID']
						? never
						: `${X['docID']}_${Y['length']}`)}${Rest extends FirelordUtils.MetaType['ancestors']
				? MatchPaths<Rest, [1, ...Y]>
				: never}`
		: never
	: ''

type MatchParams<
	T extends string,
	U extends string = never
> = T extends `${string}/{${infer P}_${infer Q}}/${infer Rest}`
	? MatchParams<Rest, `${P}_${Q}` | U>
	: T extends `${string}/${string}_${number}/${infer Rest}`
	? MatchParams<Rest, U>
	: T extends `${string}/{${infer P}_${infer Q}}`
	? `${P}_${Q}` | U
	: U

export const match =
	<T extends FirelordUtils.MetaType>(
		recursiveWildcard: 'none' | '**' | '***' = 'none'
	) =>
	<U extends MatchPaths<T['ancestors']>>(
		path: U,
		callback: (
			request: Request<T['write']>,
			resource: Resource<T['read']>,
			params: { [index in MatchParams<U>]: index }
		) => ReturnType<typeof allow>
	) => {
		return
	}
