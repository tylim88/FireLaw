import { IsInteger } from '../../utils'
import { Timestamp } from '../interfaces'
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Globally available timestamp functions. These functions are accessed using the timestamp. prefix.
 */
export const timestamp = {
	/**
	 *Make a timestamp from a year, month, and day.
	 * @param year rules.Integer. The year. Value must not be null.
	 * @param month rules.Integer. The month. Value must not be null.
	 * @param day rules.Integer. The day. Value must not be null.
	 * @returns non-null rules.Timestamp a timestamp.
	 * ```ts
// Timestamp for 1984-01-02T00:00:00Z
timestamp.date(1984, 1, 2);
	 * ```
	 */
	date: <Y extends number, M extends number, D extends number>(
		year: IsInteger<Y>,
		month: IsInteger<M>,
		day: IsInteger<D>
	) => 1 as unknown as Timestamp,

	/**
	 * Make a timestamp from an epoch time in milliseconds.
	 * @param epochMillis rules.Integer. Time since the epoch in ms. Value must not be null.
	 * @returns non-null rules.Timestamp a timestamp.
	 */
	value: <T extends number>(epochMillis: IsInteger<T>) =>
		1 as unknown as Timestamp,
}
