import 'jest'
import { readFile } from './readFile'

describe('test read config file', () => {
	it('test correct path and correct output', () => {
		expect(
			readFile([
				'src/transpiler/dummyDoc/abc.txt',
				'src/transpiler/dummyDoc/efg.txt',
			])
		).toEqual(['123', '456'])
	})
	it('test incorrect content', () => {
		expect(() =>
			readFile([
				'src/transpiler/dummyDoc/abc.txt',
				'src/transpiler/dummyDoc/efg.txt',
			])
		).not.toEqual(['123', '456', '7'])
	})
})
