import { allow, iF } from './allow'

describe('test allow type', () => {
	test('test positive case', () => {
		allow(['read'], iF(true))
		allow(['write'], iF(true))
		allow(['read', 'write'], iF(true))
		allow(['get', 'write'], iF(true))
		allow(['read', 'write'], iF(true))
		allow(['get', 'list', 'create', 'delete', 'update'], iF(true))
	})

	test('negative case', () => {
		allow(
			// @ts-expect-error
			[],
			iF(true)
		)
		allow(
			[
				'read',
				// @ts-expect-error
				'read',
			],
			iF(true)
		)
		allow(
			[
				'read',
				// @ts-expect-error
				'update',
				'write',
			],
			iF(true)
		)
		allow(
			[
				'read',
				// @ts-expect-error
				'list',
				'write',
			],
			iF(true)
		)
	})
})
