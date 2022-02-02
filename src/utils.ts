export type OmitKeys<T, K extends keyof T> = Omit<T, K>
export type ArrayOf<T extends unknown[]> = T extends (infer A)[] ? A : never

export type IsInArray<A extends readonly unknown[], X> = X extends A[number]
	? true
	: false

export type IsUnique<A extends readonly unknown[]> = A extends readonly [
	infer X,
	...infer Rest
]
	? IsInArray<Rest, X> extends true
		? `Encountered value with duplicates: ${X extends string ? X : never}`[]
		: IsUnique<Rest>
	: A
