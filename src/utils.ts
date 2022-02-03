export type OmitKeys<T, K extends keyof T> = Omit<T, K>
export type ArrayOf<T extends unknown[]> = T extends (infer A)[] ? A : never

export type Write = 'create' | 'update' | 'delete'
export type Read = 'list' | 'get'

export type IsInArray<A extends readonly unknown[], X> = X extends A[number]
	? true
	: false

export type WriteInArray<A extends readonly unknown[], X> = X extends 'write'
	? A extends []
		? false
		: A[number] extends Write
		? true
		: false
	: X extends Write
	? A extends []
		? false
		: A[number] extends 'write'
		? true
		: false
	: false

export type ReadInArray<A extends readonly unknown[], X> = X extends 'read'
	? A extends []
		? false
		: A[number] extends Read
		? true
		: false
	: X extends Read
	? A extends []
		? false
		: A[number] extends 'read'
		? true
		: false
	: false

export type IsUnique<A extends readonly unknown[]> = A extends readonly [
	infer X,
	...infer Rest
]
	? IsInArray<Rest, X> extends true
		? `Encountered value with duplicates: ${X extends string ? X : never}`[]
		: WriteInArray<Rest, X> extends true
		? `Encountered granular conflicts: 'create' | 'update' | 'delete' conflicts with 'write`[]
		: ReadInArray<Rest, X> extends true
		? `Encountered granular conflicts: 'list' | 'get' conflict with 'read`[]
		: IsUnique<Rest>
	: A

type u = ['a'] extends [infer X, ...infer Rest] ? Rest : never

type i = never extends '' ? true : false
