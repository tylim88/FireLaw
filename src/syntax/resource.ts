import { MetaType } from 'firelordjs'
import { Map } from './interfaces'
export type Resource<T extends Record<string, unknown>> = {
	__name__: string
	id: string
	data: Map<T>
}
