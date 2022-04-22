export const duration = 1 as unknown as Duration

type Duration = {
	/**
	 * Absolute value of a duration.
	 * @param duration rules.Duration. Duration value. Value must not be null.
	 * @returns non-null rules.Duration the absolute duration value of the input.
	 * ```ts
	 * duration.abs(duration.value(-10, 's')) == duration.value(10, 's')
	 * ```
	 */
	abs: (duration: Duration) => Duration

	/**
	 * Create a duration from hours, minutes, seconds, and nanoseconds.
	 * @param hours rules.Integer. Hours portion of the duration. Value must not be null.
	 * @param mins rules.Integer. Minutes portion of the duration. Value must not be null.
	 * @param secs rules.Integer. Seconds portion of the duration. Value must not be null.
	 * @param nanos rules.Integer. Nanoseconds portion of the duration. Value must not be null.
	 * @returns non-null rules.Duration a Duration.
	 */
	time: <
		H extends number,
		M extends number,
		S extends number,
		N extends number
	>(
		hours: IsInteger<H>,
		mins: IsInteger<M>,
		secs: IsInteger<S>,
		nanos: IsInteger<N>
	) => Duration

	/**
     * Create a duration from a numeric magnitude and string unit.
     * ```md
Unit	Description
w	    Weeks
d	    Days
h	    Hours
m	    Minutes
s	    Seconds
ms	    Milliseconds
ns	    Nanoseconds
     * ```
	 * Create a duration from a numeric magnitude and string unit.
	 * @param magnitude rules.Integer. Unitless magnitude of the duration. Value must not be null.
	 * @param unit rules.String. Unit of the duration. Value must not be null.
	 * @returns non-null rules.Duration a Duration.
     * ```ts
     * duration.value(1, 'w') // Create a duration for 1 week of time.
     * ```
	 */
	value: <T extends number>(
		magnitude: IsInteger<T>,
		unit: 'w' | 'd' | 'h' | 'm' | 's' | 'ms' | 'ns'
	) => Duration
}

type IsInteger<T extends number> = `${T}` extends `${number}.${number}`
	? 'Integer Only'
	: T
