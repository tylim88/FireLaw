export type OmitKeys<T, K extends keyof T> = Omit<T, K>
export type ArrayOf<T extends unknown[]> = T extends (infer A)[] ? A : never
export type HasDuplicateInArray<
	A extends readonly unknown[],
	X
> = X extends A[number] ? true : false
export type IsInteger<T extends number> = `${T}` extends `${number}.${number}`
	? 'Integer Only'
	: T
