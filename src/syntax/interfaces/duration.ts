/**
 * Duration with nanosecond accuracy.
 */
export type Duration = {
	/**
	 * Get the nanoseconds portion (signed) of the duration from -999,999,999 to +999,999,999 inclusive.
	 * @returns non-null rules.Integer nanoseconds portion of the dutation.
	 */
	nanos: () => number

	/**
	 * Get the seconds portion (signed) of the duration from -315,576,000,000 to +315,576,000,000 inclusive.
	 * @returns non-null rules.Integer seconds portion of the dutation.
	 */
	seconds: () => number
}
