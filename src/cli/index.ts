#!/usr/bin/env node
// https://x-team.com/blog/a-guide-to-creating-a-nodejs-command/

import { getFilenames } from './getFilenames'
import { readConfigFile, config } from './readConfigFile'
import { Command } from 'commander'
import { writeFile } from './writeFile'

export const main = (str: { project: string }) => {
	let config: config = {
		include: [],
		dist: '',
	}
	let error: undefined | string = undefined
	try {
		config = readConfigFile(str.project)
	} catch (err) {
		error = JSON.stringify(err)
		console.error(err)
	}
	let codeToParse: string[] = []
	if (!error) {
		try {
			codeToParse = getFilenames(config.include)
		} catch (err) {
			error = JSON.stringify(err)
			console.error(err)
		}
	}

	if (!error) {
		try {
			writeFile(codeToParse, config.dist) // convert code here
		} catch (err) {
			error = JSON.stringify(err)
			console.error(err)
		}
	}
	return error as unknown as void
}

export const cli = () => {
	const program = new Command()

	program
		.name('FireLaw')
		.description('Write truly safe and scalable Firestore Rules in Typescript')
		.version('0.0.0')
		.option('-p, --project [value]', 'custom config location')
		.action(main)

	program.parse()
}
