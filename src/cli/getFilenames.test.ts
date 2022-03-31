import 'jest'
import { getFilenames } from './getFilenames'

describe('test read config file', () => {
	it('test correct path and correct output', () => {
		expect(
			getFilenames([
				'src/transpiler/dummyDoc/abc.ts',
				'src/transpiler/dummyDoc/efg.ts',
			])
		).toEqual([
			'src/transpiler/dummyDoc/abc.ts',
			'src/transpiler/dummyDoc/efg.ts',
		])
	})
	it('test wildcard path', () => {
		expect(getFilenames(['src/transpiler/dummyDoc/*'])).toEqual([
			'src/transpiler/dummyDoc/abc.ts',
			'src/transpiler/dummyDoc/efg.ts',
		])
	})
	it('test recursive wildcard path', () => {
		expect(getFilenames(['src/transpiler/dummyDoc/**/*'])).toEqual([
			'src/transpiler/dummyDoc/abc.ts',
			'src/transpiler/dummyDoc/efg.ts',
			'src/transpiler/dummyDoc/recursive/123.txt',
		])
	})
})
