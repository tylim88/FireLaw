import { MetaType, ServerTimestamp } from 'firelordjs'
import { Resource } from './resource'
import { Path } from './path'

// ! need verify
export type Request<T extends MetaType> = {
	auth?: {
		/**
		 * the UID of the requesting user.
		 */
		uid: string
		/**
		 * a map of JWT token claims.
		 */
		token: {
			/**
			 * The email address associated with the account, if present.
			 */
			email?: string
			/**
			 * `true` if the user has verified they have access to the `email` address.
			 */
			email_verified: boolean
			/**
			 * The phone number associated with the account, if present.
			 */
			phone_number?: string
			/**
			 * ```md
			 * The user's display name, if set.
			 * ```
			 */
			name?: string
			/**
			 * ```md
			 * non-null rules.String
			 * The user's Firebase UID. This is unique within a project.
			 * ```
			 */
			sub: string
			firebase: {
				/**
				 * A map of all the identities that are associated with this user's account. The keys of the map can be any of the following: `email`, `phone`, `google.com`, `facebook.com`, `github.com`, `twitter.com`. The values of the map are lists of unique identifiers for each identitity provider associated with the account. For example, `request.auth.token.firebase.identities["google.com"][0]` contains the first Google user ID associated with the account.
				 */
				identities: {
					email: (string | null)[]
					phone: (string | null)[]
					'google.com': (string | null)[]
					'facebook.com': (string | null)[]
					'github.com': (string | null)[]
					'twitter.com': (string | null)[]
				}
				/**
				 * The sign-in provider used to obtain this token. Can be one of the following strings: `custom`, `password`, `phone`, `anonymous`, `google.com`, `facebook.com`, `github.com`, `twitter.com`.
				 */
				sign_in_provider:
					| `custom`
					| `password`
					| `phone`
					| `anonymous`
					| `google.com`
					| `facebook.com`
					| `github.com`
					| `twitter.com`
			}
		}
	}
	/**
	 * ```md
	 * non-null rules.Path
	 * Path of the affected resource.
	 * ```
	 */
	path: Path<T['docPath']>
	/**
	 * ```md
	 * non-null rules.Map
	 * Map of query properties, when present.
	 *	limit - query limit clause.
	 *	offset - query offset clause.
	 *	orderBy - query orderBy clause.
	 * Example:
	 * ```
	 * ```ts
	 * allow(['list'],iF(request.query.limit <= 50))
	 * ```
	 */
	query: { limit: number; offset: number; orderBy: keyof T['writeFlatten'] }
	/**
	 * ```md
	 * non-null rules.firestore.Resource
	 * The new resource value, present on write requests only.
	 * ```
	 */
	resource: Resource<T, 'write'>
	/**
	 * non-null rules.Timestamp
	```md
	When the request was received by the service.

	For Firestore write operations that include server-side timestamps, this time will be equal to the server timestamp.
	```
	```ts
	// Make sure that 'myServerTimestampField' was set using a
	// server-side timestamp.
	request.time == request.resource.data.myServerTimestampField
	```
	 */
	time: ServerTimestamp
}
