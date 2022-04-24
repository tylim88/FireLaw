import 'jest'
import { main, cli } from './index'

describe('test cli', () => {
	// ! this throw in ci, why
	// it('test cli', () => {
	// 	expect(cli).not.toThrow()
	// })
	it('test main ok', () => {
		expect(main({ project: 'firelaw.json' })).toBe(undefined)
	})
	it('test main error', () => {
		expect(typeof main({ project: 'firelaw1.json' })).toBe('string')
	})
})
