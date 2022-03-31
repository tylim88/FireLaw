import { MetaType } from 'firelordjs'

export type Resource<T extends MetaType['read'] | MetaType['write']> = {
	__name__: string
	id: string
	data: T
}
