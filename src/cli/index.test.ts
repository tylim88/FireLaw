import 'jest'
import { main, cli } from './index'

describe('test cli', () => {
	it('test main ok', () => {
		expect(main({ project: 'firelaw.json' })).toBe(undefined)
	})
	it('test main error', () => {
		expect(typeof main({ project: 'firelaw1.json' })).toBe('string')
	})
	it('test cli', () => {
		expect(cli).not.toThrow()
	})
})
