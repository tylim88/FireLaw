/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Globally available mathematical functions. These functions are accessed using the math. prefix and operate on numerical values.
 */

export const math = {
	/**
	 * Absolute value of a numeric value.
	 * @param num number. Numeric value.
	 * @returns non-null number the absolute numeric value of the input.
	 * ```ts
	 * math.abs(-1) === 1
	 * math.abs(1) === 1
	 * ```
	 */
	abs: (num: number) => num,

	/**
	 * Ceiling of the numeric value.
	 * @param num number. Numeric value.
	 * @returns non-null rules.Integer the ceiling of the given value.
	 * ```ts
math.ceil(2.0) === 2
math.ceil(2.1) === 3
math.ceil(2.7) === 3
	 * ```
	 */
	ceil: (num: number) => num,

	/**
	 * Floor of the numeric value.
	 * @param num number. Numeric value.
	 * @returns non-null rules.Integer the floor of the given value.
	 * ```ts
math.floor(1.9) === 1
math.floor(2.0) === 2
math.floor(2.7) === 2
	 * ```
	 */
	floor: (num: number) => num,

	/**
	 * Test whether the value is ±∞.
	 * @param num number. Numeric value.
	 * @returns non-null rules.Boolean true if the number is positive or negative infinity.
	 * ```ts
math.isInfinite(infinity) === true
math.isInfinite(100) === false
	 * ```
	 */
	isInfinite: (num: number) => num,

	/**
	 * Test whether the value is NaN.
	 * @param num number. Numeric value.
	 * @returns non-null rules.Boolean true if the value is not a number.
	 * ```ts
math.isNaN(NaN) === true
math.isNaN(100) === false
	 * ```
	 */
	isNaN: (num: number) => num,

	/**
	 * Return the value of the first argument raised to the power of the second argument.
	 * @param base number. Numeric base value.
	 * @param exponent number. Numeric base value.
	 * @returns non-null rules.Float the value of the first argument raised to the power of the second argument.
	 */
	pow: (base: number, exponent: number) => 1,

	/**
	 * Round the input value to the nearest int.
	 * @param num number. Numeric value.
	 * @returns non-null rules.Integer the nearest int to the given value.
	 * ```ts
math.round(1.9) === 2
math.round(2.4) === 2
math.round(2.5) === 3
	 * ```
	 */
	round: (num: number) => num,

	/**
	 * Square root of the input value.
	 * @param num number. Numeric value.
	 * @returns non-null rules.Float the square root of the input value.
	 * ```ts
math.sqrt(4) == 2.0
math.sqrt(2.25) == 1.5
	 * ```
	 */
	sqrt: (num: number) => num,
}
