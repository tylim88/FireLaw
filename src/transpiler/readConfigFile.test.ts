import 'jest'
import { readConfigFile } from './readConfigFile'

describe('test read config file', () => {
	it('test correct path and correct output', () => {
		expect(readConfigFile('src/transpiler/dummyDoc/firelaw.json')).toEqual({
			include: ['abc.txt'],
			dist: 'firestore.rules',
		})
	})
	it('test incorrect path', () => {
		expect(() => readConfigFile('src/transpiler/firelaw.json')).toThrow()
	})
	it('test incorrect content', () => {
		expect(() => readConfigFile('src/transpiler/firelaw.json')).not.toEqual({
			include: ['a1bc.txt'],
			dist: 'firestore.rules',
		})
	})
})
