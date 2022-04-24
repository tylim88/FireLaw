import { Duration } from './duration'
/**
 * A timestamp in UTC with nanosecond accuracy.
 */
export type Timestamp = {
	/**
	 * Timestamp value containing year, month, and day only.
	 * @returns non-null rules.Timestamp The timestamp.
	 */
	date: () => Timestamp

	/**
	 * Get the day value of the timestamp.
	 * @returns non-null rules.Integer day value.
	 */
	day: () => number

	/**
	 * Get the day of the week as a value from 1 to 7.
	 * @returns non-null rules.Integer the day of the week.
	 */
	dayOfWeek: () => number

	/**
	 * Get the day of the year as a value from 1 to 366.
	 * @returns non-null rules.Integer the day of the year.
	 */
	dayOfYear: () => number

	/**
	 * Get the hours value of the timestamp.
	 * @returns non-null rules.Integer hours value.
	 */
	hours: () => number

	/**
	 * Get the minutes value of the timestamp.
	 * @returns non-null rules.Integer minutes value.
	 */
	minutes: () => number

	/**
	 * Get the month value of the timestamp.
	 * @returns non-null rules.Integer month value.
	 */
	month: () => number

	/**
	 * Get the nanos value of the timestamp.
	 * @returns non-null rules.Integer nanos value.
	 */
	nanos: () => number

	/**
	 * Get the seconds value of the timestamp.
	 * @returns non-null rules.Integer seconds value.
	 */
	seconds: () => number

	/**
	 * Get the duration value from the time portion of the timestamp.
	 * @returns non-null rules.Duration duration value.
	 */
	time: () => Duration

	/**
	 * Get the time in milliseconds since the epoch.
	 * @returns non-null rules.Integer time in milliseconds.
	 */
	toMillis: () => number

	/**
	 * Get the year value of the timestamp.
	 * @returns non-null rules.Integer year value.
	 */
	year: () => number
}
