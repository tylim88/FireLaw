import * as ts from 'typescript'
import * as fs from 'fs'
import path from 'path'
// https://www.jameslmilner.com/post/ts-ast-and-ts-morph-intro/

export const getAst = (filename: string) => {
	const code = fs.readFileSync(path.resolve(process.cwd(), filename), 'utf-8')
	const data = ts.createSourceFile('temp.ts', code, ts.ScriptTarget.ESNext)
	return data
}
