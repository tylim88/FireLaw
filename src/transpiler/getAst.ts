import * as babel_ from '@babel/core'
import path from 'path'
import { File } from '@babel/types'

export const getAst = (filenames: string[]) => {
	return filenames.reduce<File[]>((acc, filename) => {
		const dataArr: File[] = []
		const data = babel_.transformFileSync(filename, {
			ast: true,
			configFile: path.resolve(__dirname, 'settings.js'),
			filename: 'file.ts', // [BABEL] unknown: Preset /* your preset */ requires a filename to be set when babel is called directly,
		})
		if (data?.ast) {
			dataArr.push(data.ast)
		} else {
			throw 'no ast'
		}
		return acc.concat(dataArr)
	}, [])
}
