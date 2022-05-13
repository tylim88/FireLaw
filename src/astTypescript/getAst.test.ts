import { getAst } from './getAst'
import * as ts from 'typescript'

describe('test read config file', () => {
	it('test correct path', () => {
		expect(getAst('src/testFiles/abc.ts').kind).toBe(303)
	})
	it('test incorrect path', () => {
		expect(() => getAst('src/testFiles/abc1.ts')).toThrow()
	})
})
