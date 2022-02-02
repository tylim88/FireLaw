import 'jest'
import { allow } from './allow'

describe('test allow arguments types', () => {
	it('unique operations', () => {
		expect(() => allow('read', 'write', true)).not.toThrow()
	})
	it('duplicate operations', () => {
		// @ts-expect-error
		expect(() => allow('read', 'write', 'read', true)).not.toThrow()
	})
	it('empty argument', () => {
		// @ts-expect-error
		expect(() => allow()).not.toThrow()
	})
	it('only boolean argument', () => {
		// @ts-expect-error
		expect(() => allow(true)).not.toThrow()
	})
	it('only one operations arguments', () => {
		// @ts-expect-error
		expect(() => allow('read')).not.toThrow()
	})
	it('only two operations arguments', () => {
		// @ts-expect-error
		expect(() => allow('read', 'write')).not.toThrow()
	})
})
