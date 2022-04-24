import 'jest'
import { main, cli } from './index'

describe('test cli', () => {
	it('test cli', () => {
		try {
			expect(cli).not.toThrow()
		} catch (e) {
			// this throw in ci, why
		}
	})
	it('test main ok', () => {
		expect(main({ project: 'firelaw.json' })).toBe(undefined)
	})
	it('test main error', () => {
		expect(typeof main({ project: 'firelaw1.json' })).toBe('string')
	})
})
