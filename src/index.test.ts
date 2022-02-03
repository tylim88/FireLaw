import 'jest'
import { getCreator } from 'index'
import { parent, child, grandChild } from 'match.test'

describe('test path type', () => {
	it('test wildcard path', () => {
		expect(() => getCreator<parent>().get('/colName/abc')).not.toThrow()
		// @ts-expect-error
		expect(() => getCreator<parent>().get('/colName/abc/')).not.toThrow()
		// @ts-expect-error
		expect(() => getCreator<parent>().get('/colName/abc/a')).not.toThrow()
	})
	it('test literal path', () => {
		expect(() =>
			getCreator<grandChild>().get('/colName/abc/colName1/efg/colName2/name1')
		).not.toThrow()
		expect(() =>
			// @ts-expect-error
			getCreator<grandChild>().get('/colName/abc/colName1/efg/colName2/unknown')
		).not.toThrow()
		expect(() =>
			// @ts-expect-error
			getCreator<grandChild>().get('/colName/abc/colName1/efg/colName2/')
		).not.toThrow()
		expect(() =>
			// @ts-expect-error
			getCreator<grandChild>().get('/colName/abc')
		).not.toThrow()
	})
})
