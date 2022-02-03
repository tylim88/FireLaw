import 'jest'
import { allow } from 'allow'

describe('test allow arguments types', () => {
	it('unique operations', () => {
		expect(() => allow(true, 'read', 'write')).not.toThrow()
	})
	it('duplicate operations', () => {
		// @ts-expect-error
		expect(() => allow(true, 'read', 'write', 'read')).not.toThrow()
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
	it('chain unique operations', () => {
		expect(() =>
			allow(true, 'update', 'delete')
				.allow(false, 'list')
				.allow(false, 'create')
		).not.toThrow()
	})
	it('chain duplicate operations', () => {
		expect(() =>
			allow(true, 'update', 'delete')
				.allow(false, 'list')
				// @ts-expect-error
				.allow(false, 'delete')
				// @ts-expect-error
				.allow(true, 'update')
		).not.toThrow()
	})
	it('write and granular read operations', () => {
		expect(() => allow(true, 'write', 'list').allow(true, 'get')).not.toThrow()
		expect(() =>
			// @ts-expect-error
			allow(true, 'write', 'list').allow(true, 'get', 'list')
		).not.toThrow()
	})
	it('write and granular write operations', () => {
		// @ts-expect-error
		expect(() => allow(true, 'write', 'update')).not.toThrow()
		expect(() =>
			// @ts-expect-error
			allow(true, 'update').allow(true, 'list', 'write')
		).not.toThrow()
	})
})
