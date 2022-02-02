import { OmitKeys } from './utils'

export type Operations =
	| 'read'
	| 'list'
	| 'get'
	| 'write'
	| 'create'
	| 'update'
	| 'delete'

export type AllowEnd = 'allowEnd'

export type Allow<ExistingOperation extends Operations = never> = {
	read: () => OmitKeys<
		Allow<ExistingOperation | 'read'>,
		ExistingOperation | 'read'
	>
	list: () => OmitKeys<
		Allow<ExistingOperation | 'list'>,
		ExistingOperation | 'list'
	>
	get: () => OmitKeys<
		Allow<ExistingOperation | 'get'>,
		ExistingOperation | 'get'
	>
	write: () => OmitKeys<
		Allow<ExistingOperation | 'write'>,
		ExistingOperation | 'write'
	>
	create: () => OmitKeys<
		Allow<ExistingOperation | 'create'>,
		ExistingOperation | 'create'
	>
	update: () => OmitKeys<
		Allow<ExistingOperation | 'update'>,
		ExistingOperation | 'update'
	>
	delete: () => OmitKeys<
		Allow<ExistingOperation | 'delete'>,
		ExistingOperation | 'delete'
	>
	condition: (
		condition: boolean
	) => OmitKeys<Allow<ExistingOperation>, ExistingOperation | 'condition'>
	end: () => AllowEnd
}

export const allow = <
	ExistingOperation extends Operations = never
>(): Allow<ExistingOperation> => {
	return {
		read: () => {
			return allow() as OmitKeys<
				Allow<ExistingOperation | 'read'>,
				ExistingOperation | 'read'
			>
		},
		list: () => {
			return allow() as OmitKeys<
				Allow<ExistingOperation | 'list'>,
				ExistingOperation | 'list'
			>
		},
		get: () => {
			return allow() as OmitKeys<
				Allow<ExistingOperation | 'get'>,
				ExistingOperation | 'get'
			>
		},
		write: () => {
			return allow() as OmitKeys<
				Allow<ExistingOperation | 'write'>,
				ExistingOperation | 'write'
			>
		},
		create: () => {
			return allow() as OmitKeys<
				Allow<ExistingOperation | 'create'>,
				ExistingOperation | 'create'
			>
		},
		update: () => {
			return allow() as OmitKeys<
				Allow<ExistingOperation | 'update'>,
				ExistingOperation | 'update'
			>
		},
		delete: () => {
			return allow() as OmitKeys<
				Allow<ExistingOperation | 'delete'>,
				ExistingOperation | 'delete'
			>
		},
		condition: () => {
			return allow() as OmitKeys<
				Allow<ExistingOperation>,
				ExistingOperation | 'condition'
			>
		},
		end: () => 'allowEnd',
	}
}
