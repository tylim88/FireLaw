import * as fs from 'fs'
import { z } from 'zod'
import pathR from 'path'

const config = z.object({ include: z.array(z.string()), dist: z.string() })

export type config = z.infer<typeof config>

export const readConfigFile = (path?: string) => {
	const data: config = JSON.parse(
		fs.readFileSync(
			pathR.resolve(__dirname, path || 'firelaw.json')
		) as unknown as string
	)

	config.parse(data)

	return data
}
