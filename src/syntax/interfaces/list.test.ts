import { Types } from 'firelordjs'

describe('test list', () => {
	it('test hasAll', () => {
		;() => {
			;[1].FSR.hasAll([2, 3, 4, 5])

			// @ts-expect-error
			;[1 as const].FSR.hasAll([2, 3, 4, 5])

			// @ts-expect-error
			;[1 as const].FSR.hasAll(['1'])
		}
	})

	it('test hasOnly', () => {
		;() => {
			;[1].FSR.hasOnly([2, 3, 4, 5])

			// @ts-expect-error
			;[1 as const].FSR.hasOnly([2, 3, 4, 5])

			// @ts-expect-error
			;[1 as const].FSR.hasOnly(['1'])
		}
	})

	it('test hasAny', () => {
		;() => {
			;[1].FSR.hasAny([2, 3, 4, 5])

			// @ts-expect-error
			;[1 as const].FSR.hasAny([2, 3, 4, 5])

			// @ts-expect-error
			;[1 as const].FSR.hasAny(['1'])
		}
	})

	it('test concat', () => {
		;() => {
			const A = [1 as const].FSR.concat(['1'])

			Types.IsTrue<Types.IsEqual<typeof A, (string | 1)[]>>()
		}
	})
})
