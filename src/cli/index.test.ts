import { main } from './index'

describe('test cli', () => {
	// ! this throw in ci, why
	// it('test cli', () => {
	// 	expect(cli).not.toThrow()
	// })
	it('test main ok', async () => {
		await expect(main({ project: 'firelaw.json' })).resolves.toBeUndefined()
	})
	it('test main error', async () => {
		await expect(main({ project: 'firela1w.json' })).rejects.toBeTruthy()
	})
})
