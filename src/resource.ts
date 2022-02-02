import { FirelordUtils } from 'firelord'

export type Resource<
	T extends FirelordUtils.MetaType['read'] | FirelordUtils.MetaType['write']
> = {
	__name__: string
	id: string
	data: T
}
