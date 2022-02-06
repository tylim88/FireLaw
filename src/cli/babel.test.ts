import { babel } from './babel'
import 'jest'

describe('test read config file', () => {
	it('test correct path', () => {
		expect(() =>
			babel(['src/cli/dummyDoc/abc.ts', 'src/cli/dummyDoc/efg.ts'])
		).not.toThrow()
	})
	it('test incorrect path', () => {
		expect(() =>
			babel(['src/cli/dummyDoc/abc1.ts', 'src/cli/dummyDoc/efg.ts'])
		).toThrow()
	})
})
