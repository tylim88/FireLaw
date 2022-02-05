import 'jest'
import { readFile } from './readFile'

describe('test read config file', () => {
	it('test correct path and correct output', () => {
		expect(
			readFile(['src/cli/dummyDoc/abc.txt', 'src/cli/dummyDoc/efg.txt'])
		).toEqual(['123', '456'])
	})
	it('test ignore directory path', () => {
		expect(() => readFile(['src/cli/dummyDoc/*', 'src/cli/**/*'])).not.toThrow()
	})
	it('test incorrect content', () => {
		expect(() =>
			readFile(['src/cli/dummyDoc/abc.txt', 'src/cli/dummyDoc/efg.txt'])
		).not.toEqual(['123', '456', '7'])
	})
})
