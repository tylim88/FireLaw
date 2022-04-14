import 'jest'
import { main, cli } from './index'

describe('test cli', () => {
	it('test main ok', () => {
		expect(main({ project: '../../firelaw.json' })).toBe(false)
	})
	it('test main error', () => {
		expect(main({ project: 'src/cli/dummyConfig/firelaw1.json' })).toBe(true)
	})
	it('test cli', () => {
		expect(cli).not.toThrow()
	})
})
