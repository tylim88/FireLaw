import * as fs from 'fs'
import { z } from 'zod'

const config = z.object({ include: z.array(z.string()), dist: z.string() })

export const readConfigFile = (path?: string) => {
	const data: z.infer<typeof config> = JSON.parse(
		fs.readFileSync(path || 'firelaw.json') as unknown as string
	)

	config.parse(data)

	return data
}
