import 'jest'
import { match } from './match'
import { FirelordUtils } from 'firelord'
import { allow } from './allow'

type parent = FirelordUtils.ReadWriteCreator<
	{ test: boolean },
	'colName',
	string
>
type child = FirelordUtils.ReadWriteCreator<
	{ test: boolean },
	'colName2',
	string,
	parent
>
type grandChild = FirelordUtils.ReadWriteCreator<
	{ test: boolean },
	'colName3',
	'name1' | 'name2',
	child
>

describe('test match types', () => {
	it('test wildcard path and params', () => {
		expect(() =>
			match<parent>()('/colName/{abc_0}', (request, resource, params) => {
				const { abc_0 } = params
				// @ts-expect-error
				const { abc_1 } = params
				return allow('read', true)
			})
		).not.toThrow()

		expect(() =>
			match<child>()(
				'/colName/{abc_0}/colName2/{efg_1}',
				(request, resource, params) => {
					const { abc_0, efg_1 } = params
					// @ts-expect-error
					const { abc_1 } = params
					// @ts-expect-error
					const { efg_2 } = params
					return allow('read', true)
				}
			)
		).not.toThrow()
	})
	it('test wildcard of literal wildcard path and params', () => {
		expect(() =>
			match<grandChild>()(
				'/colName/{abc_0}/colName2/{efg_1}/colName3/{name1_2}',
				(request, resource, params) => {
					const { abc_0, efg_1, name1_2 } = params
					// @ts-expect-error
					const { abc_1 } = params
					// @ts-expect-error
					const { efg_2 } = params

					return allow('read', true)
				}
			)
		).not.toThrow()
	})
	it('test wildcard and literal co-exist path and params', () => {
		expect(() =>
			match<grandChild>()(
				'/colName/{abc_0}/colName2/{efg_1}/colName3/name2_2',
				(request, resource, params) => {
					const { abc_0, efg_1 } = params
					// @ts-expect-error
					const { abc_1 } = params
					// @ts-expect-error
					const { efg_2 } = params
					// @ts-expect-error
					const { name2_2 } = params

					return allow('read', true)
				}
			)
		).not.toThrow()
	})
	it('test return without allow', () => {
		expect(() =>
			match<child>()(
				'/colName/{abc_0}/colName2/{efg_1}',
				'none',
				// @ts-expect-error
				(request, resource, params) => {
					return
				}
			)
		).not.toThrow()
	})
})
