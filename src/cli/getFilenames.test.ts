import 'jest'
import { getFilenames } from './getFilenames'

describe('test read config file', () => {
	it('test correct path and correct output', () => {
		expect(
			getFilenames(['src/cli/dummyDoc/abc.ts', 'src/cli/dummyDoc/efg.ts'])
		).toEqual(['src/cli/dummyDoc/abc.ts', 'src/cli/dummyDoc/efg.ts'])
	})
	it('test wildcard path', () => {
		expect(getFilenames(['src/cli/dummyDoc/*'])).toEqual([
			'src/cli/dummyDoc/abc.ts',
			'src/cli/dummyDoc/efg.ts',
		])
	})
	it('test recursive wildcard path', () => {
		expect(getFilenames(['src/cli/dummyDoc/**/*'])).toEqual([
			'src/cli/dummyDoc/abc.ts',
			'src/cli/dummyDoc/efg.ts',
			'src/cli/dummyDoc/recursive/123.txt',
		])
	})
})
