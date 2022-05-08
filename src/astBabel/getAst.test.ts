import { getAst } from './getAst'

describe('test read config file', () => {
	it('test correct path', () => {
		expect(getAst(['src/testFiles/abc.ts'])[0].type).toBe('File')
	})
	it('test incorrect path', () => {
		expect(() =>
			getAst(['src/testFiles/abc1.ts', 'src/testFiles/efg.ts'])
		).toThrow()
	})
})
