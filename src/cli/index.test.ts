import 'jest'
import { main } from './index'

describe('test main function', () => {
	it('test main ok', () => {
		expect(main({ project: 'src/cli/dummyConfig/firelaw.json' })).toBe(false)
	})
	it('test main error', () => {
		expect(main({ project: 'src/cli/dummyConfig/firelaw1.json' })).toBe(true)
	})
})
