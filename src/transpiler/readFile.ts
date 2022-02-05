import * as fs from 'fs'
import glob from 'glob'

export const readFile = (args: string[]) => {
	return args.reduce<string[]>((acc, path) => {
		const dataArr: string[] = []
		const files = glob.sync(path)
		files.forEach(file => {
			const data = fs.readFileSync(file, 'utf8')
			dataArr.push(data)
		})
		return acc.concat(dataArr)
	}, [])
}
