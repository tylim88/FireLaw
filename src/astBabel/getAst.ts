import * as babel from '@babel/core'
import path from 'path'
import { File } from '@babel/types'

export const getAst = (filenames: string[]) => {
	return filenames.reduce<File[]>((acc, filename) => {
		const data = babel.transformFileSync(filename, {
			ast: true,
			configFile: path.resolve(__dirname, 'settings.js'),
			filename: 'temp.ts', // [BABEL] unknown: Preset /* your preset */ requires a filename to be set when babel is called directly,
		})
		if (data?.ast) {
			return acc.concat(data.ast)
		} else {
			throw 'no ast'
		}
	}, [])
}
