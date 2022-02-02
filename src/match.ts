import { FirelordUtils } from 'firelord'
import { AllowEnd } from './allow'
import { Request } from './request'
import { Resource } from './resource'

type MatchPaths_<
	Path extends string,
	Head extends string = never,
	IsTail extends boolean = false
> = Path extends `${infer P}/${infer Q}`
	? IsTail extends false
		? `/${P}/`
		: `${P | `${P}Id` | `${P}Uid` | `${P}DocName`}`
	: Path | `${Head}Id` | `${Head}Uid` | `${Head}DocName`

type MatchPaths<T extends FirelordUtils.MetaType['ancestors']> =
	T['length'] extends 0 ? never : never

export const match = <
	T extends FirelordUtils.MetaType,
	U extends `/${T['docPath']}`
>(
	path: U extends never ? never : U,
	recursiveWildcard: 'none' | '**' | '***',
	callback: (
		request: Request<T['write']>,
		resource: Resource<T['read']>
	) => AllowEnd
) => {
	return
}
