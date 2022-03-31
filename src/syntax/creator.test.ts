import 'jest'
import { creator } from './creator'
import { parent, grandChild } from './match.test'

describe('test path type', () => {
	it('test wildcard path', () => {
		const { exists, get, getAfter } = creator<parent>()
		const arr = [exists, get, getAfter]
		arr.forEach(i => {
			expect(() => i('/colName/abc')).not.toThrow()
			// @ts-expect-error
			expect(() => i('/colName/abc/')).not.toThrow()
			// @ts-expect-error
			expect(() => i('/colName/abc/a')).not.toThrow()
		})
	})
	it('test literal path', () => {
		const { exists, get, getAfter } = creator<grandChild>()
		const arr = [exists, get, getAfter]
		arr.forEach(i => {
			expect(() => i('/colName/abc/colName1/efg/colName2/name1')).not.toThrow()
			expect(() =>
				// @ts-expect-error
				i('/colName/abc/colName1/efg/colName2/unknown')
			).not.toThrow()
			expect(() =>
				// @ts-expect-error
				i('/colName/abc/colName1/efg/colName2/')
			).not.toThrow()
			expect(() =>
				// @ts-expect-error
				i('/colName/abc')
			).not.toThrow()
		})
	})
})
