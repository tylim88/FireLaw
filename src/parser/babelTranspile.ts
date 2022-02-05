import * as babel from '@babel/core'

export const babelTranspile = (code: string) =>
	babel.transformSync(code, {
		presets: ['@babel/preset-typescript', '@babel/preset-env'],
	})
