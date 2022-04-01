import { HasDuplicateInArray } from '../utils'

type WriteGranular = 'create' | 'update' | 'delete'
type ReadGranular = 'list' | 'get'
type Write = 'write'
type Read = 'read'
type Operations = Read | ReadGranular | Write | WriteGranular

type WriteInArray<A extends unknown[], X> = X extends WriteGranular
	? Write extends A[number]
		? true
		: false
	: false

type ReadInArray<A extends unknown[], X> = X extends ReadGranular
	? Read extends A[number]
		? true
		: false
	: false

type IsUnique<Rest extends unknown[], Head extends unknown[]> = Rest extends []
	? []
	: Rest extends [infer X, ...infer R]
	? [
			HasDuplicateInArray<[...Head], X> extends true
				? `Error: Duplicate ${X & string}`
				: WriteInArray<[...Head, ...R], X> extends true
				? `Error: ${Write} already exist, ${X & string} is unnecessary`
				: ReadInArray<[...Head, ...R], X> extends true
				? `Error: ${Read} already exist, ${X & string} is unnecessary`
				: X,
			...IsUnique<R, [...Head, X]>
	  ]
	: never[] // impossible route

type IF = { type: 'iF' }

/* eslint-disable @typescript-eslint/no-unused-vars */
export const allow = <T extends Operations[]>(
	operations: IsUnique<[...T], []> extends []
		? T extends []
			? 'Error: missing operation arguments'
			: T
		: IsUnique<[...T], []>,
	ifClause: IF
) => {
	return {
		if: (condition: boolean) => {
			//
		},
	}
}
/* eslint-disable @typescript-eslint/no-unused-vars */

export const iF = (condition: boolean): IF => {
	return { type: 'iF' }
}

// ! why T extends never ? T : IsUnique<[...T], []> doesn't work?
