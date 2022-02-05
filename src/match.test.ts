import 'jest'
import { matchCreator } from './match'
import { FirelordUtils } from 'firelord'
import { allow } from './allow'

export type parent = FirelordUtils.ReadWriteCreator<
	{ test: boolean },
	'colName',
	string
>
export type child = FirelordUtils.ReadWriteCreator<
	{ test: boolean },
	'colName1',
	string,
	parent
>
export type grandChild = FirelordUtils.ReadWriteCreator<
	{ test: boolean },
	'colName2',
	'name1' | 'name2',
	child
>
/* eslint-disable @typescript-eslint/no-unused-vars */
describe('test match types', () => {
	it('test wildcard path and params', () => {
		expect(() =>
			matchCreator<parent>().match(
				'/colName/{abc_0}',
				'none',
				(request, resource, params) => {
					const { abc_0 } = params
					// @ts-expect-error
					const { abc_1 } = params
					return allow(true, 'read').allow(true, 'write')
				}
			)
		).not.toThrow()

		expect(() =>
			matchCreator<child>().match(
				'/colName/{abc_0}/colName1/{efg_1}',
				'none',
				(request, resource, params) => {
					const { abc_0, efg_1 } = params
					// @ts-expect-error
					const { abc_1 } = params
					// @ts-expect-error
					const { efg_2 } = params
					return allow(true, 'read')
				}
			)
		).not.toThrow()
	})
	it('test wildcard of literal wildcard path and params', () => {
		expect(() =>
			matchCreator<grandChild>().match(
				'/colName/{abc_0}/colName1/{efg_1}/colName2/{name1_2}',
				'none',
				(request, resource, params) => {
					const { abc_0, efg_1, name1_2 } = params
					// @ts-expect-error
					const { abc_1 } = params
					// @ts-expect-error
					const { efg_2 } = params

					return allow(true, 'read')
				}
			)
		).not.toThrow()
	})
	it('test wildcard and literal co-exist path and params', () => {
		expect(() =>
			matchCreator<grandChild>().match(
				'/colName/{abc_0}/colName1/{efg_1}/colName2/name2_2',
				'none',
				(request, resource, params) => {
					const { abc_0, efg_1 } = params
					// @ts-expect-error
					const { abc_1 } = params
					// @ts-expect-error
					const { efg_2 } = params
					// @ts-expect-error
					const { name2_2 } = params

					return allow(true, 'read')
				}
			)
		).not.toThrow()
	})
	it('test return without allow', () => {
		expect(() =>
			matchCreator<child>().match(
				'/colName/{abc_0}/colName1/{efg_1}',
				'none',
				'none',
				// @ts-expect-error
				(request, resource, params) => {
					return
				}
			)
		).not.toThrow()
	})
	it('test union type', () => {
		expect(() =>
			matchCreator<parent | child>().match(
				'/colName/{abc_0}',
				'none',
				(request, resource, params) => {
					const { abc_0 } = params
					// @ts-expect-error
					const { abc_1 } = params
					// @ts-expect-error
					const { efg_1 } = params
					return allow(true, 'read')
				}
			)
		).not.toThrow()

		expect(() =>
			matchCreator<parent | child>().match(
				'/colName/{abc_0}/colName1/{efg_1}',
				'none',
				(request, resource, params) => {
					const { abc_0, efg_1 } = params
					// @ts-expect-error
					const { abc_1 } = params
					// @ts-expect-error
					const { efg_2 } = params
					return allow(true, 'read')
				}
			)
		).not.toThrow()
	})
	it('test empty docID', () => {
		expect(() =>
			matchCreator<parent>().match(
				// @ts-expect-error
				'/colName/{_0}',
				'none',
				(request, resource, params) => {
					return allow(true, 'read')
				}
			)
		).not.toThrow()

		expect(() =>
			matchCreator<child>().match(
				// @ts-expect-error
				'/colName/{abc_0}/colName1/{_1}',
				'none',
				(request, resource, params) => {
					return allow(true, 'read')
				}
			)
		).not.toThrow()

		expect(() =>
			matchCreator<grandChild>().match(
				// @ts-expect-error
				'/colName/{abc_0}/colName1/{efg_1}/colName2/{_2}',
				'none',
				(request, resource, params) => {
					return allow(true, 'read')
				}
			)
		).not.toThrow()

		expect(() =>
			matchCreator<grandChild>().match(
				// @ts-expect-error
				'/colName/{abc_0}/colName1/{efg_1}/colName2/_2',
				'none',
				(request, resource, params) => {
					return allow(true, 'read')
				}
			)
		).not.toThrow()
	})
})
/* eslint-enable @typescript-eslint/no-unused-vars */
