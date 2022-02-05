#!/usr/bin/env node
// https://x-team.com/blog/a-guide-to-creating-a-nodejs-command/

import { readFile } from './readFile'
import { readConfigFile } from './readConfigFile'
import { Command } from 'commander'

const program = new Command()

program
	.name('FireLaw')
	.description('Write truly safe and scalable Firestore Rules in Typescript')
	.version('0.0.0')
	.option('-p, --project [value]', 'custom config location')
	.action(str => {
		let include: string[] = []
		let error = false
		try {
			include = readConfigFile(str.project).include
		} catch (err) {
			error = true
			console.error(err)
		}
		if (!error) {
			const codeToParse = readFile(include)
			console.log({ codeToParse })
		}
	})

program.parse()
