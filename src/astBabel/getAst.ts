import * as babel from '@babel/core'
import path from 'path'

export const getAst = (filename: string) => {
	const data = babel.transformFileSync(filename, {
		ast: true,
		configFile: path.resolve(__dirname, 'settings.js'),
		filename: 'temp.ts', // [BABEL] unknown: Preset /* your preset */ requires a filename to be set when babel is called directly,
	})
	if (data?.ast) {
		return data.ast
	} else {
		throw 'no ast'
	}
}
