import { MetaType } from 'firelordjs'
import { MapDiff } from './mapDiff'
import { Set } from './set'

/* eslint-disable @typescript-eslint/no-unused-vars */
export const map = <T extends MetaType['read'] | MetaType['write']>(
	value: T
) => {
	//
}
/* eslint-enable @typescript-eslint/no-unused-vars */
export type Map<T extends MetaType['read'] | MetaType['write']> = {
	/**
	 * Check if key k exists in map x
	 * @param value The element to look for in list.
	 * @returns true if this list contains the element.
	 * ```ts
		map({'a':1,'b':2}).in('a') === true
	 * ```
	 */
	in: (value: keyof T) => boolean
	diff: (value: Map<T>) => MapDiff<T>
}
