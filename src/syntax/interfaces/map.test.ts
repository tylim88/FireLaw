import { Types } from 'firelordjs'
import { map } from './map'

describe('test Map', () => {
	it('test get', () => {
		map({ a: 1 }).get(['a'], 2)
		// @ts-expect-error
		map({ a: 1 as const }).get(['a'], 2)
		// @ts-expect-error
		map({ a: 1 }).get(['a'], '1')
	})

	it('test get nested', () => {
		map({ a: { b: 1 }, c: 3 }).get(['a'], { b: 2 })
		// @ts-expect-error
		map({ a: { b: 1 }, c: 3 }).get(['c'], { b: 2 })
		// @ts-expect-error
		map({ a: { b: 1 as const }, c: 3 }).get(['a'], { b: 2 })
		// @ts-expect-error
		map({ a: { b: 1 }, c: 3 }).get(['a'], { b: '1' })

		map({ a: { b: 1 }, c: 3 }).get(['a', 'b'], 2)
		// @ts-expect-error
		map({ a: { b: 1 }, c: 3 }).get(['a', 'c'], 2)
		// @ts-expect-error
		map({ a: { b: 1 as const }, c: 3 }).get(['a', 'b'], 2)
		// @ts-expect-error
		map({ a: { b: 1 }, c: 3 }).get(['a', 'b'], '1')
	})
})
