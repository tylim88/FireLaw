import { Map } from './map'
import { MetaType } from 'firelordjs'
import { Path } from './path'
// ! need verify
/**
 * The firestore document being read or written.
 */
export type Resource<T extends MetaType, Mode extends 'read' | 'write'> = {
	/**
	 * ```md
	 * non-null rules.Path
	 * The full document name, as a path.
	 * ```
	 * ```ts
	// Check 'name' field from the document
	resource["__name__"] === path("databases/(default)/documents/collection/document")
	 * ```
	 */
	__name__: Path<T['docPath']>
	/**
	 * ```md
	 * non-null rules.Map
	 * Map of the document data.
	 * ```
	 * ```ts
		// Check 'name' field from the document
		resource.data.name == 'John Doe'
	 * ```
	 */
	data: Map<T[Mode]>
	/**
	 * ```md
	 * non-null rules.String
	 * String of the document's key
	 * ```
	 * ```ts
		resource['__name__'] ===  path("databases/(default)/documents/collection/${resource.id}")	
	 * ```
	 */
	id: string
}
