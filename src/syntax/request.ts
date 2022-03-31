import { MetaType, ServerTimestamp } from 'firelordjs'
import { Resource } from './resource'

export type Request<T extends MetaType['write']> = {
	auth?: {
		uid: string
		token: {
			email?: string
			email_verified: boolean
			name?: string
			phone_number?: string
			sub: string
			firebase: {
				identities: {
					email: (string | undefined)[]
					phone: (string | undefined)[]
					'google.com': (string | undefined)[]
					'facebook.com': (string | undefined)[]
					'github.com': (string | undefined)[]
					'twitter.com': (string | undefined)[]
				}
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
	resource: Resource<T>
	query: { limit: number; offset: number; orderBy: keyof T }
	time: ServerTimestamp
}
