import 'jest'
import { creator } from './index'
import { parent, grandChild } from './match.test'

describe('test path type', () => {
	it('test wildcard path', () => {
		expect(() => creator<parent>().get('/colName/abc')).not.toThrow()
		// @ts-expect-error
		expect(() => creator<parent>().get('/colName/abc/')).not.toThrow()
		// @ts-expect-error
		expect(() => creator<parent>().get('/colName/abc/a')).not.toThrow()
	})
	it('test literal path', () => {
		expect(() =>
			creator<grandChild>().get('/colName/abc/colName1/efg/colName2/name1')
		).not.toThrow()
		expect(() =>
			// @ts-expect-error
			creator<grandChild>().get('/colName/abc/colName1/efg/colName2/unknown')
		).not.toThrow()
		expect(() =>
			// @ts-expect-error
			creator<grandChild>().get('/colName/abc/colName1/efg/colName2/')
		).not.toThrow()
		expect(() =>
			// @ts-expect-error
			creator<grandChild>().get('/colName/abc')
		).not.toThrow()
	})
})
