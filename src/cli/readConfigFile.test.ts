import 'jest'
import { readConfigFile } from './readConfigFile'

describe('test read config file', () => {
	it('test correct path and correct output', () => {
		expect(readConfigFile('src/cli/dummyConfig/firelaw.json')).toEqual({
			include: ['src/cli/**/*'],
			dist: 'firestore.rules',
		})
	})
	it('test incorrect path', () => {
		expect(() => readConfigFile('src/cli/firelaw.json')).toThrow()
	})
	it('test incorrect content', () => {
		expect(() => readConfigFile('src/cli/firelaw.json')).not.toEqual({
			include: ['a1bc.txt'],
			dist: 'firestore.rules',
		})
	})
})
