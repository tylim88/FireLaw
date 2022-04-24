import { getAst } from './getAst'
import 'jest'

describe('test read config file', () => {
	it('test correct path', () => {
		expect(__dirname).toBe('')
		expect(() =>
			getAst([
				'src/transpiler/dummyDoc/abc.ts',
				'src/transpiler/dummyDoc/efg.ts',
			])
		).not.toThrow()
	})
	it('test incorrect path', () => {
		expect(() =>
			getAst([
				'src/transpiler/dummyDoc/abc1.ts',
				'src/transpiler/dummyDoc/efg.ts',
			])
		).toThrow()
	})
})
