import 'jest'
import { getFilenames } from './getFilenames'

describe('test read config file', () => {
	it('test correct path and correct output', () => {
		expect(
			getFilenames(['src/testFiles/abc.ts', 'src/testFiles/efg.ts'])
		).toEqual(['src/testFiles/abc.ts', 'src/testFiles/efg.ts'])
	})
	it('test wildcard path', () => {
		expect(getFilenames(['src/testFiles/*'])).toEqual([
			'src/testFiles/abc.ts',
			'src/testFiles/efg.ts',
			'src/testFiles/writeTest.rules',
		])
	})
	it('test recursive wildcard path', () => {
		expect(getFilenames(['src/testFiles/**/*'])).toEqual([
			'src/testFiles/abc.ts',
			'src/testFiles/efg.ts',
			'src/testFiles/recursive/123.txt',
			'src/testFiles/writeTest.rules',
		])
	})
})
