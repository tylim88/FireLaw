import { LatLng } from '../interfaces/latlng'
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Globally available latitude-longitude functions. These functions are accessed using the latlng. prefix.
 */
export const latlng = {
	/**
	 * Create a LatLng from floating point coordinates.
	 * @param lat rules.Float. The latitude. Value must not be null.
	 * @param lng rules.Float. The longitude. Value must not be null.
	 * @returns non-null rules.LatLng a LatLng.
	 * ```ts
	 * latlng.value(45.0, 90.0)
	 * ```
	 */
	value: (lat: number, lng: number) => {
		return 1 as unknown as LatLng
	},
}
/* eslint-enable @typescript-eslint/no-unused-vars */
