import 'jest'
import { readConfigFile } from './readConfigFile'
import config from '../../firelaw.json'

describe('test read config file', () => {
	it('test correct path and correct output', () => {
		expect(readConfigFile('../../firelaw.json')).toEqual(config)
	})
	it('test incorrect path', () => {
		expect(() => readConfigFile('src/cli/firelaw.json')).toThrow()
	})
	it('test incorrect content', () => {
		expect(() => readConfigFile('../../firelaw.json')).not.toEqual({
			include: ['a1bc.txt'],
			dist: 'firestore.rules',
		})
	})
})
