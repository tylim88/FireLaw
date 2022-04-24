import { Resource, Path } from '../interfaces'
import { MetaType } from 'firelordjs'

/* eslint-disable @typescript-eslint/no-unused-vars */
export const firestore = <T extends MetaType>() => {
	return 1 as unknown as Firestore<T>
}

export type Firestore<T extends MetaType> = {
	/**
	 * Check if a document exists.
	 * @param path rules.Path. The path. Value must not be null.
	 * @returns non-null rules.Boolean true if the resource exists.
	 * ```ts
	 * allow(['write'], iF(exists(/databases/$(database)/documents/things/other)))
	 * ```
	 */
	exist: (path: Path<T['docPath']>) => boolean

	/**
	 * Check if a document exists, assuming the current request succeeds. Equivalent to getAfter(path) !== null.
	 * @param path rules.Path. The path. Value must not be null.
	 * @returns non-null rules.Boolean true if the resource exists.
	 * ```ts
	 * allow(['write'], iF(doc.exists(path("databases/$(database)/documents/things/other"))))
	 * ```
	 */
	existAfter: (path: Path<T['docPath']>) => boolean

	/**
	 * Get the contents of a firestore document.
	 * @param path rules.Path. The path. Value must not be null.
	 * @returns non-null rules.firestore.Resource the document, or null if it does not exist.
	 * ```ts
	  // Get the 'thing1' document from the 'things' collection
      doc.get(path("databases/$(database)/documents/things/thing1"))
	 * ```
	 */
	get: (path: Path<T['docPath']>) => Resource<T, 'read'> | null

	/**
	 * Get the projected contents of a document. The document is returned as if the current request had succeeded. Useful for validating documents that are part of a batched write or transaction.
	 * @param path rules.Path. The path. Value must not be null.
	 * @returns non-null rules.firestore.Resource the document, or null if it does not exist.
	 * ```ts
	  // Get the 'thing1' document from the 'things' collection
      doc.getAfter(path("databases/$(database)/documents/things/thing1"))
	 * ```
	 */
	getAfter: (path: Path<T['docPath']>) => Resource<T, 'read'> | null
}
