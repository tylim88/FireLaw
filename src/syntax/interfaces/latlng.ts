export type LatLng = {
	/**
	 * Calculate distance between two LatLng points in distance (meters).
	 * @param other rules.LatLng. The other point. Value must not be null.
	 * @returns non-null rules.Float distance in meters.
	 */
	distance: (other: LatLng) => number

	/**
	 * Get the latitude value in the range [-90.0, 90.0].
	 * @returns non-null rules.Float latitude.
	 */
	latitude: () => number

	/**
	 * Get the longitude value in the range [-180.0, 180.0].
	 * @returns non-null rules.Float longitude.
	 */
	longitude: () => number
}
