import { MetaType } from 'firelordjs'
import { Map } from './interfaces'
export type Resource<T extends MetaType['read'] | MetaType['write']> = {
	__name__: string
	id: string
	data: Map<T>
}
